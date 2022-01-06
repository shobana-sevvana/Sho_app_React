import React from "react";
import collectionItem from './Collection-item-component';

const Collectionpreview = ({ title, items }) =>
(
  <div className="collection-preview">

    <div className="title">{title.toLowerCase()}

    </div>
    <div className='preview'>
      {items
        .filter((item, par) => par < 4)
        .map(({ id, ...otherItemProps }) => (
          <collectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default Collectionpreview;