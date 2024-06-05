function calcular() {
var anivesario1 = document.getElementsByid("anivesario1").value;
var mês1 = document.getElementsByid("mês1").value;
var anivesario2 = document.getElementsByid("anivesario2").value;
var mês2 = document.getElementsByid("mês2").value;
var trissal = document.getElementsByid("trissal").value;
var trisssal = document.getElementsByid("trisssal").value;

if (trissal =!"" && trisssal2 != "") {
if (mês1 !="" && mês1 >= 6){
	anivesario1++
}
if (mês1 !="" && mês1 >= 6){
	anivesario2++
}
if (trisssal2 !="" && trisssal2 >= 6){
trissal++
}
var trisal1 = permitoNamoro(anivesario1, anivesario2, trissal, 1)
var trisal2 = permitoNamoro(anivesario2, anivesario1, trisssal, 2)
var trisal3 = permitoNamoro(trissal, anivesario1, anivesario2, 3)
console.log(trisal1, trisal2, trisal3)
if ((trisal3 == true) && (trisal4 == true) && (trisal5 == true)){
alert("Permito o Namoro")
} else {
alert("Nâo Permito o Namoro ")
}
} else {
	if (mês1 !="" && mês1 >= 6){
}
anivesario1++
}
if (mês2 !="" && mês2 >= 6){
	anivesario2++
	}
	var namorar1 = namorar(anos, anos1, 1)
	var namorar2 = namorar(anos, anos1, 2)
	if (namorar1 == true && namorar2 == true){
alert("Parabens Podem Namora")
	} else {
		alert("Nâo Podem namorar")
}
}

function namorar(idade, parceiro, pretendente){
var min = (idade /2) + 7;
var max = (idade - 7) * 2;
if (min % 2 != 0) {
min = math.floor(min);
}
if (idade <= 13){
alert(`Espere Mais Alguns Anos ${pretendente}`)
return false
}
if (idade >= 100){
alert(`Voçê Não Pode Namora Por causa da Lei ${pretendente}`)
return false
}

else if (parceiro >= min && parceiro <= max){
return true
}
else {
return false
}
}

function NamorarTrisal(idade, parceiro1, parceiro2, pretendente){
var min = (idade / 2) + 7;
var max = (idade - 7) * 2;
if (min % 2 != 0){
min = math.floor(min);
}
if (idade <= 13){
alert(`Espere Mais Alguns Anos ${pretendente}`)
return false
} else
if (idade >= 100) {
alert(`Voçê Não Pode Namora Por causa da Lei ${numeropretendente}`)
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
document.getElementsByid("trissssal").hidden = true
document.getElementsByid("trissal").required = false
document.getElementsByid("trisssal").required = false
}
function buttontrisal() {
document.getElementsByid("trisal6").hidden = false
document.getElementsByid("trissal").required = true
}
