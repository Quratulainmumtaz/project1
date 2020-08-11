import React,{ PureComponent} from 'react';
import Person from "./Person/Person";


class Persons1 extends PureComponent{
  //coponents start 
  // static getDerivedStateFromProps(props, state){
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state
  // }
  // shouldComponentUpdate(nextprops, nextState){
  //   console.log('[Person1.js] shouldComponentUpdate');
  //    if(nextprops.Persons!==this.props.Persons){
  //      return true
  //    }else{
  //      return false;
  //    }

  //     //return true;

  // }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person1.js] getSnapshotBeforeUpdate');
    return {message:'snapshot'}

  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Person1.js] componentDidUpdate');
    console.log(snapshot);
  }
 componentWillUnmount(){
   console.log('[Person1.js] componentWillUnmount');
 }
  //components end 

  render(){
    console.log('[Person1.js] rendering...')
    return this.props.Persons.map((person1, index) => {
        return (
        <Person click={() =>this.props.clicked(index)}
          name={person1.name}
          age={person1.age}
          key={person1.id}
          changed={(event) => this.props.changed(event, person1.id)}
          isAuth={this.props.isauthenticae} />
        );
      });
    };
  }
  
export default Persons1;