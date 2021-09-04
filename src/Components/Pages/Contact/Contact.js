import React from 'react';
import './contact.css';

const Contact = () => {
  function handleSubmit(event){
    let name=document.getElementById('name').value;
    let msg=document.getElementById('msg').value;
    window.location.href=`mailto:2812subash@gmail.com?subject=${name}&body=${msg}`;
    event.preventDefault();
    return false;
  }
  return (
    <div className="contact" id="contact">
    <div className="container-fluid">
    <h2>Contact</h2><span>(Try with mail connected device)</span>
  <form onSubmit={handleSubmit} method="GET" target="_blank">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
    </div>
    <div className="form-group">
      <label htmlFor="msg">Message</label>
      <textarea type="password" className="form-control" id="msg" placeholder="Enter Message"/>
    </div>
    <button type="submit"  className="btn btn-primary">Send</button>
  </form>
</div>
    </div>
  )
}

export default Contact
