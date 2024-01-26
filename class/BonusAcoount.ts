import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && this.checkValue(value)){
        this.addBalance(value + 10);
        console.log('Você depositou!');
    }
  }
}
