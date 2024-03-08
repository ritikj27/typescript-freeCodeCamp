import React, { ReactNode } from "react";

type simpleProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

export const Counter = ({ setCount, children }: simpleProps) => {
  return (
    <>
      <div>{children}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};
