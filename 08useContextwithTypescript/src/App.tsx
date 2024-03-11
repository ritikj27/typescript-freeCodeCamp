import Counter from "./Counter";
import { CounterProvider } from "./context/counterContext";

function App() {
  return (
    <>
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
