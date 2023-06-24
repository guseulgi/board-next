import {connectDB} from '/utils/database.js'

export default async function Home() {

  console.log(connectDB);
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray(); //컬렉션의 모든 Document 가져오기
  console.log(result);

  return (
    <main >
      <div>
        메인 페이지
      </div>
    </main>
  )
}
