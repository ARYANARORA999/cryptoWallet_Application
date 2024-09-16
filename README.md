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


   
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

If react-scripts error shows up
In the project directory, you can run

1. Check if react-scripts is installed: Run the following command to check if react-scripts is included in your node_modules:
### `npm list react-scripts`
2. Install dependencies: Run this command to install all necessary dependencies (including react-scripts) listed in your package.json file:
### `npm install`
3. Install react-scripts directly: If the above step doesn’t solve the issue, you can manually install react-scripts:
### `npm install react-scripts --save`
4. Check your environment variables (Windows users): If you're using Windows, ensure that the path to Node.js is correctly set in your system’s environment variables. You can verify by running:
### `node -v`
### `npm -v`
If either of these commands is not recognized, you'll need to add Node.js to your system’s PATH.
5. Clear npm cache: Sometimes, corrupted cache can cause issues. Run the following command to clear the npm cache:
### `npm cache clean --force`
6. Recreate node_modules and package-lock.json: Sometimes deleting the node_modules folder and package-lock.json and reinstalling dependencies can fix the issue:
### `rm -rf node_modules package-lock.json`
### `npm install`
After following these steps, try running your project again:
### `npm start`
