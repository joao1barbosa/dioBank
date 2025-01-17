import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if(this.validateStatus() && this.checkValue(value)){
        this.addBalance(value);
        console.log('Voce pegou um empréstimo!');
    }
  }
}
