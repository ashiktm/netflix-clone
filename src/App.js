
import './App.css';
import Banner from './component/banner/Banner';
import Navbar from './component/navbar/Navbar';
import RowPoster from './component/rowposter/RowPoster';


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
