import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Action non reconnue');
  }
}

function Compteur() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="demo-block">
      <p className="result-text">Compteur : {state.count}</p>
      <div className="button-row">
        <button
          className="primary-button"
          onClick={() => dispatch({ type: 'increment' })}
          type="button"
        >
          +1
        </button>
        <button
          className="secondary-button"
          onClick={() => dispatch({ type: 'decrement' })}
          type="button"
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default Compteur;
