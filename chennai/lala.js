function Blockchain(){
	this.chain=[];
	this.newTransactions=[];
}
{
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash)
 {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.newTransactions,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash };
		
};

const newTransaction = {
		
		amount: amount,
		sender: sender,
		recipient: recipient,
		
	};
Blockchain.prototype.createNewTransaction = function(amount,sender, recipient){

	//this.pendingTransactions = [];
	this.chain.push(newBlock);
	return newBlock;
	this.newTransactions.push(newTransaction);
	return newTransaction;
	};

//Blockchain.prototype.createNewTransaction=function(amount,sender, recipient){
			
//		};
		


/*
Blockchain.prototype.getLastBlock = function() {
	return this.chain[this.chain.length - 1];
};*/

module.exports=Blockchain;