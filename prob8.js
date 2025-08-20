var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const boroNumber = (array)=>{
    let boro = array[0];
    for(let i = 1; i < array.length ; i++){
        if (array[i] > boro){
            boro = array[i];
        }
    }
    return boro;
}

console.log(`Boro Number ${boroNumber(numbers)}`);