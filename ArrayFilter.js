words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function callback(element){
  console.log(element)
  if(element.length > 6) {
    return true;
  } else {
    return false;
  }
}
newWords = words.filter(callback);
console.log(newWords);