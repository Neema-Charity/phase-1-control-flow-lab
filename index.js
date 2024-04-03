function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
  if (distanceInFeet <= 400){
    return 'This one is on me!'
  } else if (distanceInFeet>400 && distanceInFeet<2000){
    return 'That will be twenty bucks.'
  } else if (distanceInFeet>2000 && distanceInFeet<=2500){
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city != 'NYC'){
    return 'No go.';
  } else {
    return "Ok, sounds good."

  }
  
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'

    
  }
}