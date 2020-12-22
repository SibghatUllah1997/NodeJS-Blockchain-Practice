const SHA256 = require('crypto-js/sha256');


class CryptoBlock{
    constructor(index, timestamp, data, currentHash=" "){
     this.index = index; this.timestamp = Date.now(); this.data = data; this.currentHash = currentHash; 
     this.hash = this.computeHash();     
    }
    computeHash(){
        return SHA256(this.index + this.currentHash + this.timestamp + JSON.stringify(this.data)).toString();
    }   
}
class CryptoBlockchain{
    constructor(){
        this.blockchain = [this.startGenesisBlock()];     
    }
    startGenesisBlock(){
        return new CryptoBlock(0, "genesis block", "0");
    }
    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock){ newBlock.currentHash = this.obtainLatestBlock().hash;
         newBlock.hash = newBlock.computeHash(); this.blockchain.push(newBlock);
    }
}
let smashingCoin = new CryptoBlockchain();
smashingCoin.addNewBlock(new CryptoBlock(1, {sender: "Usama", recipient: "Waqas", quantity: 50}));
smashingCoin.addNewBlock(new CryptoBlock(2, {sender: "Sibghat Ullah", recipient: "Ali", quantity: 100}) );
console.log(JSON.stringify(smashingCoin, null, 4));