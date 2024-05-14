//  list of product in an array of object

const products = [
  { id: 1, name: "Product A", price: 20, category: "Electronics" },
  { id: 2, name: "Product B", price: 30, category: "Clothing" },
  { id: 3, name: "Product C", price: 40, category: "Electronics" },
  { id: 4, name: "Product D", price: 50, category: "Clothing" },
  { id: 5, name: "Product E", price: 60, category: "Electronics" },
  { id: 6, name: "Product F", price: 70, category: "Electronics" },
];

const names = ["alice", "fred", "charlie", "fred"];
const newNames = [...new Set(names)];

function App() {
  return <div>

    <Counter />
  </div>;
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

  }
  incrementCount = () =>
    this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component on the existing root
root.render(<App />);
