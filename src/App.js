import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
     
    <h1 className="center">This is deployed on {props.prop1} using  {props.prop2}</h1>

    </div>
  );
}

export default App;
