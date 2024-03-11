import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";
import "./App.css";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;
function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  const inref = useRef<HTMLInputElement>(null);

  console.log(inref?.current);

  console.log(inref?.current?.value);

  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, [user]);

  const addTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) =>
      setCount((count) => count + 2),
    []
  );
  const num: Number = 37;
  const result = useMemo<number>(() => fib(myNum), [myNum]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>add</button>
      <button onClick={addTwo}>add2</button>
      <h4>{result}</h4>
      <input ref={inref} type="text" />
    </>
  );
}

export default App;
