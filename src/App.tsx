import { useState } from "react";
import Counter from "./Components/Counter";
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import List from "./Components/List";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <div>
      <Heading title="kk" />
      <Section title="ibrahim">
        <h4>dd</h4>
      </Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </div>
  );
}

export default App;
