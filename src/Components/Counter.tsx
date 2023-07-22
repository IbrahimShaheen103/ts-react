import { ReactNode } from "react";

type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: counterProps) => {
  return (
    <>
      <h3>{children}</h3>
      <button onClick={() => setCount((perv) => perv + 1)}>+</button>
      <button onClick={() => setCount((perv) => perv - 1)}>- </button>
    </>
  );
};

export default Counter;
