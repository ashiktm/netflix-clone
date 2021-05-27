
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import RowPoster from './components/rowposter/RowPoster';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster/>
    </div>
  );
}

export default App;
