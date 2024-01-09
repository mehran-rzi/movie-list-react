import React, { Component } from 'react';


//Input : liked -> Booloan
//Output : onCLick

// we can use sfc(stateless function components) instead this class

const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.liked) classes += "-o";
    return <i 
    onClick={props.onClick}  
    style={{cursor: 'pointer'}} 
    className={classes} 
    aria-hidden="true" />;
};
 export default Like;