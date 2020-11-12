import React from 'react'
import API from "./utils/API";
import User from "./User";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }

  render() {
    const { isLoading, name, avatar, email } = this.state;

    return (
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }

  async componentDidMount() {
    // Load async data.
    // Update state with new data.
    // Re-render our component.
    let userData = await API.get('/', {
      params: {
        results: 1,
        inc: 'name,email,picture'
      }
    });

    userData = userData.data.results[0];

    const name = `${userData.name.first} ${userData.name.last}`;
    const avatar = userData.picture.large;
    const email = userData.email;
    // Update state with new data and re-render our component.

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        avatar,
        email
      }
    });
  }
}

export default App;