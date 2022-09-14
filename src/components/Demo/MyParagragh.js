import React from 'react'
import MyParagragh from './MyParagragh'

const MyParagragh = (props) => {
    console.log('MyParagragh Running');
  return (
      <MyParagragh>{props.children ? 'This is new!' : ''}</MyParagragh>
  )
};

export default MyParagragh;
