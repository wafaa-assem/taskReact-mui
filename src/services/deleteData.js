export function deleteData(id,fetchData) {
  fetch(`http://localhost:3000/myData/${id}`, {
    method: "DELETE",
  }).then(()=>{
    fetchData();
  })
}
