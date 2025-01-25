#!/bin/bash
DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
cp ${DIR}/.env.repo .env
echo $'\nNEXT_PUBLIC_STAGING=true' >> .env