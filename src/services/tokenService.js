const ethers = require("ethers")

const ERC20_ABI = [
    // Get the account balance of another account with address `owner`
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function"
    },
    // Transfer `_value` amount of tokens to address `_to`
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" }
      ],
      name: "transfer",
      outputs: [{ name: "success", type: "bool" }],
      type: "function"
    },
    // Transfer `_value` amount of tokens from address `_from` to address `_to`
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" }
      ],
      name: "transferFrom",
      outputs: [{ name: "success", type: "bool" }],
      type: "function"
    },
    // Allow `_spender` to withdraw from your account, multiple times, up to the `_value` amount
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" }
      ],
      name: "approve",
      outputs: [{ name: "success", type: "bool" }],
      type: "function"
    },
    // Returns the amount which `_spender` is still allowed to withdraw from `_owner`
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" }
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      type: "function"
    },
    // Returns the name of the token
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "name", type: "string" }],
      type: "function"
    },
    // Returns the symbol of the token
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "symbol", type: "string" }],
      type: "function"
    },
    // Returns the number of decimals the token uses
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "decimals", type: "uint8" }],
      type: "function"
    },
    // Returns the total token supply
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "totalSupply", type: "uint256" }],
      type: "function"
    },
    // An event that is triggered when tokens are transferred
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_from", type: "address" },
        { indexed: true, name: "_to", type: "address" },
        { indexed: false, name: "_value", type: "uint256" }
      ],
      name: "Transfer",
      type: "event"
    },
    // An event that is triggered when the allowance is set
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_owner", type: "address" },
        { indexed: true, name: "_spender", type: "address" },
        { indexed: false, name: "_value", type: "uint256" }
      ],
      name: "Approval",
      type: "event"
    }
  ];
  

export const getTokenBalance = async (tokenAddress, userAddress, provider) => {
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  const balance = await tokenContract.balanceOf(userAddress);
  return ethers.utils.formatUnits(balance, 18);
};

export const getTokenAllowance = async (tokenAddress, owner, spender, provider) => {
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  const allowance = await tokenContract.allowance(owner, spender);
  return ethers.utils.formatUnits(allowance, 18);
};

export const transferTokens = async (tokenAddress, to, amount, provider) => {
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
  const tx = await tokenContract.transfer(to, ethers.utils.parseUnits(amount, 18));
  await tx.wait();
};
