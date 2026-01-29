const API_URL = "https://script.google.com/macros/s/AKfycbxjqPQ-fbP_9CpC152XPCOaWewILCN_b-4oEGiBE7gkpvHbIbNj9NdWz6_e8lVYX_7Viw/exec";

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
