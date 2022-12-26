import {React, useState, useRef} from 'react';
import './custom.css';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import logo from "../Images/logo.png";
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';
import emailjs from '@emailjs/browser';

export default function Footer() {
//#301a22
  const form = useRef();
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const handleSubmit=(e) =>{
        e.preventDefault();
        emailjs.sendForm( 'Gmail_1$','template_ym8effo', e.target, 'user_2N3VFzAvNtdbdnvCq6DNd').then(res=>{
            alert('Message Sent');
            setName('');
            setEmail('');
            setMessage('');
            console.log(res)
        }).catch(err=>{ console.log(err)});
    }

return (
<div className="container-fluid py-3 mt-3" style={{minHeight:"50vh", height:"auto", backgroundColor:"#282828"}} id="contact">
  <div className="container-fluid py-3" style={{backgroundColor:"#404040"}}>
    {/* 1st row */}
    <div className="row">
      <div className="col">
        <div className="d-flex justify-content-start align-items-start ps-4 px-2  h-100">
          <img src={logo} alt="logo" width={"80px"} height={"40px"} style={{backgroundColor:"#f4f4f4"}} />
          <div className="d-flex ps-2 media-icon justify-content-center align-items center gap-2">
            <Link to={""}>
            <BsFacebook />
            </Link>
            <Link to={""}>
            <BsInstagram />
            </Link>
            <Link to={""}>
            <AiFillTwitterCircle />
            </Link>
            <Link to={""}>
            <AiFillYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="text-center">
          <p className='text-white fs-5 fw-light'>rauteupliftmentfoundation2013@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  {/* 2nd row */}
  <div className="container-fluid">
    <div className="row mx-auto justify-content-evenly " style={{ minHeight:"50vh", height:"auto"}}>
      <div className="col-xs-12 col-sm-12 col-md-3 py-2" id="p1">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <Nav className="d-flex gap-4 flex-column w-100 justify-content-center align-items-start  ms-auto my-2 "
            style={{ fontWeight: '600', padding: '0 10px'  }} navbarScroll>
            <Link style={{textDecoration:"none", color:"#f4f4f4"}} className="text-white mx-2" to={"/"}>Home </Link>
            <Link style={{textDecoration:"none", color:"#f4f4f4"}} className="text-white mx-2" to={"/about"}>AboutUs</Link>
            <Link style={{textDecoration:"none", color:"#f4f4f4"}} className="text-white mx-2"to={"/#work"}>Work </Link> 
            <Link style={{textDecoration:"none", color:"#f4f4f4"}} className="text-white mx-2" to={"/news"}>News </Link> 
            <Link style={{textDecoration:"none", color:"#f4f4f4"}} className="text-white mx-2" to={"/#contact"}>ContactUs </Link> 
          </Nav> 
        </div> 
      </div> 
      {/* form  */}
      <div className="col-xs-12 col-sm-12 col-md-4 py-2">
          <div style={{height:"100%"}}>
            <form
            ref={form}
            onSubmit={handleSubmit} 
            className='d-flex gap-2 text-white justify-content-center flex-column align-items-center'
            style={{height:"100%"}}
            >
            <div className="form-group w-100 py-2">
               <input
               name = "FullName"
               value = {name} 
               onChange = {(e)=>setName(e.target.value)} 
               type="text" className="form-control" id="formGroupExampleInput" placeholder="Eg: John Smith" required/>  
            </div>
             <div className="form-group w-100 py-2">
               <input
               name = "Email"
               value = {email}  
               onChange = {(e)=>setEmail(e.target.value)} 
               type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Eg: abc@example.com" required/>  
            </div>
            <div className="form-group w-100 py-2">
               <textarea
               name = "Description"
               value = {message} 
               onChange = {(e)=>setMessage(e.target.value)}
               type="text" className="form-control" id="formGroupExampleInput" placeholder="Message..." />  
            </div>
              <button className='btn btn-primary w-100 my-2 rounded-pill p-2' type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 py-2">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6321.312562957857!2d85.33543187077356!3d27.69304163611946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1672034734016!5m2!1sen!2snp" 
            title='map location'
            width="auto" height="auto" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p className='text-white pt-2 ps-3 w-75 fs-5 fw-light'>
            New Baneshowor, Kathmandu, Nepal <br/>
            Contact: +977-9841486500</p>
          </div>
        </div>
      </div>
      <div className="text-center py-2">
        <p className='text-white fw-light'>Copyright @ 2022 REMUF Nepal
          by Softverse.
        </p>
      </div>
    </div>
  </div>
  )
  }