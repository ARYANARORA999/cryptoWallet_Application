import React from "react";
import WalletConnect from "./components/WalletConnect";
import TokenWatchList from "./components/TokenWatchlist";
import TokenTransfer from "./components/TokenTransfer";
import HistoricalBalance from "./components/HistoricalBalance";
import { Container, Row, Col, Card } from "react-bootstrap"; // Importing Bootstrap components
import useWallet from "./hooks/useWallet";
const ethers = require("ethers") // Make sure to import ethers

// Mock window.ethereum object for testing without MetaMask
if (typeof window.ethereum === 'undefined') {
  window.ethereum = {
    isMetaMask: true,
    request: async ({ method }) => {
      if (method === "eth_requestAccounts") {
        return ["0xe1Ca1D55A81e3ad7979703a2aB8a6B2108C04121"]; // Mock address
      }
    },
    getBalance: async () => {
      return ethers.utils.parseEther("100.0"); // Mock 100 ETH balance
    },
    networkVersion: "1", // Mock network (mainnet)
  };
}

function App() {
  const { provider, address, balance, connectWallet } = useWallet();

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow">
            <Card.Body>
              <h1>Token Watchlist App</h1>
              <WalletConnect provider={provider} address={address} balance={balance} connectWallet={connectWallet} />
              {provider && address ? (
                <>
                  <Row className="mt-4">
                    <Col>
                      <TokenWatchList provider={provider} address={address} />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={6}>
                      <TokenTransfer provider={provider} />
                    </Col>
                    <Col md={6}>
                      <HistoricalBalance provider={provider} />
                    </Col>
                  </Row>
                </>
              ) : (
                <p className="text-muted mt-3">Please connect your wallet to interact with the app.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
