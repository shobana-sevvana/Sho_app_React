import React from "react";
import "./collection.styles.css";

const Collection_view =({title,items}) =>(

<div  className="collection-preview ">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div  className="preview ">
{
items.map(item => (<div key={item.id}>{item.name}  </div>))
}

    </div>
</div>

);
export default Collection_view;










