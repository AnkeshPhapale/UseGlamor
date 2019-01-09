import React from 'react';
// const getMonth = =>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }
 

class Header extends React.Component{

    state ={
        title:"",
        key:""
    }
    inputChangeHandler=(event)=>{
        this.setState({
         key:event.target.value ,
         title:"you are typing..."
        })
       
        
    }


render (){
     
    const style ={
     background:"red"
    }
   if(this.state.key!=="")
      {
          style.background='cyan'
      }
    else{
        style.background="red"
    }
    console.log(this.state.key);
    return (  
<header style={style}>
  <div className="logo" 
  onClick= { () =>{ console.log("i was clicked");}}>Dyanamic text</div>
  <input type="text" onChange= {this.inputChangeHandler}></input>
  <div>{this.state.title}</div>
  <div>{this.state.key}</div>
</header>
    )
    }
}
export default Header;