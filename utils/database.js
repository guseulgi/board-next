import { MongoClient } from "mongodb"

const url = process.env.REACT_APP_MONGODB;
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') { // 개발 상태일 땐 global 전역 변수에 저장해서 쓸데없는 connect 가 일어나지 않게 해주기.
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else { // 실제 프로덕션에선 global 사용을 지양하므로 이렇게 써준 것.
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }