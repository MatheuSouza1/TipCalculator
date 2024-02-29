function Update(){
    let Bill = Number(document.getElementById("yourBill").value)
    let TipPercentage = Number(document.getElementById("tipInput").value)
    let Split = Number(document.getElementById("splitInput").value)
    let tipEach;
    let billEach;
    
    let Tip = TipPercentage / 100 * Bill
    
    let total = Bill + Tip
    
    if(Split > 1){
        billEach = total / Split
        tipEach = FormatValue(Tip / Split)
    }
    else{
        billEach = total
    }
    
    document.getElementById("tipPercent").innerHTML = TipPercentage + "%"
    document.getElementById("tipValue").innerHTML = FormatValue(Tip)
    document.getElementById("totalWithTip").innerHTML = FormatValue(total)
    document.getElementById("splitValue").innerHTML = Split
    document.getElementById("billEach").innerHTML = FormatValue(billEach)
    document.getElementById("tipEach").innerHTML = tipEach
    
    console.log({Bill, TipPercentage, tipEach})   
}

function FormatValue(value){
    value = value.toFixed(2);
    return "R$" + value;
}