import { render } from "@testing-library/react";
import Web3 from "web3";
import Web3Modal from "web3modal";
// import { injected } from "web3modal/dist/providers/connectors";
import React, { Component } from 'react'



export default class Connector extends Component {

    async loadweb3(){
    const providerOptions = {
        /* See Provider Options Section */
        injected: {
          display: {
            logo: "data:image/gif;base64,INSERT_BASE64_STRING",
            name: "Injected",
            description: "Connect with the provider in your Browser"
          },
          package: null
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
                <button onClick={this.loadweb3}>HHHHH</button>
            </div>
        )
    }
}





// const provider = await web3Modal.connect();

// const web3 = new Web3(provider);




