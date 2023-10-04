words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// newWords = words.filter(element=> element.length > 6);
// newWords와 똑같이 작동하는 myfilter 생성
function myfilter(origin, callback){
  var result = [];
  for(var i=0; i<origin.length; i++) {
    var current = origin[i];
    if (callback(current)) {
      result.push(current);
    } 
  }
  return result;
}
newWords = myfilter(words, element=> element.length > 6);
console.log(newWords);