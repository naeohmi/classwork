import React from 'react';
{/*imports the react library*/}
import ReactDOM from 'react-dom';
{/*imports the react DOM library*/}
import Hello from './App'
{/*imports the folder saved in src called App.js*/};
import './index.css';
{/*imports the index.css stylesheet*/}

ReactDOM.render(
  {/*renders the content on the DOM*/}
  <div>
    {/*opens a div tag*/}
    <Hello />
    {/*calls/initializes the hello class from the App.js file*/}
    <Hello />
    {/*calls/initializes the hello class from the App.js file*/}
    <Hello />
    {/*calls/initializes the hello class from the App.js file*/}
    <Hello />
        {/*calls/initializes the hello class from the App.js file*/}
  </div>,
    {/*closes the div tag*/}
  document.getElementById('root')
  {/*instructs where to render the content*/}
);