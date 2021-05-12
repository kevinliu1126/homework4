import React from 'react';
import $ from 'jquery';


class UserGithub extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    githubtUrl: '',
    avatarUrl: '',
    locate: '',
    public_repos: '',
    followers: '',
    }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    locate: data.location,
    public_repos: data.public_repos,
    followers: data.followers,
    });
    }
    });
    }
    render() {
    return (
    <div>
    <img src={this.state.avatarUrl} alt=""/><br/>
    <h3>user name:{this.state.username}</h3>
    <a href={this.state.githubtUrl}>Github Link</a>
    <h3>location:{this.state.locate}</h3>
    <h3>public_repos:{this.state.public_repos}</h3>
    <h3>followers:{this.state.followers}</h3>
    </div>
    );
    }
   }
//    ReactDOM.render(
//     <UserGithub source="https://api.github.com/users/cjwu" />,
//     document.getElementById('root')
//    );
   export default UserGithub;