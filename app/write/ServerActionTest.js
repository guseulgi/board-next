export default async function ServerActionTest() {
  // Server Action, Next.js 13.4 이후부터 가능

  async function handleSubmit(formData) { // 서버 API 처리, await 해줘야 함.
    'use server';
    console.log(formData)
    console.log(formData.get('title'))
  }
 

  return (
    // action 에 서버용으로 사용할 함수를 넣어준다.
    <form action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </form>
  );
} 