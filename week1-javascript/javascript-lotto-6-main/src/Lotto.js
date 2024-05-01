class Lotto {
  #numbers;

  constructor(numbers=this.pickUniqueNumbersInRange(1,45,6)) { //default로 난수 생성
    this.#validate(numbers);
    numbers.sort((a,b)=> a-b);
    this.#numbers = numbers;

    this.win=0; // 당첨 번호 일치 개수
    this.bonus=0; //보너스 번호 일치 여부
  }

  pickUniqueNumbersInRange(start, end, num){
    const set=new Set();
    while(set.size!=6){
      var n=Math.floor(Math.random()*(end-start+1))+start;
      set.add(n);
    }
    return Array.from(set);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((num)=>{
      if(num<0 || num>45){
        throw new Error("[Error] 로또 번호는 1부터 45의 자연수 입니다.");
      }
    });
    if(numbers.length!=new Set(numbers).size){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }

  // TODO: 추가 기능 구현

  getWinNumber(winNumberLotto, bonusNumber){ // 당첨 등수
    this.win=this.#numbers.filter(n => winNumberLotto.getNumber.includes(n)).length; // 당첨 번호 일치 개수
    this.bonus=this.#numbers.includes(bonusNumber); //보너스 번호 일치 여부
    if(this.win==3) return 5;
    if(this.win==4) return 4;
    if(this.win==5 && this.bonus) return 2;
    if(this.win==5) return 3;
    if(this.win==6) return 1;
    return 0;
  }

  get getNumber(){
    return this.#numbers;
  }

}

export default Lotto;
