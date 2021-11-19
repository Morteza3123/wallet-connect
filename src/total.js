import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import React, { Component } from 'react'



export default class Total extends Component {

    constructor(props){
        super(props)
        this.state={
            isConnected : false,
            Provider : {},
            account : ''
        }

        
                 this.loadWallet()
             
        
    }
    async loadWallet(){
        const providerOptions = {
            // Example with injected providers
            injected: {
              display: {
                logo: "data:image/gif;base64,INSERT_BASE64_STRING",
                name: "Injected",
                description: "Connect with the provider in your Browser"
              },
              package: null
            },
            // Example with WalletConnect provider
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                  rpc: {
                    56: 'https://bsc-dataseed1.binance.org'
                  },
                  chainId: 56
                }
              }
          };  
          const web3Modal = new Web3Modal({
            network: "mainnet", // optional
            cacheProvider: true, // optional
            providerOptions // required
    
          });
          const a = await web3Modal.cachedProvider
         if(a){
            this.connectWallet(a)
         }
    }

  async connectWallet(event){
      
    // const Web3Modal = window.Web3Modal.default;
    const providerOptions = {
        // Example with injected providers
        injected: {
          display: {
            logo: "data:image/gif;base64,INSERT_BASE64_STRING",
            name: "Injected",
            description: "Connect with the provider in your Browser"
          },
          package: null
        },
        // Example with WalletConnect provider
        walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                56: 'https://bsc-dataseed1.binance.org'
              },
              chainId: 56
            }
          }
      };  
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required

      });
      const provider = await new web3Modal.connectTo(event)
      const web3 = new Web3(provider);

      const accounts = await web3.eth.getAccounts();
      this.setState({ account : accounts[0]})


  }

  async disConnect(){
      await this.state.provider.disconnect()
  }

  
  

  render() {
      
console.log(this.state.isConnected)

    return (
        <div>
            <button onClick={() => this.connectWallet('injected')}>MetaMask</button>
            <button onClick={() => this.connectWallet('walletconnect')}>WalletConnect</button>
            <button onClick={() => this.disConnect()}>disconnect</button>

            <h1>{this.state.account}</h1> 
        </div>
    )
}
}




