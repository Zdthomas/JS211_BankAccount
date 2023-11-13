class BankAccount {

    constructor(accountNumber, owner) {

        this.accountNumber = accountNumber;

        this.owner = owner;

        this.transactions = [];
    }

    balance() {

        let sum = 0

        for (let i = 0; i < this.transactions; i++) {

            sum = this.transactions[i].amount
        } 
        
        return sum
    }

    charge(payee, amt) {

        let currentBalance = this.balance

        if (amt > currentBalance){

        } else{

            let chargeTransaction = new Transactions (-amt, payee);

            this.transactions.push(chargeTransaction);

        }

    }

    deposit(amt) {

        if (amt > 0) {

            let depositTransaction = new Transactions(amt, '');

            this.transactions.push(depositTransaction);

        }

    }
}



class Transactions {

    constructor(amount, payee) {

        this.amount = amount;

        this.payee = payee;

        this.date = new Date();

    }
}


const account1 = new BankAccount('1245', 'John Doe');

account1.balance();

account1.deposit(750);

account1.balance()

account1.charge('8899', -350);

account1.balance();

console.log(account1)

// Not getting the final balance?