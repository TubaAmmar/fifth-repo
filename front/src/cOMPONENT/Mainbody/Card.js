import React from "react";
import { Link } from "react-router-dom";
import './Card.css';






function Card(props){
    return(
        <>
       
 <div className="container ">
        
         
                <div className="card" >
                <div className="row">
                <div className="col-md-3" >
                    <div className="card-img text-center">
                       <Link to={props.link}><img src={props.imgsrc}  className="i1" alt="error"/></Link></div> 
                        <div className="card-body">
                    <button > <Link to={''}>{props.name} </Link></button>
                        </div>

                        
                        </div>
                    </div>
                    </div>
                
                    </div>

            

          

          
        </>
    )
}

export default Card;