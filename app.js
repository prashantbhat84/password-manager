console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();
var crypto = require('crypto-js');

var argv = require('yargs')
	.command('create', 'Create a new account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account username or email',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Account password',
				type: 'string'
			},
			masterpassword:{
				demand: true,
				alias: 'm',
				description: 'master password required for encryption',
				type: 'string'
			}

		}).help('help');
	})
	.command('get', 'Get an existing account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			masterpassword:{
				demand: true,
				alias: 'm',
				description: 'master password required for encryption',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

// create
//     --name
//     --username
//     --password

// get
//     --name

// account.name Facebook
// account.username User12!
// account.password Password123!

function getAccounts(masterpassword) {
	/* get item sunc
	decrypt 
	return accounts array */
	var encAccounts = storage.getItemSync('accounts');
	var accounts = [];
	 if (typeof encAccounts !== 'undefined') {
		var  decAccountsbytes = crypto.AES.decrypt(encAccounts, masterpassword);
	var accounts = JSON.parse(decAccountsbytes.toString(crypto.enc.Utf8));
	} 
	
	return accounts;

              
	
}
function saveAccounts(accounts,masterpassword) {
	/*
	encrypt accounts
	setItemSync --save accounts
	return the accounts array
	*/
	var encAccounts = crypto.AES.encrypt(JSON.stringify(accounts),masterpassword);
	storage.setItemSync('accounts',encAccounts.toString());
	return accounts;
}

function createAccount (account ,masterpassword) {
	/* var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	} */
	var accounts = getAccounts(masterpassword);


	accounts.push(account);
	//storage.setItemSync('accounts', accounts);

	saveAccounts(accounts,masterpassword);
}

function getAccount (accountName, masterpassword) {
	//var accounts = storage.getItemSync('accounts');
	var matchedAccount;
	var accounts = getAccounts(masterpassword);
        getAccounts(masterpassword);
	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

if (command === 'create') {
	try{
		var createdAccount = createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password
		},argv.masterpassword);
		console.log('Account created!');
		
		
	}
	catch(e){
		console.log("unable to create account");
		
	}
	
	
} else if (command === 'get') {
	try{
		var fetchedAccount = getAccount(argv.name,argv.masterpassword);

		if (typeof fetchedAccount === 'undefined') {
			console.log('Account not found');
		} else {
			console.log('Account found!');
			console.log(fetchedAccount);
		}
	}
	catch(e){
                     console.log("unable to fetch accounts");
		 
	}
	
}



















