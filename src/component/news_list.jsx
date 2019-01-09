import React from 'react';
import {css} from 'glamor'
const NewsList = (props) => {
    console.log(props)
    const items = props.news.map((item)=> {
       return(
           <div>
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