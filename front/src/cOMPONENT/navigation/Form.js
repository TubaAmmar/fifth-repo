import React from "react";
import './Form.css';
import {Button, Modal, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap';

function Form({inputEvent,userData,show,modalClose,barOpen,show2,barClose}) {




  return (
    <>
   <Modal show={show} onHide={modalClose}>
<Modal.Header closeButton>
<h4 className="text-center">Login</h4>
</Modal.Header>


<ModalBody>


<form class="f1" action="/login" method="POST">
                    <label>User-Email</label><br/>

                    <input type="text" placeholder="&#xF007; &nbsp; Tuba Ammar" style={{fontFamily: 'arial, fontawesome'}} name="email"  /><br/>

                    <label>Password</label><br/>

                    <input type="password" placeholder=" &#xF023; &nbsp; your password"  style={{fontFamily: 'arial, fontawesome'}} name="password"    /><br/>

                    <p class="para1">Forgot password?</p>

                    <button className="text-center button1"><input type="submit" value="Log In" style={{width:'97%'}}/></button>
                
                
                <div className="account"> 
                <p className="para3 text-center">Don't have an account?</p>
                <span className="para4"><Button onClick={barOpen}>Sign Up</Button></span></div>
                    
                
                
                </form>



</ModalBody>

</Modal>



<Modal show={show2} onHide={barClose}>

<Modal.Header closeButton>
<ModalTitle style={{marginLeft: '1.5rem', marginTop: '2rem'}}>Create an Account</ModalTitle>
</Modal.Header>

<ModalBody>

<form class="f1" action="/" method="POST">
                <label>Name</label> 
                <input className="Inp" type="text" placeholder="&#xF007; &nbsp; Tuba Ammar"  name="username" onChange={inputEvent} value={userData.username}  /><br/>
                
                <label>Email Address</label>
                <input className="Inp" type="email" placeholder=" &#xF0e0; &nbsp; your email address"  name="useremail" onChange={inputEvent} value={userData.useremail} /><br/>

                <label>Phone No.</label>
                <input className="Inp" type="number" placeholder=" &#xf879; &nbsp; your phone #"  name="userphone" onChange={inputEvent} value={userData.userphone} />

                <label>Password </label>
                <input className="Inp" type="password" placeholder=" &#xF023; &nbsp; your password"  id="mypassword" name="userpassword"  onChange={inputEvent} value={userData.userpassword} /> 
           
                <span style={{position: 'absolute', top: '75%', right: '20%'}} ><i className="fLink fa-eye" id="eye"  ></i></span>
                
                <button type="button" className="btn btn-sucess text-center button1" style={{marginTop: '2rem', marginBottom: '2rem'}}><input type="submit" value="Create an Account"/></button>
            
        
            </form>

</ModalBody>


</Modal>

    </>





  )
}

export default Form