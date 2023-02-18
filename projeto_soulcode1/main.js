let productName="Celular", productPrice=3000, productDiscount=300, isDiscount = true, finalPrice=0;

if(isDiscount == true){
    finalPrice = productPrice - productDiscount;
    console.log(`Parabéns! Agora o produto custa: R$ ${finalPrice},00`);
}else{
    console.log(`Uma pena, o produto continua: ${finalPrice}`);
}

let clientArray = [10,2,1,30,5], finalArr = [], fullMoney = 0, control = 1;

clientArray.forEach((x)=>{
    productPrice -= 50;
    finalArr.push(x * productPrice);
})

finalArr.forEach((x)=>{   
    fullMoney += x;
    console.log(`O cliente ${control} deverá pagar R$ ${x},00`)
    control++;
})

console.log(`O total de lucro é de R$ ${fullMoney},00`);

