import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentTab: 0,
    };
  }

  render(){
    return (
      <div>

        <ul>
          <h1>Tab One</h1>
          <h1>Tab Two</h1>
          <h1>Tab Three</h1>
        </ul>

        <article>
          <p>  </p>
        </article>

      </div>
    );
  }

  currentTabContent(){

  }
}

export default Tabs;
