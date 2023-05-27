import './App.css';
import AppBar from './Components/AppBar';
import Banner from './Components/Banner';
import Comments from './Components/Comments';
import Menu from './Components/Menu';
import PickoftheWeek from './Components/PickoftheWeek';

function App() {
  return (
    <>
    <h1 className='d-none'>Hello</h1>
    <AppBar />
    <Banner />
    <Menu />
    <PickoftheWeek />
    <Comments />
    <div className='m-1 tw-bold text-center text-warning'>Copyright@ 2020-2023</div>
    </>
  );
}

export default App;
