import React, { Component } from 'react';


export default class Testimonials extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
            <div className="row home-cfa margin-top-sm">
                
            </div>
        )
    }
}

class Review extends Component {
    
    constructor(props){
        super(props);
        this.state={
            show : 'animated fadeInRight'
            }
        }

        
    render(){
        return(
            <div className={this.state.show}>            
                    <div className="col-sm-12">
                        <img src= {this.props.src} className="img-responsive"/>
                        <p>{this.props.children}</p>
                    </div>
                </div>
               
        )
    }
}

