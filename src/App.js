
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/HOME/Home';
import NOTFound from './components/NOTFound/NOTFound';
import ReviewsPage from './components/ReviewsPage/ReviewsPage';

function App() {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch('api.json')
        .then(res => res.json())
        .then(data => {
            setReviewData(data?.slice(0,3));
        });
}, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home reviewData={reviewData}></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/review' element={<ReviewsPage />}></Route>
        <Route path='*' element={<NOTFound></NOTFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
