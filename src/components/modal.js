import React, { Component} from 'react';

import Mailchimp from 'react-mailchimp-form';

import Modal from 'react-responsive-modal';
import axios from 'axios';

export default class ModalBox extends React.Component {

    constructor(props){
      super(props);

      this.state ={
        name : "",
        profile : '',
        email : '',
        contact : '',
        message : '',
        open: false,
       }
    }

    handleChange = (e) => {
      let state =  this.state;
      state[e.target.name]= e.target.value;
      this.setState(state);
    }

    
    handleSubmit = (e) => {
      e.preventDefault();      
      const url = "https://script.google.com/macros/s/AKfycbyF94AzYm2QvUrkt77fmi403ZrhOYBrt67ItsK7QvSMs2NuwG7O/exec";
      const {name, profile, email, contact, message} = this.state;

      axios.post( url, {headers:{'Access-Control-Allow-Origin' : '*' }},{name, profile, email, contact, message}, { crossdomain: true }) 
        .then((response) => {
          console.log(response);
        });

    }

    // state = {
      
    // };
   
    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
   
    // render() {
    //   const { open } = this.state;
    //   return (
    //     <div>
    //       <div onClick={this.onOpenModal} style={{color:'white'}} className="btn-download btn-lg btn btn-primary btn-wire">Join Us</div>
    //       <Modal open={open} onClose={this.onCloseModal} little>
    //         <h3>Test title</h3>
    //         <form method="POST" action ="https://script.google.com/macros/s/AKfycbyF94AzYm2QvUrkt77fmi403ZrhOYBrt67ItsK7QvSMs2NuwG7O/exec" onSubmit={this.handleSubmit}>
            
    //         <input name= "name" type= "text" value={this.state.name} onChange={this.handleChange} placeholder ="name here"/>
    //         <input name= "profile" type= "text" value={this.state.profile} onChange={this.handleChange} placeholder ="profile here"/>
    //         <input name= "email" type= "email" value={this.state.email} onChange={this.handleChange} placeholder ="email here"/>
    //         <input name= "contact" type= "number" value={this.state.contact} onChange={this.handleChange} placeholder ="contact here"/>
    //         <textarea name= "message" value={this.state.message} onChange={this.handleChange} placeholder ="message here" />
          

    //         <input type ="submit" value= "submit"/>
    //         </form>
    //       </Modal>
    //     </div>
    //   );
    // }
  
    render() {
      const { open } = this.state;
        return (
          <div>
            <div onClick={this.onOpenModal} style={{color:'white'}} className="btn-download btn-lg btn btn-primary btn-wire">Join Us</div>
            <Modal open={open} onClose={this.onCloseModal} little>
          <Mailchimp
          action= 'https://foodcham.us14.list-manage.com/subscribe/post?u=07164b2950168a5c0b82399f9&amp;id=f12ecca371'
          fields={[
            {
              name: 'MMERGE3',
              placeholder: 'Your Name',
              type: 'text',
              required: true
            },
            {
              name: 'MMERGE1',
              placeholder: 'Your Restaurants Name',
              type: 'text',
              required: true
            },
            {
              name: 'MMERGE2',
              placeholder: 'City',
              type: 'text',
              required: true
            },
            {
              name: 'EMAIL',
              placeholder: 'Email ID',
              type: 'email',
              required: true
            },
            {
              name: 'MMERGE4',
              placeholder: 'Mobile Number',
              type: 'number',
              required: true
            }
          ]}
          message={
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "Subscribe!"
    }
  }
          />
        </Modal>
        </div>
      );
    }
  
  
  }



