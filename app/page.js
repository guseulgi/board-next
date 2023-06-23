import {clientDB} from '../utils/database'

export default function Home() {

  const db = clientDB.db('forum');

  return (
    <main >
      <div>
        메인 페이지
      </div>
    </main>
  )
}
