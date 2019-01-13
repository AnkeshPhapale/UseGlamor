import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Header from './component/header';
import Nbar from './component/bar';
import JSON from './db.json';
import NewsList from './component/news_list';

class App extends Component{
state = {
    news:JSON,
    filtered:[],
    no:"empty"
}
getKeyword = (event)=>{
    // console.log(event.target.value);
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item)=> {
  return item.title.indexOf(keyword) > -1
  
    });
    console.log(filtered);
    this.setState({
    filtered
    })
    
    
  
}



    render(){
        console.log(this.state.filtered)
       
       
        
   
        // return React.createElement('h1', {ClassName:'title'},React.createElement('div'));
     return (
              <React.Fragment>
                  <Nbar/>
             <div> 
             <Header keywords ={this.getKeyword}/>
             <NewsList news={this.state.filtered.length === 0 ? this.state.news: this.state.filtered}>
             </NewsList>
             
             </div> 
             </React.Fragment>
            
             
             )
    }
    
}
ReactDOM.render(<App/>,document.getElementById('root'));