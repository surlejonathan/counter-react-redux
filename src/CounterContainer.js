import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  result: state,
});

const CounterContainer = ({ result, dispatch }) => {
  return (
    <div className='CounterContainer'>
      <h1>Super cheum compteur Redux</h1>
      <p className='counter-render'>{result}</p>
      <div className='counter-controller counter-controller-1'>
        <button
          type='button'
          className='remove-btn'
          onClick={() => dispatch({ type: "REMOVE" })}
        >
          -
        </button>
        <button
          type='button'
          className='add-btn'
          onClick={() => dispatch({ type: "ADD" })}
        >
          +
        </button>
      </div>
      <div className='counter-controller counter-controller-10'>
        <button
          type='button'
          className='remove10-btn'
          onClick={() => dispatch({ type: "REMOVE_10" })}
        >
          - 10
        </button>
        <button
          type='button'
          className='add10-btn'
          onClick={() => dispatch({ type: "ADD_10" })}
        >
          + 10
        </button>
      </div>
      <div className='counter-controller counter-controller-reset'>
        <button
          type='button'
          className='reset-btn'
          onClick={() => dispatch({ type: "RESET" })}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(CounterContainer);
