
import './App.css';

import MainPage from './components/MainPage';
import DeleteList from './components/DeleteList';
import DesignForm from './components/DesignForm/DesignForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/delete" element={<DeleteList/>}/>
          <Route path="/design" element={<DesignForm/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
