//  list of product in an array of object

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

class ParentComponent extends React.Component {
  render() {
    return (
      <ChildComponent name="John" age={25}>
        <p>This is children</p>
      </ChildComponent>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        <h1>Name: {name}</h1>
        <h2>Age:{age}</h2>
        <h3>Children:{children}</h3>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component on the existing root
root.render(<App />);
