import React, { Component} from 'react';

import Mailchimp from 'react-mailchimp-form';

import Modal from 'react-responsive-modal';
import axios from 'axios';

export default class ModalBox extends React.Component {

  constructor(props){
    super(props);


    this.state ={
      MMERGE3 : "",
      MMERGE1 : '',
      EMAIL : '',
      MMERGE4 : '',
      MMERGE2: ''
     }

  }


  handleChange = (e) => {
    let state =  this.state;
    state[e.target.name]= e.target.value;
    this.setState(state);
  }

  
  handleSubmit = (e) => {
    e.preventDefault();      
    const url = "https://foodcham.us14.list-manage.com/subscribe/post?u=07164b2950168a5c0b82399f9&amp;id=f12ecca371";
    const {MMERGE3, MMERGE1, EMAIL, MMERGE4, MMERGE2} = this.state;

    axios.post( url, {headers:{'Access-Control-Allow-Origin' : '*' }},{MMERGE3: MMERGE3, MMERGE1: MMERGE1, EMAIL: EMAIL, MMERGE2:MMERGE2, MMERGE4:MMERGE4}, { crossdomain: true }) 
      .then((response) => {
        console.log(response);
      });

  }
 
  onCloseModal = () => {
    this.props.onClose();
  };
 
//   render() {
//     return (
//       <div>
        
//         <Modal open={this.props.open} onClose={this.onCloseModal} little>
          
//           <div className="container-fluid cta-default">
//             <h1 className="text-center">WE <i className="fa fa-heart" style={{color:'red', fontSize: '1.35em'}}></i> TO TALK</h1>
//             <h4 className="cta-text text-center">Request a free consultation and get a no obligation proposal for your project within 12 hours</h4>
//             <form method="POST" className="cta-default" action ="https://foodcham.us14.list-manage.com/subscribe/post?u=07164b2950168a5c0b82399f9&amp;id=f12ecca371" onSubmit={this.handleSubmit}>
//               <div className="row">
//                 <div className="col-sm-6">
//                   <div className="form-group">
//                     <label for="your_name">Your Name</label>
//                     <input name= "MMERGE3" id="your_name" className="form-control input-lg" type= "text" value={this.state.MMERGE3} onChange={this.handleChange}/>
//                   </div>
//                 </div>
//                 <div className="col-sm-6">
//                   <div className="form-group">
//                     <label for="your_email">Your Email</label>
//                     <input name= "EMAIL" id="your_email"  type= "email"  className="form-control input-lg" value={this.state.EMAIL} onChange={this.handleChange}/>
//                   </div>
//                 </div>
//                 <div className="col-sm-6">
//                   <div className="form-group">
//                     <label for="your_contact">Your Contact</label>
//                     <input name= "MMERGE4" id="your_contact" type= "number" className="form-control input-lg" value={this.state.MMERGE4} onChange={this.handleChange}/>
//                   </div>
//                 </div>
//                 <div className="col-sm-6">
//                   <div className="form-group">
//                     <label for="your_restaurant">Your Restaurant</label>
//                     <input name= "MMERGE1" id="your_restaurant" type= "text" className="form-control input-lg" value={this.state.MMERGE1} onChange={this.handleChange}/>
//                   </div>
//                 </div>
//                 <div className="col-sm-6">
//                   <div className="form-group">
//                     <label for="your_city">Your City</label>
//                     <input name= "MMERGE2" id="your_city" type="text" className="form-control input-lg" value={this.state.MMERGE2} onChange={this.handleChange} />
//                   </div>
//                 </div>
//               </div>

//               <input type ="submit" className="btn btn-primary btn-wire btn-lg wrap-vertical-lg" value= "submit"/>
//             </form>
//           </div>
//         </Modal>
//       </div>
//     );
// }

  
    render() {
      // const { open } = this.state;
        return (
          <div>
            {/* <div onClick={this.onOpenModal} style={{color:'white'}} className="btn-download btn-lg btn btn-primary btn-wire">Join Us</div> */}
            <Modal  open={this.props.open} onClose={this.onCloseModal} little>
              <div className="contact-form container-fluid cta-default">
                <div style={{marginBottom:'2em'}}>
                <h1 className="text-center">WE <i className="fa fa-heart" style={{color:'red', fontSize: '1.35em'}}></i> TO TALK</h1>
               <h4 className="cta-text text-center">Request a free consultation and get a no obligation proposal for your project within 12 hours</h4>
                </div>
              <Mailchimp
              action= 'https://foodcham.us14.list-manage.com/subscribe/post?u=07164b2950168a5c0b82399f9&amp;id=f12ecca371'
              fields={[
                {
                  name: 'MMERGE3',
                  placeholder: 'Your Name',
                  type: 'text',
                  required: true,
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
                  button: "Submit"
                }
              }
              />
              </div>
          </Modal>
        </div>
      );
    }
  
  
  }



