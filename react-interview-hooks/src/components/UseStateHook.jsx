import { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  return (
    <div>
      <h3>UseState hook</h3>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>
        Build a form containg first name, last name and email;. Use
        only one stae to manage all fields
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          type="text"
          placeholder="Enetr First name"
          name="firstName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enetr last name"
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Enetr email"
          name="email"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
