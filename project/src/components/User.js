import React from 'react';

class User extends React.Component {
    render() {
        return(
            <div className='user-card'>
                <img src={this.props.profile.avatar_url} alt='Aaron Shawn Soler'/>
                <div>
                    <h3>{this.props.profile.name}</h3>
                    <p>Username: {this.props.profile.login}</p>
                    <p>Location: {this.props.profile.location}</p>
                    <p>Profile: {this.props.profile.html_url}</p>
                    <p>Followers: {this.props.profile.followers}</p>
                    <p>Following: {this.props.profile.following}</p>
                    <p>Bio: {this.props.profile.bio}</p>
                </div>
            </div>
        );
    }
}

export default User;