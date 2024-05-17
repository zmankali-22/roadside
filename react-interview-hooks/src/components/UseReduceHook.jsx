import { useReducer } from "react";

export default function UseReduceHook() {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return {
          ...state,
          count: state.count + action.payload,
        };
      }
      case "decrement": {
        return {
          ...state,
          count: state.count - action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h3>Use Reducer Hook</h3>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Increse
      </button>
      <button
        onClick={() => dispatch({ type: "increment", payload: 5 })}
      >
        Increse
      </button>

      <button
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Decrese
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
      >
        Decrese
      </button>

      <div>
        <p>Give example of usereducer for shopping card state</p>
      </div>

      <Shoppingcart />
    </div>
  );
}

const Shoppingcart = () => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "add item": {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
      case "remove item": {
        return {
          cart: [
            ...state.cart.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
        };
      }
      case "clear cart": {
        return {
          ...state,
          cart: [],
        };
      }
      default: {
        return state;
      }
    }
  };

  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <div>
      <h3>Shopping cart</h3>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() =>
                dispatch({ type: "remove item", payload: item })
              }
            >
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      {products.map((product) => (
        <button
          key={product.id}
          onClick={() =>
            dispatch({ type: "add item", payload: product })
          }
        >
          {product.name}
        </button>
      ))}
      <button onClick={() => dispatch({ type: "clear cart" })}>
        Clear cart
      </button>
    </div>
  );
};
