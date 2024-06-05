function calcular() {
 var anos = document.getElementsByid("anos").value;
var meses = document.getElementsByid("meses").value;
var anos1 = document.getElementsByid("anos1").value;
var meses2 = document.getElementsByid("meses2").value;
var trisal1 = document.getElementsByid("trisal1").value;
var trisal2 = document.getElementsByid("trisal2").value;

if (trisal =!"" && trisal2 != "") {
if (meses !="" && meses >= 6){
anos++
}
if (meses !="" && meses >= 6){
anos1++
}
if (trisal2 !="" && trisal2 >= 6){
anostrial++
}
var trisal3 = podeNamorarTrisal(anos, anos1, trisal1, 1)
var trisal4 = podeNamorarTrisal(anos1, anos, trisal1, 2)
var trisal5 = podeNamorarTrisal(trisal, anos, anos1, 3)
console.log(trisal1, trisal2, trisal3)
if ((trisal3 == true) && (trisal4 == true) && (trisal5 == true)){
alert("Voces podem namora")
} else {
	alert("voces nao podem namorar")
}
} else {
	if (meses !="" && meses >= 6){
}
anos++
	}
	if (meses1 !="" && meses1 >= 6){
anos1++
	}
	var podenamorar1 = podenamorar(anos, anos1, 1)
	var podenamorar2 = podenamorar(anos, anos1, 2)
	if (podenamorar1 == true && podenamorar2 == true){
alert("podem namorar")
	} else {
		alert("voces nao podem namorar")
}
}

function podenamorar(idade, parceiro, numeropretendente){
var min = (idade /2) + 7;
var max = (idade - 7) * 2;
if (min % 2 != 0) {
min = math.floor(min);
}
if (idade <= 13){
alert(`sem namoro amigo${numeropretendente}`)
return false
}
if (idade >= 100){
alert(`ta proibido parceiro${numeropretendente}`)
return false
}

else if (parceiro >= min && parceiro <= max){
return true
}
else {
return false
}
}

function podeNamorarTrisal(idade, parceiro1, parceiro2, numeropretendente){
var min = (idade / 2) + 7;
var max = (idade - 7) * 2;
if (min % 2 != 0){
min = math.floor(min);
}
if (idade <= 13){
alert(`o parceiro ${numeropretendente} pode namorar nao`)
return false
} else
if (idade >= 100) {
alert(`ta proibido parceiro${numeropretendente}`)
return false
}
else if ((parceiro1 >= min && parceiro1 <= max) && (parceiro2 >= min && parceiro2 <= max)){
return true
}
else {
return false
}
}

function buttoncasal() {
document.getElementsByid("trisal6").hidden = true
document.getElementsByid("trisal1").required = false
document.getElementsByid("trisal2").required = false
}
function buttontrisal() {
document.getElementsByid("trisal6").hidden = false
document.getElementsByid("trisal1").required = true
}
