class View{

  getInputPrice(){
    const price = document.getElementById("inputPrice").value;
    if (isNaN(Number(price)) || Number(price) % 1000 !== 0) {
      alert("[ERROR] 숫자가 잘못된 형식입니다.");
      return null;
    }
    else {
      const num = Number(price) / 1000;
      document.getElementById("num").innerHTML = `총 ${num}개를 구매했습니다.`;
      return num;
    }
  }

  printLotto(lottoNumber){
    document.getElementById("lottos").innerHTML += `${lottoNumber}<br>`;
  }

  showInputWinNumber(){
    document.getElementsByClassName("number-form")[0].style.display = 'inline-block';
  }

  inputNumber(){
    const inputWinNumbers = document.getElementsByClassName("winNumber");
    const winNumbers=new Set();
    for(let i=0; i<inputWinNumbers.length; i++){
      var winNumber=Number(inputWinNumbers[i].value);
      if(isNaN(winNumber) || winNumber<0 || winNumber>45) {
        alert("[ERROR] 올바른 숫자를 입력해주세요.");
        return null;
      }else{
        winNumbers.add(winNumber); 
      } 
    }

    const inputBonusNumber=document.getElementById("bonusNumber").value;
    const bonusNumber=Number(inputBonusNumber);
    if(isNaN(bonusNumber) || bonusNumber<0 || bonusNumber>45){
      alert("[ERROR] 올바른 숫자를 입력해주세요.");
      return null;
    }

    if(winNumbers.size!=6 || winNumbers.has(bonusNumber)) {
      alert("[ERROR] 중복된 숫자가 있습니다.");
      return null;
    }
    return {winNumbers, bonusNumber};
  }

  printResult(prize){
    console.log(prize);
    document.getElementsByClassName("result")[0].style.display = 'inline-block';
    document.getElementById("5등").innerHTML = `${prize[5]}개`;
    document.getElementById("4등").innerHTML = `${prize[4]}개`;
    document.getElementById("3등").innerHTML = `${prize[3]}개`;
    document.getElementById("2등").innerHTML = `${prize[2]}개`;
    document.getElementById("1등").innerHTML = `${prize[1]}개`;
  }

  profit(profit){
    document.getElementById("profit").innerHTML = `${profit}`;
  }
}


export default View;