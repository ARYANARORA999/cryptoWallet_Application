import { useState } from "react";
const ethers = require("ethers") // Use correct import

const useWallet = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    // Check if MetaMask or any Ethereum wallet is available
    if (typeof window.ethereum !== "undefined") {
        const mockProvider = { isMetaMask: true };
      const mockAddress = "0x1234567890abcdef1234567890abcdef12345678";
      const mockBalance = "100.0"; // Mock balance in ETH

      // Set mock data
      setProvider(mockProvider);
      setAddress(mockAddress);
      setBalance(mockBalance);
      console.log("Using mock wallet connection");
    } else {
        try {
            // Request account access from MetaMask
            await window.ethereum.request({ method: "eth_requestAccounts" });
    
            // Create a provider using ethers.js
            const newProvider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(newProvider);
    
            // Get the signer from the provider
            const signer = newProvider.getSigner();
    
            // Fetch the connected account's address
            const userAddress = await signer.getAddress();
            setAddress(userAddress);
    
            // Fetch the user's balance
            const userBalance = await signer.getBalance();
            setBalance(ethers.utils.formatEther(userBalance)); // Convert balance to human-readable format
          } catch (error) {
            console.error("Error connecting to MetaMask:", error);
          }
        }
      };

  return { provider, address, balance, connectWallet };
};

export default useWallet;
