import './App.scss';
import { Route, Routes } from 'react-router-dom';
import PrintPage from './pages/PrintPage';
import StartingPage from './pages/StartingPage';
import ExpositionTourPage from './pages/ExpositionTourPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='print' element={<PrintPage />} />
        <Route path='/map' element={<ExpositionTourPage />} />
      </Routes>
    </div>
  )
}

export default App;