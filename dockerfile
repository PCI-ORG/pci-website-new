# referenced from next.js example dockerfile
FROM node:20.18.0-alpine AS base

# install dependencies
FROM base AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

RUN npm config set strict-ssl false

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMTRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMTRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next


COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs ./public ./public
RUN ls
COPY --chown=nextjs:nodejs ./.env ./.env

USER nextjs
ENV PORT=3000
EXPOSE 3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
# COPY ./entrypoint.sh /entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]