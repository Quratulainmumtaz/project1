import React,{Component} from "react";
import PropTypes from 'prop-types';
import './Person.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import authcontex from '../../../context/auth-contex';



class Person extends Component {
    constructor(props){
        super(props)
       this.inputElemntRef = React.createRef();
    }
    componentDidMount(){
       //this.inputElemnt.focus();
       this.inputElemntRef.current.focus();
    }
    render(){
        console.log('[Person.js] rendering...');
    return (
        <Auxiliary>
            <authcontex.Consumer>
                {(context)=>context.authenticated ?<p>The user is authenicadted</p>:<p>please login</p>}
            </authcontex.Consumer>
            
            <div className="Person">
            
            <p onClick ={this.props.click}> I am {this.props.name} age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input ref= {this.inputElemntRef} type ="text" onChange={this.props.changed} />


        </div>
        </Auxiliary>
        

    );

    }
    
}
Person.propTypes ={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};
export default withClass(Person);