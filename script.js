// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 設定
const firebaseConfig = {
    apiKey: "AIzaSyAAAC-bgueoOmHMsafjV42qy6hiyAlVicU",
    authDomain: "sample-cc5f9.firebaseapp.com",
    projectId: "sample-cc5f9"
};

// 初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let num = 0;

// Googleプロバイダ
const provider = new GoogleAuthProvider();

// 要素取得
const loginBtn = document.getElementById("loginBtn");
const detailBtn = document.getElementById("detailBtn");

let currentUser = null;

// ログイン状態監視
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    console.log("ログイン状態:", user);
});

// ログイン処理
loginBtn.addEventListener("click", async () => {
    try {
        await signInWithPopup(auth, provider);
        alert("ログイン成功");
    } catch (e) {
        console.error(e);
    }
});

// ボタンクリック → Firestore書き込み
detailBtn.addEventListener("click", async () => {
    if (!currentUser) {
        alert("ログインしてください");
        return;
    }

    try {
        await addDoc(collection(db, "clickLogs"), {
            uid: currentUser.uid,
            clickedAt: serverTimestamp()
        });
        num += 1;
        alert("記録しました" + num);
    } catch (e) {
        console.error(e);
    }
});
