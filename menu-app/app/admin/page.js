"use client";
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btnText, setBtnText] = useState("Masuk ke Sistem");
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  async function handleLogin() {
    if (!email || !password) {
      setError("Email dan password tidak boleh kosong!");
      return;
    }
    try {
      setBtnText("Memproses...");
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (err) {
      setBtnText("Masuk ke Sistem");
      if (err.code === "auth/invalid-credential") {
        setError("Email atau password salah.");
      } else {
        setError("Gagal: " + err.message);
      }
    }
  }

  async function handleLogout() {
    await signOut(auth);
  }

  if (loading) return <div style={{ color: "#fff", padding: "2rem" }}>Memuat...</div>;

  if (!user) {
    return (
      <div className="login-overlay">
        <div className="login-box">
          <h2>LUMINA <span>Admin</span></h2>
          <p>Silakan login untuk mengakses sistem.</p>
          <input
            className="login-input"
            type="email"
            placeholder="Email Admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login" onClick={handleLogin}>{btnText}</button>
          {error && <p className="login-error">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>LUMINA. <span>Admin</span></h2>
        </div>
        <ul className="nav-menu">
          {["dashboard", "menu", "orders", "settings"].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="main-content">
        <header className="topbar">
          <span>Admin: <b>{user.email}</b></span>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </header>

        <div className="content-area">
          {activeTab === "dashboard" && (
            <div className={`tab-pane active`}>
              <h1 style={{ color: "#333" }}>Dashboard Overview</h1>
              <p style={{ color: "#666", marginTop: "0.5rem" }}>Selamat datang di sistem manajemen Lumina.</p>
            </div>
          )}
          {activeTab === "menu" && (
            <div className={`tab-pane active`}>
              <div className="section-header">
                <h1>Daftar Menu</h1>
                <button className="btn-add">+ Tambah Menu Baru</button>
              </div>
              <table className="data-table">
                <thead>
                  <tr><th>Nama Menu</th><th>Harga</th><th>Aksi</th></tr>
                </thead>
                <tbody>
                  <tr><td colSpan={3} style={{ color: "#666" }}>TODO: connect Firestore</td></tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "orders" && (
            <div className={`tab-pane active`}><h1>Pesanan Masuk</h1></div>
          )}
          {activeTab === "settings" && (
            <div className={`tab-pane active`}><h1>Pengaturan</h1></div>
          )}
        </div>
      </main>
    </div>
  );
}
