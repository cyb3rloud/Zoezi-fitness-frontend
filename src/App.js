import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ScrollButton from './components/ScrollButton';

function App() {
  return (<>
    <Home />
    <ScrollButton></ScrollButton>
           {/* <div style={{overflowY:"scroll", height:"800px"}}></div>  */}
       </>
  );
}

export default App;
