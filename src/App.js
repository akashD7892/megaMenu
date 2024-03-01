import './App.css';
import megaData from './megaData.json';
import ArtworksComp from './components/ArtworksComp';
import ArtComp from './components/ArtComp';
import GiftComp from './components/GiftComp';
import HomeComp from './components/HomeComp';
import JewelComp from './components/JewelComp';
import KitComp from './components/KitComp';

function App() {
  
  
  return (
    <div className="App">
      <header>
        
        <div className='header'>
            <div className='heading'><a href='#'>Artworks</a></div>
            <div className='dropdown'><ArtworksComp/></div>
          
        </div>

        <div className='header'>
            <div className='heading'><a href='#'>Home & Living</a></div>
            <div className='dropdownh' id='home'><HomeComp/></div>
          
        </div>

        <div className='header'>
            <div className='heading'><a href='#'>Jewellery & Accesorries</a></div>
            <div className='dropdown'><JewelComp/></div>
          
        </div>

        <div className='header'>
            <div className='heading'><a href='#'>Kitchen & Dining</a></div>
            <div className='dropdown'><KitComp/></div>
         
        </div>

        <div className='header'>
            <div className='heading'><a href='#'>Gifting</a></div>
            <div className='dropdown'><GiftComp/></div>
        </div>

        <div className='header'>
            <div className='heading'><a href='#'>Art & Collectibles</a></div>
            <div className='dropdown'><ArtComp/></div>
        </div>

      </header>
    </div>
  );
}

export default App;
