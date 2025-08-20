var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const boronaamCheck=(friends)=>{
    let boronaam = friends[0];
    for(let i = 1 ; i<friends.length ; i++){
        if(friends[i].length > boronaam.length){
            boronaam = friends[i];
        }
    }

    return boronaam;
}

const bigname = boronaamCheck(friends);
console.log(bigname);