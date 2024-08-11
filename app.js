
// 모듈에 대한 공부

//
// Module. logger.js >> showLogMessage
// logger.js 불러오기 

//모듈 시스템.

const logger = require('./logger.js')

logger.showLogMessage('첫번째 로그메세지')
logger.secondLog('두번째 로그 메세지')
console.log('Logger 모듈에 들어있는 소중한 값은: '+logger.pvalue)


// Module 
// 함수들의 집합, 라이브러리. 남들이 짜놓은 라이브러리를 찾아서 활용을 하는 것.



// // 3초에 한번 씩 주기적으로 생성
// setInterval(() => {
//     console.log("Node.js studying now")
// }, 3000); 


// // 3초 뒤에 한번만 생성.
// setTimeout(() => {
//     console.log("타임아웃! 그만!")
// }, 3000)


// 3초 있다가 출력 그 다음번에도 3초 있다가 반복해서 출력이 된다. 
// 어떤 주기적으로 돌아가는 프로그램을 짤때 node.js처럼 짜면 쉽게 짤 수 있다. 


// 함수 
// function sayHello(name) {
//     console.log("hello" +name)
// }

// sayHello('john')
// sayHello('Alice')

// const v = 4
// if (v > 5) {
//     console.log("큰 숫자 입니다")
// }

// else {
//     console.log("작은 숫자 입니다.")
// }