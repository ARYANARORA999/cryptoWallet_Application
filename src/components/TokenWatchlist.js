import React, { useState, useEffect } from "react";
import { getTokenBalance } from "../services/tokenService";
import { Card, ListGroup, Form, Button } from "react-bootstrap"; // Import Bootstrap

const TokenWatchList = ({ provider, address }) => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenList, setTokenList] = useState([]);
  const [balances, setBalances] = useState({});

  const addToken = () => {
    if (tokenAddress) {
      setTokenList([...tokenList, tokenAddress]);
      setTokenAddress("");
    }
  };

  useEffect(() => {
    if (provider && address) {
      tokenList.forEach(async (tokenAddress) => {
        const balance = await getTokenBalance(tokenAddress, address, provider);
        setBalances((prevBalances) => ({
          ...prevBalances,
          [tokenAddress]: balance,
        }));
      });
    }
  }, [provider, address, tokenList]);

  return (
    <Card className="shadow-sm">
      <Card.Header>Add Tokens to Watchlist</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter token address"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
            />
          </Form.Group>
          <Button onClick={addToken} variant="success">
            Add Token
          </Button>
        </Form>
      </Card.Body>
      <ListGroup variant="flush">
        {tokenList.map((token) => (
          <ListGroup.Item key={token}>
            Token: {token} | Balance: {balances[token] || "Loading..."}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TokenWatchList;
