import React  from "react";
import "./dir.styles.css";
import MenuItem from "../Component/menu-items";


class Directory extends React.Component
{
constructor(){
super();
this.state= 
{
sections:[
    {
    title: 'HATS',
     imageURL:'../Images/hat.png',
    id:1

   },
   {
    title: 'SHOES',
     imageURL:'../Images/shoes.png',
    id:2

   },
   { 
    title: 'MEN',
     imageURL:'../Images/men.png',
    id:3

   },
   { 
    title: 'WOMEN',
    imageURL:'../Images/women.png',
    id:4,
    
   },
   
   { 
    title: 'COSMETICS',
    imageURL:'../Images/cosmetics.png',
    id:5,
    size:'small'
   }
]
}
}
render(){
return ( 
    <div className="directory-menu">
        { this.state.sections.map(({title,imageURL,id})=>(
            <MenuItem key={id} title= {title} imageURL={imageURL} ></MenuItem>
        ))}
</div>
);
}
}

export default Directory;
