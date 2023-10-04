words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// parameter 하나일 경우 괄호 필요 x
newWords = words.filter(element=>{
  return element.length > 6;
});
console.log(newWords);