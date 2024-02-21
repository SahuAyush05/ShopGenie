import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage';
import SearchItem from './components/SearchItem';

function App() {

  return (
    <div >
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<SearchItem/>}/>
      </Routes>
    </div>
  )
}

export default App
