// import { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

const schedule = {
  title: "CS Courses for 2018-2019"
};

const App = () => {
  return (   // specifies what the app component should display
    <div>
      <h1>{schedule.title}</h1>
    </div>
  );
};

export default App;
// allows other parts of the React application to import and use the App component.