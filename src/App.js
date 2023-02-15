import React from 'react';
import './style.css';
import { CounterActions } from './Store';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const storeValue = useSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(CounterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(CounterActions.decrement());
  };

  const handleAddByPayLoad = () => {
    dispatch(CounterActions.incrementByPayload(3));
  };

  const handleReset = () => {
    dispatch(CounterActions.reset());
  };

  return (
    <div>
      <p>{storeValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleAddByPayLoad}>Add Payload</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}
