function theBeatlesPlay (musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push ('${musicians[i]} plays ${instruments[i]}.')
  }
  return array
}

function johnLennonFacts(facts) {
  var count = 0;
  var array = []
  while (count < facts.length){
    array.push (`${facts}!!!`)
    count++
  }
  return array
}

// function iLoveTheBeatles(number){
//  var array = []
//   do{
//     array.push (`I love the Beatles!`)
//   } while (array.length < 15){
//     array.push (`I love the Beatles!`)
//   }
//   return array
// }
