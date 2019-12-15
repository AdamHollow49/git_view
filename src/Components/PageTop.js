import React from 'react';

export class PageTop extends React.Component {
    render() {
        return (
            <div>
                <div className="topbar"></div>
                <h1 className="display-1" >GitView</h1>
                <h2 className="card-text lead">Type in a GitHub username, sit back and enjoy the view.</h2>
            </div>
        );
    }
}

