const API_URL = "https://YOUR_TUNNEL_URL_HERE/api/phi3";

document.getElementById("sendBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;

  document.getElementById("output").innerText = "Thinking...";

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    document.getElementById("output").innerText =
      data.response || JSON.stringify(data, null, 2);

  } catch (err) {
    document.getElementById("output").innerText =
      "Error: Could not reach backend.\n" + err;
  }
});
