function Blockchain(){
	this.chain=[];
	this.newTransactions=[];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.newTransactions,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash
	};

	//this.pendingTransactions = [];
	this.chain.push(newBlock);

	return newBlock;
};

Blockchain.prototype.createNewTransaction=function(amount,sender, recipient){
		const newTransaction = {
			amount: amount,
			sender: sender,
			recipient: recipient,
			
		};
		
this.newTransactions.push(newTransaction);
return newTransaction;

};
/*
Blockchain.prototype.getLastBlock = function() {
	return this.chain[this.chain.length - 1];
};*/

module.exports=Blockchain;