import React, { Component } from 'react';

//import './App.css';
import Basicinfo from './Basicinfo.jsx';
import Address from './Address.jsx';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
           name:'',
           password:'',  
           email:'' ,
           address:'',
           city:'',
           state:''
          };



          
  }

  handleChange=(e) => {
    var obj={};
    obj[e.target.name]= e.target.value;
//console.log(obj);
  //  console.log(this.state);
    this.setState(obj);
  }

  handleSubmit=()=> {

    console.log(this.state);
   
    let  validName=() => {
      if(this.state.name.length < 3){
        alert("Entered name is too short !!!");
        return false;
      }
      else 
      return true;
    }
   let validEmail=() =>{
    
     if(this.state.email.indexOf("@")===-1 && this.state.email.indexOf(".")===-1){
       alert("put valid email");
       return false;
     }
    
     else
     return true;
    }
    validName() ? alert("your name has been submitted.") : alert("Some validation error is there.");
   validEmail() ? alert("email has been submitted") :alert("invalid email");
  }

  render() {
    return (
    
      <div>
      <form onSubmit={this.handleSubmit}>
       <Basicinfo values={this.state} handleChange={this.handleChange}/>
       <Address values={this.state} handleChange={this.handleChange} onChangeHandleValidation={this.handleValidation}/>

       <input type='submit' name='submit' value='Submit' />
      </form>
       </div>
    );
  }
}

export default App;
