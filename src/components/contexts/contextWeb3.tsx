import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { createContext } from "react";
import injected from "../../config/web3";

interface Web3ContextProps {
  children: React.ReactNode;
}

interface Web3VariablesProps {
  active: boolean;
  activate: (
    connector: any,
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => Promise<void>;
  connect: () => Promise<void>;
  account: string | null | undefined;
  disconnect: () => void;
  isUnsupportedChain: boolean;
}

export const Web3Context = createContext<Web3VariablesProps>(
  {} as Web3VariablesProps
);

export const Web3ContextProvider = ({ children }: Web3ContextProps) => {
  const { active, account, library, connector, activate, deactivate, error } =
    useWeb3React();

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = () => {
    if (confirm("Are you sure you want to disconnect your wallet?")) {
      deactivate();
    }
    return;
  };

  return (
    <Web3Context.Provider
      value={{
        active,
        activate,
        connect,
        account,
        disconnect,
        isUnsupportedChain,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
