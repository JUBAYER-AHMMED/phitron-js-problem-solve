const sajano =(array)=>{
    
    for(let i = 0; i< array.length; i++){
        for(let j = 0; j < array.length -i -1; j++)
       if(array[j] > array[j+1]){
        let temp  = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
       }
    }
}

const array = [1,3,5,7,9,20,18,16,14,12,10,15,13,17,11,19,8,4,2,6]

sajano(array);
console.log(array)