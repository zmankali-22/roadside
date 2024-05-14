//  list of product in an array of object

const products = [
    {id: 1, name: 'Product A', price: 20, category: 'Electronics'},
    {id: 2, name: 'Product B', price: 30, category: 'Clothing'},
    {id: 3, name: 'Product C', price: 40, category: 'Electronics'},
    {id: 4, name: 'Product D', price: 50, category: 'Clothing'},
    {id: 5, name: 'Product E', price: 60, category: 'Electronics'},
    {id: 6, name: 'Product F', price: 70, category: 'Electronics'},

]


function App() {


  return (
    <div>
      <h1>Counter</h1>
        <ul>
            {products.map(product => (
                <li key ={product.id} >
                   {product.name} - ${product.price} - {product.category}
                </li>
            ))}
        </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component on the existing root
root.render(<App />);
