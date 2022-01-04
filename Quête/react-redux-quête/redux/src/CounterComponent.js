import React from "react";
import { connect, useDispatch } from "react-redux";

const CounterComponent = (props) => {
const dispatch = useDispatch();

  return (
    <div>
            <p id="counter-render">{props.counter}</p>
    <button onClick={() => dispatch({ type:'INCREMENT'})}>Increment</button>
    <button onClick={() => dispatch({ type:'DECREMENT'})}>Decrement</button>
    <button onClick={() => dispatch({ type:'INCREMENT BY TEN'})}>Increment by Ten</button>
    <button onClick={() => dispatch({ type:'DECREMENT BY TEN'})}>Decrement by Ten</button>
    <button onClick={() => dispatch({ type:'RESET'})}>Reset</button>
        </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state,
});

const CounterContainer = connect(mapStateToProps)(CounterComponent) 

export default CounterContainer;
