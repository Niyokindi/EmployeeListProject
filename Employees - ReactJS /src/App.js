import React from 'react';
import EmployeeAdd from './components/EmployeeAdd';
import { Switch, Route} from 'react-router-dom';
import EmployeeEdit from './components/EmployeeEdit';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
    return (
      <div>
        <Navbar />
    
        <Switch>
          <Route path="/" exact component = {Main} />
          <Route path = "/add" exact component = {EmployeeAdd} />
          <Route path = "/edit/:id" exact component = {EmployeeEdit} />
        </Switch>
        
      </div>
    )

}

export default App
