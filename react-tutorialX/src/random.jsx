export function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}