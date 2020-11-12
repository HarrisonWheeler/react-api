import React from 'react'
import API from "./utils/API";
import User from "./User";
class App extends React.Component {
  render() {
    return <User name="Jessica Doe" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tiger_Woods_in_May_2019.jpg/220px-Tiger_Woods_in_May_2019.jpg" email="hello@jessica.com" />;
  }
}

export default App;
