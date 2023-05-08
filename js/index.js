
let inputArea = document.getElementById('deFault');
// let = dig = Number(inputArea.value)
// let cal = inputArea.value
let dig
function show(a){
    inputArea.value  += a;
    dig = inputArea.value;
    // console.log(dig)
}

    let calculat = document.getElementById('numEquals').addEventListener("click", function(){
        let calu = eval(dig);
        inputArea.value = calu;
    })

// let cal = show()
function clear(){
    let iput = inputArea.value 
    iput--
}

function clearAllinput() {
    var getValue = document.getElementById('deFault');
    if (getValue.value != "") {
        getValue.value = "";
    }
}
let clearOne = document.getElementById("numTimes").addEventListener('click', function(){
    let phone = document.getElementById("deFault").value;
    console.log(phone)
    var inputRemove = phone.slice(0,5)
    alert(`${phone}`.slice(0,3))
})






