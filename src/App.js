import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loginActionCreator } from './redux/actionCreators/ActionCreators';

function App(props) {

  //2. Function defination
  let login = ()=>{
    //alert('okokokok');
    props.login();
  }

  return (
    <div className="App">

      <header className="App-header">
        {console.log(props.storeObject)}
        {props.storeObject.name}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={ (e)=>{ login(e); } }>Get State</button>
      </header>

      
    </div>
  );
}

let mapStateToProps =(getStateMethod)=>{
  return {
    //1. P:V
    "storeObject":getStateMethod
    //2. Method
  };
}

let mapDispatchToProps =(dispatchMethod)=>{
  return {
    login:()=>{
      dispatchMethod(loginActionCreator());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
