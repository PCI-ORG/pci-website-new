// "use client"
// // wip, type errors not fixed
// import ThemeProvider from "./ThemeProvider";
// import MenuProvider from "./MenuProvider";
// import React from "react";

// function Compose({
//   components,
//   children,
// }: {
//   components: React.ReactElement[];
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       {components.reduceRight(
//         (children: React.ReactNode, Component: React.ReactElement) => {
//           return <Component>{children}</Component>;
//         },
//         children
//       )}
//     </>
//   );
// }

// export default function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <Compose components={[ThemeProvider, MenuProvider]}>{children}</Compose>
//   );
// }
