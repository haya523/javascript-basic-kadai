//ボタン要素取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click",() => {
 text.textContent = "ボタンをクリックしました";   
});
