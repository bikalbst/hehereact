import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>What is your name?</h1>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </>
  );
}
