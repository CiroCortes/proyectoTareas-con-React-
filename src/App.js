import logo from './logo.svg';
import './App.css';
import Greeting from './component/pure/Greeting';
import GreetingF from './component/pure/greetingF';
import TaskListComponent from './component/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponenteConConContexto from './hooks/Ejemplo3.jsx';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './component/pure/greetingStyled';
import Father from './component/container/father';
import LoginFormik from './component/pure/forms/loginFormik';
import RegisterFormik from './component/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/*<Greeting name="ciro"></Greeting>*/}
          {/*<GreetingF name="ciro"/>*/}
          
          {/** ejemplo de uso de hooks */}
          {/*<Ejemplo1/>*/}
          {/*<Ejemplo2/>*/}
          {/*<MicomponenteConConContexto></MicomponenteConConContexto>*/}
          {/**todo lo que hay aqui dentro es tratado como props.children */}
          {/* <Ejemplo4 nombre="ciro">
            <h3>
              contenido del children
            </h3>
          </Ejemplo4> */}
          {/* <GreetingStyled name="ciro"></GreetingStyled> */}
      {/* </header> */}
        {/* <TaskListComponent/>   */}
      {/* <Father></Father> */}
      {/**ejemplo de formik */}
      {/* <LoginFormik></LoginFormik> */}
      <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
