
import "semantic-ui-css/semantic.min.css";
import './App.css';
import Home from "./pages/Home";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import Comics from './pages/comics';

import{ BrowserRouter,Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/Home' element={<Home />}/>
         <Route path='/Comics' element={<Comics />}/>
         <Route path='/Series' element={<Series />}/>
         <Route path='/home' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
  