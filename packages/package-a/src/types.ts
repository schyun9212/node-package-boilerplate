export interface Token {
  readonly address: string;
  readonly decimals: number;
  readonly symbol?: string;
  readonly name?: string;
  readonly imageUrl?: string;
}

export interface WalletProvider {
  connect(address: string): void;
}

export interface NFTFunction {
  getNFT: (address: string, id: number) => void;
}
