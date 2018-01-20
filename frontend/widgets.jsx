import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./clock";
import Tabs from "./tabs";

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Tabs />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
