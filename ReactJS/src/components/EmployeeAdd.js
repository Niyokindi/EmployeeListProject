import React, { Component } from "react"
import axios from 'axios'
class EmployeeAdd extends Component {
    constructor(props) {
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
      }

   addEmployee(newEmployee){
       axios.request({
            method: 'post',
            url: 'http://localhost:8081/test/create',
            data: newEmployee
        }).then(res =>{
            this.props.history.push('/');

        }).catch(err => console.log(err));
        //console.log(newEmployee);
    } 

    onSubmit(e){
        const newEmployee = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value
        }
        this.addEmployee(newEmployee);
        //alert("New Employee added sucessfully")

        e.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Add Employee</h3>
                
                <form onSubmit = {this.onSubmit.bind(this)} >
                    <div className = "input-form" >
                        <input type = "text" name = "First Name" ref = {this.firstName}  placeholder="Enter First Name" />
                    </div>
                    
                    <br />

                    <div className = "input-form" >
                        <input  type = "text" name = "Last Name" ref = {this.lastName} placeholder = "Enter Last Name" />
                    </div>
                    <br />

                    <input type = "submit" value = "submit" className="waves-effect waves-light btn-small"/>
                    
                 
                </form>
                
            </div>
        )
    }

   
}

export default EmployeeAdd

