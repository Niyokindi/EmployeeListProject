import React, { Component } from "react";
import axios from 'axios';
import {fetchFromApi} from './Utils'
class EmployeeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '', first_name: '' , last_name: ''};
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.fetchFromApi = fetchFromApi.bind(this)

      }
      componentDidMount(){
         this.getEmployeeDetails();
      }
    getEmployeeDetails(){
        let employeeID = this.props.match.params.id;
        axios.get(`http://localhost:8081/test/${employeeID}`)
        .then(res => {
            this.setState({
                id: res.data.empNo,
                first_name: res.data.firstName,
                last_name:  res.data.lastName
            }, () => {
                console.log(this.state);
            });
        })
        
      } 
    EditEmployee(newEmployee){
        axios.request({
            method: 'put',
            url: `http://localhost:8081/test/update/${this.state.id}`,
            data: newEmployee
        }).then(res =>{
            const firstNameData = this.props.location.state;
            this.props.history.push({pathname: '/', state: firstNameData});

        }).catch(err => console.log(err));
    } 

    onSubmit(e){
        const newEmployee = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value
        }
        this.EditEmployee(newEmployee);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <h3>Edit Employee</h3>
                
                <form className = "input-form" onSubmit = {this.onSubmit.bind(this)} >
                    <div className = "input-form" >
                        <input type = "text" name = "first_name" ref = {this.firstName}  value = {this.state.first_name} onChange = {this.handleInputChange.bind(this)}/>
                    </div>
                    
                    <br />

                    <div className = "input-form" >
                        <input type = "text" name = "last_name" ref = {this.lastName} value = {this.state.last_name} onChange = {this.handleInputChange.bind(this)} />
                    </div>

                    <br />

                    <input type = "submit" value = "submit" className="waves-effect waves-light btn-small"/>
                    
                 
                </form>
            </div>
        )
    }

   handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    });
   }
}

export default EmployeeEdit

