import React,{Component} from 'react';

class Basicinfo extends Component{
  
render(){
    return(
    <div>
       <fieldset>
          <label >
            Name:
          </label>
          <input type="text" name='name' value={this.props.values.name} placeholder="name" onChange={(e) => {this.props.handleChange(e)}} />
          <br /><br/>
          
          <label>
            Email:
          </label>
          <input type="text" name='email' value={this.props.values.email} placeholder="email" onChange={(e) => {this.props.handleChange(e)}}/>
          <br/><br/>
          <label>
            Password:
          </label>
          <input type="password" name='password' value={this.props.values.password} placeholder="password" onChange={(e) => {this.props.handleChange(e)}} />
          <br/><br/>
          
        </fieldset>
      </div>
    );
}
}
export default Basicinfo;