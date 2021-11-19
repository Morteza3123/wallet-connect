import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import React, { Component } from 'react'



export default class Trust extends Component {

  async loadweb3(){
  const providerOptions = {
      /* See Provider Options Section */
      
walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: 'https://bsc-dataseed1.binance.org'
          },
          chainId: 56
        }
      }
    }

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

      await web3Modal.connect()
  }

  

  render() {
      return (
          <div>
              <button onClick={this.loadweb3}>GGGGG</button>
          </div>
      )
  }
}





