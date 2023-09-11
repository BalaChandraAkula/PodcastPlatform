
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUpPage/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
