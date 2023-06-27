
export default async function handler(request, response) {
  
  console.log(request.query);
  
  if(request.method == 'GET') {
    return response.status(200).json(new Date());
  } else if(request.method == 'POST') {
    return response.status(200).json('처리 완료');
  }
}