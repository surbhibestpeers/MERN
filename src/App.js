
import './App.css';
import Form from './components/Form';
import MainPage from './components/MainPage';
import DeleteList from './components/DeleteList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/form" element={<Form/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/delete" element={<DeleteList/>}/>
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
