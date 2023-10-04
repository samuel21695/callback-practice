// first() 함수 다음에 second()함수 실행하고 싶으면?

// 아래와 같이 할 수도 있는데 callback함수를 이용하는 이유는 뭘까
// first()
// second()

function first(callback){
  console.log(1)
  callback()
}

function second(){
  console.log(2)
}

first(second)
// first() 실행해주셈 파라미터로 second 넣어서