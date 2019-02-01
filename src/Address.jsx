import React, { Component } from 'react';
class Address extends Component{

   
    render (){
        return(
            <div>
       <fieldset>
          <label >
            Address:
          </label>
          <input type="text" name='address' value={this.props.values.address} onChangeValidation={(e) => {this.props.handleValidation(e)}} onChange={this.props.handleChange} />
          <br /><br/>
          
          <label>
            City:
          </label>
          <select  name= 'city' value={this.props.values.city} onChangeValidation={(e) => {this.props.handleValidation(e)}}>
              <option value="Ludhiana">Ludhiana</option>
              <option value="Moga">Moga</option>
              <option value="Ropar">Ropar</option>
          </select> 
      
          <br/><br/>
         
          <label>
            State:
          </label>
             <input type="text" name='state' value={this.props.values.state} onChangeValidation={(e) => {this.props.handleValidation(e)}}/>
          <br/><br/>
          
        </fieldset>
      </div>
         
        );
    }
}
export default Address;