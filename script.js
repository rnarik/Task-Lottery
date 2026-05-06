// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 設定
const firebaseConfig = {
    apiKey: "AIzaSyAAAC-bgueoOmHMsafjV42qy6hiyAlVicU",
    authDomain: "sample-cc5f9.firebaseapp.com",
    projectId: "sample-cc5f9"
};

// 初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// データ送信テスト
async function sendData() {
  await addDoc(collection(db, "test"), {
    message: "Hello Firebase!"
  });
  console.log("送信成功");
}

sendData();
