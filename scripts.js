//função principal - vai calcular e mostrar o valor das gorjetas
function calculateTip(event){
  event.preventDefault();
 //selecionando os elementos digitados pelo usuário
  let bill = document.getElementById('bill').value ;
  let serviceQual = document.getElementById('serviceQual').value ;
  let numOfPeople = document.getElementById('people').value ;
  //verificando se os campos foram preenchidos
  if(bill == '' || serviceQual == 0){
      alert("preencha os campos")
      return;
  }
  //mostrando/escondendo o número de pessoas 
  if (numOfPeople == "" || numOfPeople <= 1 ){
      document.getElementById("each").style.display="none"
  }else{
      document.getElementById("each").style.display="block"
  }
  //calculando o valor a ser pago 
  let  total= (bill*serviceQual) / numOfPeople ; 
  total = total.toFixed(2) ;
  document.getElementById('tip').innerHTML = total ;
  document.getElementById('total-tip').style.display ="block"
}
  //mostrando/escondendo o total
  document.getElementById('total-tip').style.display ="none";
  document.getElementById('each').style.display ="none";

  //enviando os dados através do botão
  document.getElementById("tips-form").addEventListener('submit' , calculateTip)
