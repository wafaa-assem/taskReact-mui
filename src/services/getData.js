export async function getData(){
  const response = await fetch("http://localhost:3000/myData");
  const finalResponse = await response.json();
//   console.log(finalResponse);
  return finalResponse ;
 
  
}