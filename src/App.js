import logo from './logo.svg';
import './App.css';
import mycomponent from './mycomponent';


function App() {
  let emp_id=100
  var emp_name="adithya"
  return (
    <div className="App">
      
       employee id:{emp_id} <br></br>
       employee name:{emp_name}<br></br>
       <mycomponent></mycomponent>

    
    </div>
  );
}

export default App;
