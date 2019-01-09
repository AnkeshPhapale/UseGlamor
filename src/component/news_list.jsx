import React from 'react';
import {css} from 'glamor'
const NewsList = (props) => {
    let stylefNews =css({
    
        padding:"10px",
        boxSizing:"border-box",
        borderBottom:'1px solid grey'
    });
    let styleTwo = css({
     background:"cyan"
    })
    console.log(props)
    const items = props.news.map((item)=> {
       return(
           <div {...stylefNews} {...styleTwo}>
               <h3>{item.title}</h3>
               <div>{item.feed}</div>
           </div>
       )
    }
    
    );
    return(
        <div>
            {props.children}
       {items}
        </div>
    )
}
export default NewsList;