
import "semantic-ui-css/semantic.min.css";
import './App.css';
import Home from "./pages/Home";
import Series from "./pages/Series";
import Error404 from "./pages/Error404";
import Comics from './pages/comics';
import Header from "./components/Header/Header";
import{ BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
      
      <Header />
      
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/comics" element={<Comics />}/>
         <Route path="/series" element={<Series />}/>
         <Route path="/*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
  