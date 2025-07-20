import { collection, addDoc } from
  "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { db } from "./firebase.js";

const pidInput = document.querySelector("#pid");
const startBtn = document.querySelector("#start");
const gameDiv = document.querySelector("#game");
const doors = document.querySelectorAll(".door");

let prize = null;

startBtn.onclick = () => {
  if (!pidInput.value.trim()) {
    alert("被験者番号を入力してね！");
    return;
  }
  prize = Math.floor(Math.random() * 3);
  gameDiv.hidden = false;
};

doors.forEach((btn, i) => {
  btn.onclick = async () => {
    if (prize === null) return;
    const hit = (i === prize);
    alert(hit ? "当たり！" : "ハズレ…");

    await addDoc(collection(db, "trials"), {
      pid: pidInput.value.trim(),
      choice: i,
      prize: prize,
      hit: hit,
      ts: Date.now()
    });

    doors.forEach(d => d.disabled = true);   // 連打防止
  };
});
