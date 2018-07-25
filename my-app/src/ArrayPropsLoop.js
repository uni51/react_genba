import React from 'react';

const List = (props) => {

  const listItems = props.data.map((index, text) => {
    return <li>{index} : {text}</li>;
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default List;
