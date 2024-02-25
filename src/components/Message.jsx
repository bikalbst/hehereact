export default function Message() {
  function clicked() {
    console.log("The Button has been clicked!!");
  }

  return (
    <div>
      <button onClick={clicked}>Click me!!</button>
    </div>
  );
}
