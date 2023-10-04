words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// 익명함수 (callback 사용할 필요가 x)
newWords = words.filter(function(element){
  return element.length > 6;
});
console.log(newWords);