export function postData(title, price) {
   fetch("http://localhost:3000/myData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, price }),
  });
}
