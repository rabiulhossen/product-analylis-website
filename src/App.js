
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/HOME/Home';
import NOTFound from './components/NOTFound/NOTFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='*' element={<NOTFound></NOTFound>}></Route>
       





      </Routes>
    </div>
  );
}

export default App;
