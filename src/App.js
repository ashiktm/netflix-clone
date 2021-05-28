
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import RowPoster from './components/rowposter/RowPoster';
import {Originals,Action,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from '../src/components/constants/contant'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster title='Netflix Orhinals' uu={Originals}/>
     <RowPoster title='Action Movies' uu={Action} issmall/>
     <RowPoster title='ComedyMovies' uu={ComedyMovies} />
     <RowPoster title='HorrorMovies' uu={HorrorMovies} issmall/>
     <RowPoster title='RomanceMovies' uu={RomanceMovies} />
     <RowPoster title='Documentaries' uu={Documentaries} issmall/>
    </div>
  );
}

export default App;
