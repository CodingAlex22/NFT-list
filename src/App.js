import { useState, useEffect } from 'react';
import './App.css';
import NFTContainer from './NFTContainer';
import useLocalStorage from './useLocalStorage';



function App() {

  
  //Sets the input value to local storage by setting the input to "value"
  let [value, setValue] = useLocalStorage('name', '');

  const [walletAddress, setWalletAddress] = useState(null)

  //Sets the NFT JSON parameters from the API fetch call
  const [nfts, setNfts] = useState([]);


  //Gets the NFT API Data. You can use any other API of your choice on here and add the same parameters
  const getNftData = async () => {

    
  
    // Replaces the default address to the NFT address of your choice. 

    const response = await fetch(`https://api.rarible.org/v0.1/items/byCollection/?collection=ETHEREUM:${value}`)

        const data = await response.json()


        setNfts(data.items)
  }

  useEffect(() => {
    getNftData()
  }, [walletAddress])
  
  return (
    <div className="App">
      <div className = 'placeholder'>
        <h2>Enter an NFT Address</h2>
        <div className = "input-and-search">

        
        <div className = 'input-bar'>
         
            <div className = "nft-search-button">
            <input className = 'inputs' type = 'text' onChange = {(event) => setValue(event.target.value)} 
        value ={value}
        />
                <button className ='modal__btn' onClick ={getNftData}>Search</button>
            </div>
         </div>
      </div>

      </div>

        
        <NFTContainer nfts={nfts}/>  
    </div>
  );
}

export default App;
