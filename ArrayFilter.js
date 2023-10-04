words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// arrow function (function 쓸 필요 X)
newWords = words.filter((element)=>{
  return element.length > 6;
});
console.log(newWords);