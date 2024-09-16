import React from "react";
import { Button, Alert } from "react-bootstrap"; // Import Bootstrap components

const WalletConnect = ({ provider, address, balance, connectWallet }) => {
  return (
    <div>
      {!provider ? (
        <Button onClick={connectWallet} variant="primary" size="lg">
          Connect Wallet
        </Button>
      ) : (
        <div>
          <Alert variant="success">
            <p><strong>Connected Address:</strong> {address || 'Not connected'}</p>
            <p><strong>Balance:</strong> {balance ? `${balance} ETH` : 'Loading...'}</p>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
