import React, { Component } from 'react';

import './App.css';
import Persons1 from '../components/Persons/Persons1';
import Cockpit from '../Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import  authcontex from '../context/auth-contex';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    Persons: [
      { id: 'ab', name: 'Max', age: 28 },
      { id: 'ac', name: 'Mini', age: 23 },
      { id: 'ad', name: 'Adesyfin', age: 20 }

    ],
    otherstate: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    
    authenticated:false
  }
  //Compnnts work start 
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state
  }
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextprops, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;

  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  //end of components work

 


  //this is for switch handler for name change 
  switchHandler = () => {
    this.setState({
      Persons: [
        { name: 'Max', age: 28 },
        { name: 'Qurat', age: 23 },
        { name: 'Adesyfin', age: 20 }

      ]

    })

  }
  //Name change in the input 
  nameChangeHandler = (event, id) => {
    const person1index = this.state.Persons.findIndex(p => {
      return p.id === id;


    });
    const person2 = { ...this.state.Persons[person1index] };
    person2.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[person1index] = person2




    this.setState((prveState, props)=>{
      return{
        Persons: persons,
        changeCounter:prveState.changeCounter +1
      }
    });

  }
  //Toggle the whole Div
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })


  }
  //Delete person handler
  deletePersonHanler = (personindex) => {
    const Persons = this.state.Persons;
    Persons.splice(personindex, 1)
    this.setState({ Persons: Persons })
  }
  //Login Authentication
  loginHandler=()=>{
    this.setState({authenticated:true});

  };
  render() {
    console.log('[App.js] render');
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      ':hover': {
        backgroundColor:('#0074d9')
          
      }
    }
    let Persons = null;

    if (this.state.showPersons) {
      Persons = (
        
          <Persons1 Persons={this.state.Persons}
          clicked={this.deletePersonHanler}
          changed={this.nameChangeHandler} 
          isauthenticae={this.state.authenticated}/>
         
        
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      };
      



    }
   
    return (
      <Auxiliary>
        <div className='App'>
        <button onClick={()=>{this.setState({showCockpit:false});}} className="button3">Remove Cockpit</button>
        <authcontex.Provider 
        value={{authenticated:this.state.authenticated, 
          login:this.loginHandler}}>
       {this.state.showCockpit ?<Cockpit showPersons={this.state.showPersons}
        Persons={this.state.persons} 
        clicked_toggle ={this.togglePersonHandler}
     
        />
        :null} 
       
        {Persons}
        </authcontex.Provider>

      </div>

      </Auxiliary>
      
     
    );
  }
}

export default withClass(App);