import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { BonusAccount } from './class/BonusAcoount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
companyAccount.deposit(100);
console.log(companyAccount);
companyAccount.getLoan(300);
console.log(companyAccount);

const bonusAccount: BonusAccount = new BonusAccount('João', 30);
console.log(bonusAccount);
bonusAccount.deposit(100);
console.log(bonusAccount);
