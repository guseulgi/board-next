import {connectDB} from '/utils/database.js'

export default async function Home() {

  console.log(connectDB);
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray(); //컬렉션의 모든 Document 가져오기

  return (
    <main >
      <h2>
        메인 페이지
      </h2>
    </main>
  )
}
