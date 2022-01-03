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
    id:1,
    linkUrl:'Hats'

   },
   {
    title: 'SHOES',
     imageURL:'../Images/shoes.png',
    id:2,
    linkUrl:''
   },
   { 
    title: 'MEN',
     imageURL:'../Images/men.png',
    id:3,
    linkUrl:''
   },
   { 
    title: 'WOMEN',
    imageURL:'../Images/women.png',
    id:4,
    linkUrl:''
   },
   
   { 
    title: 'COSMETICS',
    imageURL:'../Images/cosmetics.png',
    id:5,
    linkUrl:''
   }
]
}
}
render(){
return ( 
    <div className="directory-menu">
        { this.state.sections.map(({id,...otherSectionProps})=>(
            <MenuItem key={id} {...otherSectionProps} ></MenuItem>
        ))}
</div>
);
}
}

export default Directory;
