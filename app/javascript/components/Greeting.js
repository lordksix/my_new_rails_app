import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

function Greeting() {
  const greeting = useSelector((state) => state.greetings.greeting);
  const isLoading = useSelector((state) => state.greetings.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <h1>{greeting.message}</h1>
      )}
    </div>
  );
}

export default Greeting;
