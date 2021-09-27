
const distanceFromHqInBlocks = function distanceFromHqInBlocks (someValue1) {
    if (someValue1 > 42){
        return someValue1 - 42;
    } else {
        return 42 - someValue1;
    }
};
function distanceFromHqInFeet(someValue1) {
    return distanceFromHqInBlocks(someValue1) * 264;
};
function distanceTravelledInFeet(start, destination) {
    if (start < destination){
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
};

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
      return 0;
    } else if (distance > 400 && distance <= 2000){
      return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500){
      return 25;
    } else {
      return 'cannot travel that far';
    }   
}