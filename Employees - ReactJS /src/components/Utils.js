import axios from 'axios';

export function fetchFromApi() {
  var url = 'http://localhost:8081/test';
  var firstNameToSearch = '';

  if (this.state && this.state.text) {
    firstNameToSearch = this.state.text;
  }
  if (this.props && this.props.text) {
    firstNameToSearch = this.props.text;
  }
  if (firstNameToSearch) {
    url += '?user=' + firstNameToSearch;
  }
  console.log('Fetching from: ' + url);
  console.log("Edit");


  fetch(url)
    .then(res => res.json())
    .then(json => {
      if (this.props.items) {
        this.props.onItemsFetch(json);
      }

      else if (this.state) {
        this.setState(state => ({
          items: json
        }))
      }
    });
}

export async function executeDelete(id){
  return axios.delete(`http://localhost:8081/test/delete/${id}`)
  .then(res => 
    {
      this.fetchFromApi()
    }
    
  );
}