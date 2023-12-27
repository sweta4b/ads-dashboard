import logo from './logo.svg';
import './App.css';
import { AdsSubmitted, Header, MediaAdForm, Table, TextAdForm } from './Components';
import { Route, Routes } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Ads from './Pages/Ads';

function App() {
  return (
    <div className="App h-[100vh]">
      <div className='w-full m-auto border-2 h-full md:h-[800px]  md:max-w-[1480px] max-w-[600px] bg-gray-100'>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/ads" element={<Ads/>}/>
        <Route path="/textAdForm" element={<TextAdForm/>}/>
        <Route path="/mediaAdForm" element={<MediaAdForm/>}/>
        <Route path="/adsSubmitted" element={<AdsSubmitted/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
