import React from "react";
import './menu-items.styles.css';
const MenuItem =({title,imageURL})=>(
<div classname ='a' style={{backgroundImage:`url(${imageURL})`}}


className="menu-item">
        <div className="content ">
            <h1 className="title">{title}</h1>
                <span className="subtitle">Shopnow
           </span>
           </div>
  </div>
);

export default MenuItem;


