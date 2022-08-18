import "./styles.css";

export default function App() {
  const options = { name: "Jatin", age: 32 };
  const options2 = null;

  // const data = [
  //   { name: "Jatin" },
  //   { name: "Rubal" },
  //   { name: "Ayan" },
  //   { name: "Aarya" }
  // ];

  const data = null;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {options.name}
      <br />
      {options2?.name}
      <br />
      <ul>
        {data?.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
