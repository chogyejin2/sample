import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>안녕하세요</p>
      {/* <ExpensiveTree /> */}
    </div>
  );
};

export default App;

const ExpensiveTree = () => {
  const now = performance.now();

  while (performance.now() - now < 100) {
    // 인위적인 지연
  }

  return <p>이게 보인다면 렌더링이 느려집니다</p>;
};
