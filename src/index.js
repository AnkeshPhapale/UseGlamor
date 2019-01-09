import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Header from './component/header';
import Nbar from './component/bar';
import JSON from './db.json';
import NewsList from './component/news_list';

class App extends Component{
state = {
    news:JSON
}

    render(){
        console.log(this.state.news)
        
   
        // return React.createElement('h1', {ClassName:'title'},React.createElement('div'));
     return (
              <React.Fragment>
                  <Nbar/>
             <div> 
             <Header/>
             <NewsList news={this.state.news}>
             hello
             </NewsList>
             
             </div> 
             </React.Fragment>
            
             
             )
    }
    
}
ReactDOM.render(<App/>,document.getElementById('root'));