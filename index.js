function scuberGreetingForFeet(distance) {
  let ride
  if (distance <= 400){
    ride = distance
    return 'This one is on me!'
  }
  else if (distance < 2500){
    ride = distance;
    return 'I will gladly take your thirty bucks.'
  }
  else return 'No can do.'
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}