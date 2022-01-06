import React from "react";
import Collection_view from "./collection-component";
import SHOP_DATA from "./Shop_collection";
import Collectionpreview from '../Collection-Items/collection-items-preview';
class Shopnow extends React.Component{
constructor(props){
super(props);
    
this.state={
collections:SHOP_DATA
};
}
render(){
    const {collections}=this.state
return (<div className="shopdetails">
    {
        collections.map(({id,...othercollectionsprops}) =>(<Collectionpreview key= {id}{...othercollectionsprops}></Collectionpreview>))
    }
    
</div>);
}
}
export default Shopnow;

