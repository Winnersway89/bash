javascript

import { ethers } from "ethers";

export async function connectWallet() {
    if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();

    localStorage.setItem("walletAddress", address);
    return address;
}

export function disconnectWallet() {
    localStorage.removeItem("walletAddress");
}
