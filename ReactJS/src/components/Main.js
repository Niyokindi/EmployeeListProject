import React, {Component} from 'react';
import EmployeesList from './EmployeesList';
import Button from './Button';
import Pagination from './Pagination';
import {fetchFromApi} from './Utils';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = { items: [], text: '', perPage: 5, currentPage: 1};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchFromApi = fetchFromApi.bind(this);
        this.handleItemsFetch = this.handleItemsFetch.bind(this);
        
        const firstNameData = this.props.location.state;
        if(firstNameData){
            this.state.text = firstNameData;
        }
      }

    render(){
        const indexOfLastEmployee = this.state.currentPage * this.state.perPage;
        const indexOfFirstEmployee = indexOfLastEmployee - this.state.perPage;;
        const currentEmployee= this.state.items.slice(indexOfFirstEmployee, indexOfLastEmployee);
        const paginate = (pageNumber) => this.setState({currentPage:pageNumber})
        console.log("rendering from main")
        console.log(this.state.text);
        return (
            <div>
                <h3>Search by first name:</h3>
                <form className = "input-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <Button text = "Search" className="waves-effect waves-light btn-small" onClick = {this.handleSubmit} />
                </form>
                
                <EmployeesList items={currentEmployee} text = {this.state.text} onItemsFetch = {this.handleItemsFetch} /> 
                <Pagination postsPerPage = {this.state.perPage} totalPosts = {this.state.items.length} paginate = {paginate} />
            </div>
        )
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
      }
 
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        this.fetchFromApi();
    }
    
    handleItemsFetch(newItems){
        this.setState({items: newItems });
        console.log("handling items change");
        console.log(newItems);
    }
    
}

export default Main
