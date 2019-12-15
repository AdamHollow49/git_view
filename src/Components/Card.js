import React from 'react';



export class Card extends React.Component {
    render() {
        const repo = this.props;
        if (repo.login) {
            return (
            
                <div className="card border-secondary mb-3" style={{ width: '30rem', fontSize: '12px'}}>
                    <h5 className="card-header font-weight-light" >{repo.login}</h5>
                    <div className="card-body p-3 text-secondary">
                        <p className="card-text lead">{repo.description}</p>
                        <a rel="noopener noreferrer" target="_blank" href= {repo.html_url} ><span className="badge badge-dark">GitHub Page</span></a>
                    </div>
                </div>
            );
        }else{}
        return (
            
            <div className="card border-secondary mb-3" style={{ width: '30rem', fontSize: '12px'}}>
                <h5 className="card-header font-weight-light" >{repo.name}</h5>
                <div className="card-body p-3 text-secondary">
                    <p className="card-text lead">{repo.description}</p>
                    <a rel="noopener noreferrer" target="_blank" href= {repo.html_url} ><span className="badge badge-dark" >GitHub Page</span></a>
                </div>
            </div>
        );
    }
}
