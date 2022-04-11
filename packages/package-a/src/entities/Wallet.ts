import { NFTFunction, WalletProvider } from "../types";

abstract class Wallet implements WalletProvider {
  abstract connect(address: string): void;
}

export class Metamask extends Wallet {
  connect(address: string) {
    console.log(`I am Metamask ${address}`);
  }
}

export class TerraStation extends Wallet {
  connect(address: string) {
    console.log(`I am TrerraStation ${address}`);
  }
}

export class Phantom extends Wallet implements NFTFunction {
  connect(address: string): void {
    console.log(`I am Phantom ${address}`);
  }

  getNFT(address: string, id: number) {
    console.log(`Get NFT ${id} in ${address}`);
  }
}
