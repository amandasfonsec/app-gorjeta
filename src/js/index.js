function calculateTip(event){
    event.preventDefault();

    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var quantPessoas = document.getElementById('quantPessoas').value;

    if(bill == '' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        return;
    }

    if(quantPessoas == "" | quantPessoas <= 1){
        quantPessoas = 1;
        document.getElementById('each').style.display = "none" ;
    }else{
        document.getElementById('each').style.display = "block" ;
    }

    let total = (bill * serviceQual)/quantPessoas;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block" ;

}

document.getElementById('totalTip').style.display = "none" ;
document.getElementById('each').style.display = "none" ;

document.getElementById('tipsForm').addEventListener('submit', calculateTip);