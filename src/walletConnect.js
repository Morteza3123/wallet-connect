import { render } from "@testing-library/react";
import Web3 from "web3";
import Web3Modal from "web3modal";
// import { injected } from "web3modal/dist/providers/connectors";
import React, { Component } from 'react'




export default class Bsc extends Component {

    async loadweb3(){
    const providerOptions = {
        /* See Provider Options Section */
        display: {
            logo: "../../assets/img/binance-logo.svg",
            name: "Binance Chain Wallet",
            description: "Connect to your Binance Chain Wallet"
          },
          package: true,
          connector: async () => {
            let provider = null;
            if (typeof window.BinanceChain !== 'undefined') {
              provider = window.BinanceChain;
              try {
                await provider.request({ method: 'eth_requestAccounts' })
              } catch (error) {
                throw new Error("User Rejected");
              }
            } else {
              throw new Error("No Binance Chain Wallet found");
            }
            return provider;
          }
        }

    // const providerOptions = {
    //   walletconnect: {
    //     package: true,
    //     options: {
    //       rpc: {
    //         56: 'https://bsc-dataseed.binance.org/'
    //       },
    //       network: 'binance',
    //       chainId: 56,
    //       infuraId: YOUR_INFURA_KEY,
    //     }
    //   }
    // };
      

      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });

        await web3Modal.connectTo()

    }

    

    render() {
      console.log(window.BinanceChain)
        return (
            <div>
                <button onClick={this.loadweb3}>BBBB</button>
            </div>
        )
    }
}





// const provider = await web3Modal.connect();

// const web3 = new Web3(provider);




