const API_URL = "http://localhost:5000/api";
// const API_URL = "https://katsudon-optimizer-server.herokuapp.com/api";


export async function createRequest(optimizeStats) {
  const createUrl = `${API_URL}/optimizer/request/create`;
  const response = await fetch(createUrl, {
    method: "POST",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(optimizeStats),
  });

  return response.json();
}

export async function fetchRequest(requestId) {
  return await fetch(`${API_URL}/optimizer/request?id=${requestId}`).then(
    (res) => res.json()
  );
}
