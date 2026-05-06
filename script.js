// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// あなたのFirebase設定
const firebaseConfig = {
    apiKey: "AIzaSyAAAC-bgueoOmHMsafjV42qy6hiyAlVicU",
    authDomain: "sample-cc5f9.firebaseapp.com",
    projectId: "sample-cc5f9"
};

// 初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ボタン取得
const btn = document.getElementById("detailBtn");

// クリックイベント
btn.addEventListener("click", async () => {
    try {
        await addDoc(collection(db, "clickLogs"), {
            clickedAt: serverTimestamp()
        });
        console.log("記録成功");
    } catch (e) {
        console.error("エラー:", e);
    }
});