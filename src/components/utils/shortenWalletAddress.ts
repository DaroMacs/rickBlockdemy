export const shortenWalletAddress = (address: any) =>
  `${address.substring(0, 6)}…${address.substring(
    address.length - 4,
    address.length
  )}`;
