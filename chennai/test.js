const sha256 = require('sha256');
const Blockchain = require('./blockchain');
var bitcoin = new Blockchain();
bitcoin.createNewBlock(9374598734,'ja234wqa9283dasdg43si456607234dxcv','lsirhfssd');
bitcoin.createNewTransaction(1000000000,'sundar','pichai');

	const newTransaction = {
		amount: 23984,
		sender: 'aslkhd3w984723hkjelh3982h',
		recipient: 'asdi72e97dhia8sy',
	//	transactionId: uuid().split('-').join('')
	};

bitcoin.proofOfWork('asdadsgw342334sfzsdf',newTransaction);

console.log(bitcoin);
