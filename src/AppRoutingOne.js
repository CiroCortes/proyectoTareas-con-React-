import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/home/Homepage';
import NotFoundPage from './pages/404/NotFoundPage';


function AppRoutingOne() {
  return (
    <Router>
       <Routes>
         <Route path ='/' element={ <Homepage/> }  />
         <Route path='*' element ={ <NotFoundPage/> }/>
       </Routes>
     </Router>
    
  );
}

export default AppRoutingOne;
