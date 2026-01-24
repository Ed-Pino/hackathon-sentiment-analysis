export async function analyzeSentiment(text, lang = "es") {
  const res = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, lang }),
  });

  if (!res.ok) {
    throw new Error("Error analizando sentimiento");
  }

  return await res.json();
}
