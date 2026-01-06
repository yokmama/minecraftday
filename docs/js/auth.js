// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyAksv9tL_tjHauhqAq6Rg6KyLlrgfii3IM",
  authDomain: "minecraftday-c82ea.firebaseapp.com",
  projectId: "minecraftday-c82ea",
  storageBucket: "minecraftday-c82ea.firebasestorage.app",
  messagingSenderId: "551225749516",
  appId: "1:551225749516:web:d0272607fa466ec825fe29",
  measurementId: "G-6LN3CBG5WD"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// ログイン状態の監視
auth.onAuthStateChanged(function(user) {
  updateUI(user);
});

// Googleでログイン
function signInWithGoogle() {
  auth.signInWithPopup(provider)
    .then(function(result) {
      console.log('ログイン成功:', result.user.email);
    })
    .catch(function(error) {
      console.error('ログインエラー:', error);
      alert('ログインに失敗しました: ' + error.message);
    });
}

// ログアウト
function signOut() {
  auth.signOut()
    .then(function() {
      console.log('ログアウト成功');
    })
    .catch(function(error) {
      console.error('ログアウトエラー:', error);
    });
}

// UI更新
function updateUI(user) {
  var loginSection = document.getElementById('login-section');
  var memberSection = document.getElementById('member-section');
  var userInfo = document.getElementById('user-info');

  if (user) {
    // ログイン中
    if (loginSection) loginSection.style.display = 'none';
    if (memberSection) memberSection.style.display = 'block';
    if (userInfo) userInfo.textContent = user.email;
  } else {
    // 未ログイン
    if (loginSection) loginSection.style.display = 'block';
    if (memberSection) memberSection.style.display = 'none';
    if (userInfo) userInfo.textContent = '';
  }
}
