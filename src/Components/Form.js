import React from 'react';
import axios from 'axios';

export class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await
            axios.get(`https://api.github.com/users/${this.state.userName}/repos?per_page=250`)
        const orgs = await
            axios.get(`https://api.github.com/users/${this.state.userName}/orgs`)
        this.props.onSubmit(
            orgs.data, resp.data,
        );
        
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="btn-group">
                    <input type="text" value={this.state.userName} className="form-control" placeholder="GitHub User" onChange={event => this.setState({userName: event.target.value })}></input>
                    <button className="btn btn-dark">Go!</button>
                </div>
            </form>
        )
    }
}