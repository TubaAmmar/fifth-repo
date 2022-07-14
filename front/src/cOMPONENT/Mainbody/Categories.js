import React from 'react';
import C1data from './CardData.js/C1data';
import C2data from './CardData.js/C2data';
import C3data from './CardData.js/C3data';

import Card from './Card';
import './Card.css';

function Categories() {
  return (
    <>
       <div className="my-4"></div>
    <h1 className="text-center" style={{fontWeight:'600'}}>Categories</h1>
    <div className="my-5"></div>
    <h3 className="container m1 text-center">Makeup Products</h3>


<div className="container makeup1">

{C1data.map(function card1(val){
    return(
        <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        link ={val.link}
        name = {val.name}
      />
    )
})}</div>

<div className="my-5"></div>
    <h3 className="container m1 text-center" >Watches</h3>
      
    <div className="my-4"></div>

    <div className="container makeup1">
    {C2data.map(function card1(val){
    return(
        <Card
         key = {val.id}
        imgsrc = {val.imgsrc}
        link ={val.link}
        name = {val.name}
      />
    )
})}</div>

<div className="my-5"></div>
    <h3 className="container m1 text-center" >Bags</h3>
      
    <div className="my-4"></div>

<div className="container  makeup1">
    {C3data.map(function card1(val){
    return(
        <Card
         key = {val.id}
        imgsrc = {val.imgsrc}
        link ={val.link}
        name = {val.name}
      />
    )
})}</div>

<div className="my-4"></div>

    </>
  )
}

export default Categories