import { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    // === 1. Logika Tab Dashboard ===
    const navItems = document.querySelectorAll('.nav-menu li');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById('tab-' + item.getAttribute('data-tab')).classList.add('active');
        });
    });

    // === 2. Logika Firebase Authentication ===
    const loginOverlay = document.getElementById('loginOverlay');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const emailInput = document.getElementById('adminEmail');
    const passInput = document.getElementById('adminPassword');
    const btnLogin = document.getElementById('btnLogin');
    const loginError = document.getElementById('loginError');
    const btnLogout = document.getElementById('btnLogout');
    const userEmailDisplay = document.getElementById('userEmailDisplay');

    // Cek apakah Admin sudah login atau belum setiap kali halaman dibuka
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Jika punya "Kunci Akses" (Berhasil Login)
            loginOverlay.classList.add('hidden');
            dashboardContainer.style.display = 'flex';
            userEmailDisplay.innerHTML = `Admin: <b>${user.email}</b>`;
        } else {
            // Jika belum login, tampilkan layar gembok
            loginOverlay.classList.remove('hidden');
            dashboardContainer.style.display = 'none';
        }
    });

    // Proses klik tombol Login
    btnLogin.addEventListener('click', async () => {
        const email = emailInput.value;
        const password = passInput.value;
        
        if(!email || !password) {
            loginError.innerText = "Email dan password tidak boleh kosong!";
            loginError.style.display = "block";
            return;
        }

        try {
            btnLogin.innerText = "Memproses...";
            // Fungsi sakti Firebase untuk cek email & password ke server
            await signInWithEmailAndPassword(auth, email, password);
            btnLogin.innerText = "Masuk ke Sistem";
            loginError.style.display = "none";
        } catch (error) {
            btnLogin.innerText = "Masuk ke Sistem";
            // Tampilkan pesan error bahasa manusia
            if(error.code === 'auth/invalid-credential') {
                loginError.innerText = "Email atau password salah. Cek Firebase Console lu!";
            } else {
                loginError.innerText = "Gagal: " + error.message;
            }
            loginError.style.display = "block";
        }
    });

    // Proses Logout
    if(btnLogout) {
        btnLogout.addEventListener('click', async () => {
            await signOut(auth);
            alert("Berhasil keluar dari sistem.");
            // onAuthStateChanged akan otomatis menyembunyikan dashboard lagi!
        });
    }

    // Mockup Tombol Add Menu
    const btnAdd = document.querySelector('.btn-add');
    if(btnAdd) {
        btnAdd.addEventListener('click', () => {
            alert('Fitur Tambah Menu ke Firestore akan kita aktifkan di pelajaran selanjutnya!');
        });
    }
});
