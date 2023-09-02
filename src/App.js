
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Components/Home';
import ProjDemo from './Components/ProjDemo';
import FormulaForm from './Components/FormulaForm';



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/create" element={<ProjDemo /> }/>
        <Route path="/formula" element={<FormulaForm /> }/>
        {/* <Route path="/edit" element={<Edit /> }/> */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
