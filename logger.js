function showLogMessage(msg) { 

    console.log('==============================================')
    console.log(`로그 메세지는 : ${msg}`)
    console.log('==============================================')
}


function showLogMessage2(msg) { 

    console.log('----------------------------------------------')
    console.log(`로그 메세지2는 : ${msg}`)
    console.log('----------------------------------------------')
}


const precious_value = 69

module.exports.showLogMessage = showLogMessage // showLogMessage라는 모듈을 다른 자바 스크립트에서 쓸때 다른 파일에서는 showLogMessage 라는 이름으로 쓰이게 된다.
module.exports.secondLog = showLogMessage2
module.exports.pvalue = precious_value

// node에서는 분리 단위가 파일 단위이다. 이 파일 안에서만 showLogMessage라는 함수를 사용을 할 수 있다.
// 다른 파일에 쓰고 싶다면 모듈로 만들어야 한다. 다른 자바스크립트에서 써도 된다고 지정을 해주면 된다 

// 


