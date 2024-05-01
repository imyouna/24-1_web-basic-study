import Model from "./Model.js";
import View from "./View.js";

const model = new Model();
const view=new View();

const button=document.getElementById("button");

button.addEventListener('click', function(event){
    const num = view.getInputPrice();
    
    if(num!=null){
      model.purchase(num);

      //console.log(model.lottos.length);
      model.lottos.forEach((lotto, idx)=>{
        //console.log(idx);
        view.printLotto(model.getLottoNumber(idx));
      });
      view.showInputWinNumber();
    }
});

const resultButton=document.getElementById("resultButton");

resultButton.addEventListener('click', function(event){
  const {winNumbers, bonusNumber}=view.inputNumber(); //winNumebrs는 set()
  //console.log(winNumbers);
  //console.log(bonusNumber);
  if(winNumbers!=null && bonusNumber!=null){
    const winNumber=Array.from(winNumbers);
    model.makeWinLotto(winNumber);
    model.setBonusNumber(bonusNumber);

    model.result();
    model.Profit();

    view.printResult(model.prize);
    view.profit(model.profit);
  }
});

const restartButton=document.getElementById("restart");

restartButton.addEventListener('click', function(event){
  location.reload();
})