import './Reset.css';
import './App.css';
import Header from './Header';
import Home from './Home';
import Story from './Story';
import Visit from './Visit';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">  
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/story" element = {<Story/>}/>
            <Route path="/visit" element= {<Visit/>}/>
          </Routes>
        </BrowserRouter>



    </div>
  );
}

export default App;
