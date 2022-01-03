import React from "react";
import { Router } from "workbox-routing";
import './menu-items.styles.css';
import { withRouter} from 'react-router-dom';
import { match } from "react-dom";

const MenuItem =({title,imageURL,history,linkUrl})=>(
<div  style={{backgroundImage:`url(${imageURL})`}}
className="menu-item" onClick={()=>history.push(`${linkUrl}`)}>
       
        <div className="content ">
            <h1 className="title">{title}</h1>
                <span className="subtitle">Shopnow
           </span>
           </div>
  </div>
);

export default withRouter(MenuItem);


