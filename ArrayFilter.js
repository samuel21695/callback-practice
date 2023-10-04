words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function callback(element){
  return element.length > 6;
}
newWords = words.filter(callback);
console.log(newWords);