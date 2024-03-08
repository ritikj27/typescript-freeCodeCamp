import React, { ReactNode } from "react";

interface Sectionprops {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: Sectionprops) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{children}</h2>
    </>
  );
};

//old way

// export const Section:React.FC<{title:string}> = ({title,children}) => {
//   return (
//     <div>{title}</div>
//   )
// }
