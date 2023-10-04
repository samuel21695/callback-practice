// first() 함수 다음에 second()함수 실행하고 싶으면?
function first(second){
  console.log(1)
  second()
}

function second(){
  console.log(2)
}

first(second)
// first() 실행해주셈 파라미터로 second 넣어서