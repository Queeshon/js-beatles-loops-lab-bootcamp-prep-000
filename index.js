function theBeatlesPlay (musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var count = 0;
  var array = []
  while (count < facts.length){
    array.push (`${facts[count]}!!!`)
    count++
  }
  return array
}

function iLoveTheBeatles(number){
  var goalNumber = 0
 var array = []
  do{
    array.push (`I love the Beatles!`)
    goalNumber++
  } while (goalNumber < number)
  return array
}
