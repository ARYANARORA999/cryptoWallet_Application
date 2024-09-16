# Token Watchlist and Wallet Management App

## Overview

This app allows users to manage their cryptocurrency portfolio by connecting their wallet (MetaMask or mock wallet), adding tokens to a watchlist, transferring tokens, and viewing the historical balance of their tokens over time. It is built with **React**, **ethers.js**, **Chart.js**, and **React-Bootstrap**.

## Features

### 1. Wallet Connection (MetaMask or Mock Wallet)
   - **MetaMask Integration**: Users can connect their MetaMask wallet to the app to manage tokens. After connecting, the app retrieves the user's wallet address and balance using **ethers.js**.
   - **Mock Wallet**: If MetaMask is not available, a mock wallet is used for development and testing purposes. It provides a mock wallet address and balance to simulate the functionality.
   
   **How It Works**:
   - The wallet connection is managed in the `useWallet.js` hook, which handles MetaMask detection and connection.
   - If MetaMask is unavailable, a mock `window.ethereum` object is injected to simulate a wallet connection.
   
### 2. Token Watchlist
   - Users can add ERC-20 token contract addresses to a watchlist and view their balances.
   - The app interacts with the ERC-20 contract via **ethers.js**, calling the `balanceOf` function to get the token balance for the connected wallet.

   **How It Works**:
   - Users input an ERC-20 token contract address.
   - The app uses **ethers.js** to fetch and display token balances.
   - This feature is implemented in the `TokenWatchList.js` component.

### 3. Token Transfer
   - Users can transfer ERC-20 tokens to another address by specifying the recipient's address and the amount to transfer.
   - The app uses **ethers.js** to interact with the ERC-20 contract’s `transfer` function.

   **How It Works**:
   - Users input the token contract address, recipient address, and amount of tokens to send.
   - The `TokenTransfer.js` component handles the transfer logic and updates the UI with success or failure messages.

### 4. Historical Balance
   - Users can view the historical balance of a token over a selected date range.
   - The data is presented in a **Chart.js** line chart.
   - Date pickers allow users to select the start and end date for the historical data.

   **How It Works**:
   - When the user selects a date range and clicks "Fetch Data," the app fetches (currently simulated) token balance data.
   - The chart is dynamically updated using **Chart.js** with the historical balance data over the selected time period.
   - This is implemented in the `HistoricalBalance.js` component.

### 5. User Interface and Layout
   - The app is styled using **React-Bootstrap**, providing a clean and responsive design.
   - Components such as **Card**, **Button**, and **Form** from Bootstrap ensure a modern and user-friendly interface.

   **How It Works**:
   - The UI is structured with **React-Bootstrap** components, and the layout is managed using **Container**, **Row**, and **Col** for responsive design.

---

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed.
- **MetaMask** installed in the browser for connecting a wallet.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   .
├── public
├── src
│   ├── components
│   │   ├── WalletConnect.js         // Handles wallet connection (MetaMask or mock)
│   │   ├── TokenWatchList.js        // Manages token watchlist
│   │   ├── TokenTransfer.js         // Allows token transfers
│   │   ├── HistoricalBalance.js     // Displays token balance over time using Chart.js
│   ├── hooks
│   │   └── useWallet.js             // Custom hook for wallet management
│   ├── App.js                       // Main app component
│   ├── index.js                     // App entry point
├── package.json
└── README.md

   
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
