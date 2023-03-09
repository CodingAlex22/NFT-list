import React from 'react'
import NFTCard from './NFTCard'
import './NFTContainer.css'

const NFTContainer = ({ nfts }) => {
  
//NFTContainer that maps out all the available NFTs from the requested address
    return (
    <div className = 'nft-container'>
        {nfts.map((nft, index) => {
            return <NFTCard nft={nft} key={index} />
        })}
    </div>
  )
}

export default NFTContainer