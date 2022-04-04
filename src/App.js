
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import NOTFound from './components/NOTFound/NOTFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<NOTFound></NOTFound>}></Route>





      </Routes>
    </div>
  );
}

export default App;
