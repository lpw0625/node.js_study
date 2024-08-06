/* var figlet = require("figlet");

figlet("This is lpw's World", function (err, data) {
 if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
}); */


const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) // 어디서 요청을 받는건 거절을 하겠다는 조건 설정도 가능.

app.get('/', (req, res) => {
res.send('Hello World!')
})

/*app.get('/dog', (req, res) => {
res.json({'sound' : '멍멍'})
})*/

app.get('/user/:id', (req, res) => {
  const p = req.params
  console.log(p.id)
  const q = req.query
  console.log(q)
  console.log(q.name)

  res.json({'userid': q.name})
  })
  

  // id라는 변수 이름으로 어떠한 값을 받을 수 있다. 

// 실습 간단한 동물소리 api 서버 만들기 

app.get('/sound/:name', (req, res) => {
  const {name} = req.params
  // {} => Key값.
  if(name == "dog") {
    res.json({'sound' : '멍멍'})
  } else if(name == "cat") {
    res.json({'sound' : '야옹'})
  } else if(name == "Kane") {
    res.json({'sound' : '춘잣!'})
  } else {
    res.json({'sound': '알 수 없음'})
  }
  console.log(name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})