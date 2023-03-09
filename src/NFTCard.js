import React, { useState } from 'react'
import './Components/Modal.css'
import './NFTCard.css'



const NFTCard = ({ nft }) => {

    const [modal, setModal] = useState(false);

    ///Activates the modal 
    const toggleModal = () => {
        setModal(!modal)
    }


    //If modal is truthy then it changes to 'active-modal' otherwise it removes 'active-modal'
    if(modal){
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    let string = nft.id
    const url = string.replace(/[\\:]/g,'/');

  return (
    
   <div className='wrapper-grid'> 
    <div onClick = {toggleModal} className = 'card nft-card' >

        
    {
      /* These are the parameters for the card if you wish to use a different NFT API  I've added conditionals to the parameters because there are NFTs where
        it will not have the requested parameters which will lead to the modal not loading */
    }
        <img src={nft?.meta ? nft.meta.content[0].url : null} className='nft-image' alt="NFT"/>
        <div className = 'card content'>
            <div className = 'card'>
                {nft?.meta ? nft.meta.name : null}
            <div classname = 'price'>
                <p>Last sale: {nft?.lastSale ? nft.lastSale.price : null}</p>
            </div>
    {
        /* These are the parameters for the modal if you wish to use a different NFT API and add more content to your likening. I've added conditionals to the parameters because there are NFTs where
        it will not have the requested parameters which will lead to the modal not loading*/
    }   
            {modal && (
                <div className = "modal">
                <div className = "overlay"></div>
                <div className = "modal-content">
                <img src={nft?.meta ? nft.meta.content[0].url : null} className='nft-image' alt="NFT"/>
                    <h2>{nft?.meta ? nft.meta.name : null}</h2>
                    <p>Owned by: {nft?.lastSale ? nft.lastSale.buyer : null}</p>
                    <p>Ξ {nft?.lastSale ? nft.lastSale.price : null} {nft.lastSale?.currency ? nft.lastSale.currency.blockchain : null}</p>
                    <p>Description: {nft?.meta ? nft.meta.description : null}</p>
                    <a href = {`https://opensea.io/assets/${url}`} >
                    <button class="modal__btn">Buy On Opensea &rarr;</button>
                    </a>
                    <a class="link-2"></a>
                </div>
            </div>
            )}

        
            </div>
            



        </div>

        
            
        
    </div>
    
   
   
   </div>
    
  )
}

export default NFTCard
