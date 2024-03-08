import { useState } from "react";
import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import { List } from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="Heading" />
      <Section title="hello world">This is section</Section>
      <Counter setCount={setCount}>i Have {count}</Counter>
      {/* <List
        items={["start", "running", "end"]}
        render={(item:string) => {
          <h1>{item}</h1>;
        }}
      /> */}
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
