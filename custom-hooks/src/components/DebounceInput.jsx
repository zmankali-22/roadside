import { useState } from "react";
import useDebounce from "../custom-hooks/useDebounce";

export default function DebounceInput() {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000, () => {
    console.log("function call");
  });
  return (
    <div>
      <h3>DebounceInput</h3>
      <p>{debouncedValue}</p>
      <input
        type="text"
        placeholder="Say Something..."
        value={inputText}
        onChange={handleChange}
      />
    </div>
  );
}
