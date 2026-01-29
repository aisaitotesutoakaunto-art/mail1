const API_URL = "https://script.google.com/macros/s/AKfycbwP_vUhLK-WcsQBQvYAebrX13eCwFiw3wqxMERmXf2p0vsvNgQkbpc32w5mFVQL6knm/exec";

document.getElementById("send").addEventListener("click", async () => {
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    const text = await res.text(); // ← json() じゃない
    alert("送信成功");

  } catch (e) {
    console.error(e);
    alert("送信失敗");
  }
});
