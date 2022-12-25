const LOCALHOST_URL = "http://localhost:5000/api";

export async function createRequest(optimizeStats) {
  const createUrl = `${LOCALHOST_URL}/optimizer/request/create`;
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
  return await fetch(`${LOCALHOST_URL}/optimizer/request?id=${requestId}`).then(
    (res) => res.json()
  );
}
