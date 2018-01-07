import React, {Component} from 'react';


export default class TeamMember extends Component{
    render(){
        return(
                <div className="col-md-3 team-member">
                    <img src={this.props.img} className="img-responsive" />
                    <h4>{this.props.name}</h4>
                    <p className="text-muted">{this.props.designation}</p>
                </div>
        )
    }
}