const API_URL = "https://script.google.com/macros/s/AKfycbwP_vUhLK-WcsQBQvYAebrX13eCwFiw3wqxMERmXf2p0vsvNgQkbpc32w5mFVQL6knm/exec";

document.getElementById("send").addEventListener("click", async () => {
  // フォームの値を取得
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.message);

  } catch (error) {
    alert("送信に失敗しました");
    console.error(error);
  }
});
