import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Router } from "@reach/router"
import Main from './views/Main'
import Jerry from './views/Jerry'
import ManyMarquees from './views/ManyMarquees'
// import NumberMarquees from './views/NumberMarquees'


function App() {
  return (
    <div className="App">
      <h1> hello world</h1>
      <Router>
        <Main path="/"/>
        <Jerry path="/Jerry" />
        <ManyMarquees path="/many/:word"/>
        {/* <NumberMarquees path="/many/:num"/> */}
        
      </Router>
    </div>
  );
}

export default App;
