function monthlySavings(array, livingCost){
    let savings = 0;
    if(!Array.isArray(array) || typeof(livingCost) != 'number'){
        return 'invalid input';
    }
    for(let i = 0; i <array.length ; i++){
        if(array[i] >= 3000){
            savings = savings + (array[i] - array[i]*.2 );
        }else{
            savings += array[i];
        }
    }
    savings = savings - livingCost;

    if(savings<0){
        return "earn more";
    }else{
        return savings;
    }
}

let result = monthlySavings(100,[900,2700,3400]);

console.log(result);