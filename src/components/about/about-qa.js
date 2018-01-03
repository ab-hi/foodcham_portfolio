import React from 'react' ;

export default class AboutQA extends React.Component{
 render(){
     return(
        <div>
            <h3>{this.props.question}</h3>
            <p>
                {this.props.children}
            </p>
        </div>
     );
 }
}