export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value: number): void => {
    if(this.validateStatus() && this.checkValue(value)){
      this.balance += value;
      console.log('Você depositou!');
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.checkValue(value) && (this.balance >= value)){
      this.balance -= value;
      console.log('Voce sacou!');

      return;
    }
    
    throw new Error('Saldo insuficiente');
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected addBalance = (value: number): void => {
    this.balance += value;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }

  protected checkValue = (value: number): boolean => {
    if (value > 0){
      return true;
    }

    throw new Error('Valor inserido é inválido');
  }
}
