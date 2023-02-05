# A Decentralized Voting System on the Ethereum Blockchain – A Solution to the Lack of Trust in Elections?
## Running the Code. 
You should preferably run this code in linux. Windows might have problems. It often has when running Ethereum related projects. <br>
## Install dependencies. Preferably install all packages with sudo.
1. Clone the repository
2. Install npm and nodejs
3. From inside the root of the project install, which is a framework for Smart Contract development
		`npm install -g truffle`
4. Install the package to import from .env -files
        `npm install dotenv`
5. Install the hdwallet provider package to use your metamask inside your project.
        `npm install @truffle/hdwallet-provider`

## Install Metamask
In Chrome or Mozilla Firefox you must add the Metamask extension. Metamask is an Ethereum wallet application, which you need to interact with smart contracts and the Ethereum blockchain in general. You can add Metamask to your browser as any other add-in. Follow the instruction in this [link](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask) for assistence. Create a new wallet by following all instructions.

## Get goerli Test-Eth
Our project will be deployed on the goerli testnet. It is like the real Ethereum, just for test purposes. The currency necessary to send transactions can be received through the [goerli faucet](https://goerlifaucet.com/) . Follow the instructions. You will need to create an alchemy-account for this purpose. <br>To get your Ethereum Address click the Metamask extension icon in the top right of your prowser (the fox). First you must [activate the test network](https://medium.com/@mwhc00/how-to-enable-ethereum-test-networks-on-metamask-again-d7831da23a09). Click on Ethereum Mainnet and  enable show test networks. Turn the testnet switch on. Now you can choose goerli from the network list. Below account you can copy your address to the clipbord and receive testeth from the [goerli faucet](https://goerlifaucet.com/) .

## Add your metamask seed to the Open the .env file. Add the seed phrase from your Metamask wallet. 
To get your mnemonic seed follow these [instructions](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase). Make sure to have selected goerli testnet. Copy the seed into the .env file within the root of this project and add it next to MNEMONIC = 

## Deploy the smart contracts to the goerli testnet
Now it's time to deploy the smart contracts. Run the following command from your project root directory.
		`truffle migrate --network goerli`

Great! You have deployed the smart contracts to the goerli testnet. 

## Open the dapp to interact with the smart contracts
Now that the contracts are deployed you can open the Dapp by executing
		`npm run dev --goerli`