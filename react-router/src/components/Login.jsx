import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email && password) {
      localStorage.setItem("loggedIn", true);
      navigate("/posts");
    }
  };

  return (
    <div>
      <h3>Home Page</h3>
      <p>Welcome to home page</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="name" />
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
