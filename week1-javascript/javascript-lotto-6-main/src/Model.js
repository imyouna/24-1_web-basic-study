import Lotto from "./Lotto.js";

class Model{
  constructor(){
    this.n=0; //구입한 로또 개수
    this.lottos=[];
    this.prize={ // key: 등수, value: 개수
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    this.earn=0;
    this.profit=0;
    this.bonusNumber=0;
  }

  purchase(number){
    this.n=number;
    this.makeLotto();
  }

  makeLotto(){
    for(let i=0; i<this.n; i++){
      const lotto=new Lotto();
      this.lottos.push(lotto);
    }
  }

  makeWinLotto(numbers){
    this.winNumber = new Lotto(numbers);
  }

  result(){ // 복권 당첨 결과 계산
    this.lottos.forEach((lotto) => {
      const prize=lotto.getWinNumber(this.winNumber, this.bonusNumber);
      if(prize>0) this.prize[prize]++;
    });
  }

  Profit(){ // 수익률 계산, this.profit 때문에 profit(number) 에러메세지
    this.earn=5*this.prize[5]+50*this.prize[4]+1500*this.prize[3]+30000*this.prize[2]+2000000*this.prize[1];
    this.profit=(this.earn/this.n*100).toFixed(1);
  }

  setBonusNumber(bonusNum){
    this.bonusNumber=bonusNum;
  }

  getLottoNumber(idx){
    return this.lottos[idx].getNumber;
  }
}

export default Model;