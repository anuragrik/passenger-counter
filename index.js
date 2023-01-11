let count=0;
document.getElementById("count-sec").innerText=count
function increment(){
    count++
    document.getElementById("count-sec").innerText=count
}
function save(){
    document.getElementById("log-hist").innerText+=count+"-"
    count=0
    document.getElementById("count-sec").innerText= 0
}
