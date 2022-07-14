import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import './header.css';
import Nav1 from "./Nav1";
import Form from "./Form";

function Header() {


    const[show, setShow] = useState(false);
    const modalOpen = () => setShow(true);
    const modalClose = () => setShow(false);

    const[show2, setShow2] = useState(false);
    const barOpen = () => setShow2(true);
    const barClose = () => setShow2(false);
    
  

    const [userData, setUserData] = useState({
        username:'',
        useremail:'',
        userphone:'',
        userpassword:''


    });

    const inputEvent = (event) =>{
        const {value, name} = event.target;

      

        setUserData((preValue) =>{
            console.log(preValue);
            
            return{

                ...preValue,
                [name]:value,
            }
        }
        )


   
      

    }


  return (

    <>
 
    <header className="header">
    <Nav1 />

    <div className="logo text-center "><a href  >PhantomStore</a></div>
    
     <div className="responsive1">
             <div className="searchbox">
                <input type="text" placeholder="&xF007; &nbsp; Search Here" className="searchtext" />
           
                <Button variant="light"  style={{outline:'none'}} className='nb1'><span className="fas fa-search searchbtn text-center "  ></span></Button> </div>
    
            <Button onClick={modalOpen} variant="light"  style={{outline:'none'}} className='nb2'><span className="fas fa-user menu-user text-center "  ></span></Button>
    
          <div className="menu-cart">
        <Button variant="light" style={{outline:'none'}} className='nb3 '><span className="fas fa-shopping-cart search-icon text-center "  ></span></Button></div>
    </div>
    
    </header>


 <Form inputEvent={inputEvent} userData={userData} show={show} modalClose={modalClose} barOpen={barOpen} show2={show2} setShow2={setShow2} barClose={barClose} />


    </>








    
  )
}

export default Header