let str = "Однажды играли в карты у конногвардейца Нарумова. Долгая зимняя ночь прошла незаметно; сели ужинать в пятом часу утра. Те, которые остались в выигрыше, ели с большим аппетитом; прочие, в рассеянности, сидели перед пустыми своими приборами. Но шампанское явилось, разговор оживился, и все приняли в нем участие.Что ты сделал, Сурин? — спросил хозяин.Проиграл, по обыкновению. Надобно признаться, что я несчастлив: играю мирандолем, никогда не горячусь, ничем меня с толку не собьешь, а всё проигрываюсь!И ты ни разу не соблазнился? ни разу не поставил на руте?.. Твердость твоя для меня удивительна. каков Германн! — сказал один из гостей, указывая на молодого инженера,— отроду не брал он карты в руки, отроду не загнул ни одного пароли, а до пяти часов сидит с нами и смотрит на нашу игру";
let arr = str.split('а');
console.log(arr);

let a = +prompt('сколько букв "a"')
if(a==54){
    alert('True');
}else if(a!==54){
    alert('false');
}