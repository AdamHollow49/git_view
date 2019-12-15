import React from 'react';

import { CardList } from './Components/CardList.js';
import { Form } from './Components/Form.js'; 
import { PageTop } from './Components/PageTop.js';
import { PageSearch } from './Components/PageSearch.js';
import Tabs from './Components/Tabs.js';

import './App.css';

// boolean to determine search status
var hasSearched = false;

class App extends React.Component {
  //code to add new search data to state
  addNewSearch = (searchData, orgData) => {
    hasSearched = true;
    this.setState(prevState => ({
      profiles: [searchData, orgData]
    }))
  };

  
  render() {
   
    if (hasSearched) {
     
      if (this.state.profiles[0].length === 0) {
        console.log("No Orgs")
        this.state.profiles[0] = [{ login: 'No Organisations Found', description: "This person doesn't appear to be part of any organisations, awkward...", html_url: "", }]
      }
      
      if (this.state.profiles[1].length === 0) {
        console.log("No Repos")
        this.state.profiles[0] = [{ login: 'No Repositories Found', description: "This person doesn't appear have any repos..., awkward...", html_url: "", }]
      }
      

      return (
        <div className="App">
        
          <PageSearch />
       
            <div className="search-box" style={{ textAlign: 'center' }}>
              <Form onSubmit={this.addNewSearch} />
            </div>
            
          <Tabs>
            <div label="Repos">
              
              <CardList profiles={this.state.profiles[1]} />
            </div>
            <div label="Orgs">
             
              <CardList profiles={this.state.profiles[0]} />
            </div>
          </Tabs>
        </div>
      );
    } else {
      
      return (
        <div className="App">
          <PageTop />
            <div className="search-box" style={{ textAlign: 'center' }}>
              <Form onSubmit={this.addNewSearch} />
            </div>
          
        </div>
      );
    }
  }
}

export default App
