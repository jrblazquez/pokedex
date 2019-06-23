import React from "react";

const List = ({ items }) => (
  <div>
    {items.map(({ id, name }) => (
      <div>
        {id} {name}
      </div>
    ))}
  </div>
);

export default List;
