import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';
import { fetchFromApi, executeDelete } from './Utils';

class EmployeesList extends React.Component {
  constructor(props){
    super(props);
    console.log("list constructor - start")
    this.onDelete = this.onDelete.bind(this);
    this.fetchFromApi = fetchFromApi.bind(this);
    this.executeDelete = executeDelete.bind(this);
    console.log("list constructor - end")
  }

  componentDidMount(){
    if(this.props.text.length > 0){
      this.fetchFromApi();
    }
  }

  render() {
    if(this.props.items.length > 0){
      console.log(this.props.items);
      return (
    
        <table className="centered">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => (
              <tr key={item.empNo}>
                <td style={{fontSize: "18px"}}>{item.empNo}</td> 
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                  <Link to = {{
                   pathname: `/edit/${item.empNo}`,
                   state: this.props.text}}><Button text="Edit" id="edit-button" className="waves-effect waves-light btn-small" /></Link> 
                  <Button onClick= {() => this.onDelete(item.empNo)} text="Delete" id = "delete-button" className="waves-effect waves-light btn-small" />
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
       
      );
    }
    else if (this.props.items.length === 0){
      return (
        <>
        <br/>
        <h3> </h3>
        </>
      );
    }
    
  }
 async onDelete(id){
   await this.executeDelete(id);
  }
}

export default EmployeesList