import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Show from './components/Show';
import CreatePackage from './components/CreatePackage';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Show/> }/>
          <Route path='/create' element={ <CreatePackage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
