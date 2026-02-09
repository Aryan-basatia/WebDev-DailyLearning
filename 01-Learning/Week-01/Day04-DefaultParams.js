// function rollDie(numSides){
//     return Math.floor(Math.random()*numSides) + 1;
// }
// rollDie(5);

function rollDie(numSides = 6){
    console.log(Math.floor(Math.random()*numSides) + 1);
}
rollDie(5);
rollDie();
