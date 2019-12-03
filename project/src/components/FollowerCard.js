import React from 'react';
import Axios from 'axios';

class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: {}
        }
    }

    componentDidMount() {
        Axios.get(this.props.userData.url)
        .then(res => {
            this.setState({profileData: res.data});
        })
    }

    render() {
        return(
            <div className='user-card'>
                <img src={this.state.profileData.avatar_url} alt='Aaron Shawn Soler'/>
                <div>
                    <h3>{this.state.profileData.name}</h3>
                    <p>Username: {this.state.profileData.login}</p>
                    <p>Location: {this.state.profileData.location}</p>
                    <p>Profile: {this.state.profileData.html_url}</p>
                    <p>Followers: {this.state.profileData.followers}</p>
                    <p>Following: {this.state.profileData.following}</p>
                    <p>Bio: {this.state.profileData.bio}</p>
                </div>
            </div>
        );
    }
}

export default FollowerCard;