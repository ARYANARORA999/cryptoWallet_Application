import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap"; // Bootstrap imports

const TokenTransfer = ({ provider }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async () => {
    if (provider && tokenAddress && recipient && amount) {
      alert(`Transferred ${amount} tokens to ${recipient}`);
      // Replace with actual transfer logic
    }
  };

  return (
    <Card className="shadow-sm">
      <Card.Header>Transfer Tokens</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Token Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter token address"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Recipient Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipient address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleTransfer}>
            Transfer Tokens
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TokenTransfer;
