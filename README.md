# Catatan Belanja 📝🛒

Aplikasi web untuk mencatat dan mengelola daftar belanja Anda dengan antarmuka yang sederhana dan responsif.

---

## 📋 Penjelasan

**Catatan Belanja** adalah aplikasi web yang dirancang untuk membantu Anda mengelola daftar belanja dengan mudah. Aplikasi ini memungkinkan Anda untuk:

- ➕ Menambahkan item belanja baru
- ✏️ Mengedit item yang sudah ada
- ❌ Menghapus item dari daftar
- ✓ Menandai item sebagai selesai/dibeli
- 💾 Menyimpan daftar belanja (persistent storage)
- 📱 Akses dari berbagai perangkat dengan desain responsif

Aplikasi ini dibangun dengan teknologi modern:
- **Frontend**: JavaScript (74.5%), HTML (3.1%), CSS (22.4%)
- **Backend**: Node.js/Express (untuk API)
- **Database**: Disesuaikan dengan konfigurasi lokal Anda

---

## 📁 Struktur Folder/Directory

```
catatan-belanja/
├── frontend/                      # Direktori aplikasi Frontend
│   ├── index.html                 # File HTML utama
│   ├── css/                       # Folder stylesheet
│   │   └── style.css              # Styling aplikasi
│   ├── js/                        # Folder JavaScript
│   │   ├── app.js                 # File utama aplikasi
│   │   ├── api.js                 # Helper untuk API calls
│   │   └── utils.js               # Fungsi utility
│   └── assets/                    # Folder aset (gambar, font, dll)
│
├── backend/                       # Direktori aplikasi Backend
│   ├── server.js                  # File server utama
│   ├── config/                    # Konfigurasi aplikasi
│   ├── routes/                    # Route/endpoint API
│   ├── controllers/               # Controller logic
│   ├── models/                    # Model database
│   ├── middleware/                # Custom middleware
│   └── package.json               # Dependencies Backend
│
├── README.md                      # File dokumentasi ini
├── .gitignore                     # File untuk mengabaikan file tertentu
└── package.json                   # Dependencies Frontend (jika menggunakan bundler)
```

**Penjelasan Struktur:**
- **frontend/**: Berisi semua file yang berjalan di browser pengguna (HTML, CSS, JavaScript)
- **backend/**: Berisi server API yang menangani logika bisnis dan database
- **css/**: Stylesheet untuk styling aplikasi
- **js/**: Logika JavaScript untuk interaktivitas
- **routes/**: Definisi endpoint API (GET, POST, PUT, DELETE)
- **controllers/**: Fungsi yang menangani request dari client
- **models/**: Struktur data dan interaksi dengan database

---

## 🚀 Cara Kontribusi

### Prerequisites (Prasyarat)
Pastikan Anda telah menginstall:
- **Node.js** (v14 atau lebih baru) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **npm** (biasanya sudah terinstall dengan Node.js)

---

### 1️⃣ Clone Repository

```bash
# Clone repository dari GitHub
git clone https://github.com/Mhmd7uLL/catatan-belanja.git

# Masuk ke direktori project
cd catatan-belanja
```

---

### 2️⃣ Setup & Jalankan Backend Server

```bash
# Masuk ke direktori backend
cd backend

# Install dependencies
npm install

# Jalankan backend server
npm start
# atau jika menggunakan nodemon:
npm run dev

# Backend akan berjalan di: http://localhost:5000 (atau port yang dikonfigurasi)
```

---

### 3️⃣ Setup & Jalankan Frontend Server

```bash
# Buka terminal baru, masuk ke direktori project root
cd catatan-belanja

# Masuk ke direktori frontend
cd frontend

# Jika menggunakan bundler (webpack, vite, dll):
npm install
npm run dev

# Jika tanpa bundler:
# Cukup buka file index.html dengan live server atau server sederhana
# Opsi 1: Menggunakan Live Server (VS Code extension)
# Opsi 2: Menggunakan Python (jika tersedia)
python -m http.server 8000

# Frontend dapat diakses di: http://localhost:3000 atau http://localhost:8000
```

---

### 4️⃣ Konfigurasi API Endpoint (Jika Diperlukan)

Edit file `frontend/js/api.js` atau `frontend/js/app.js` untuk memastikan endpoint API mengarah ke backend yang benar:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

---

### 5️⃣ Mulai Berkontribusi

1. **Buat branch baru untuk fitur/fix Anda:**
   ```bash
   git checkout -b feature/nama-fitur
   ```

2. **Lakukan perubahan pada code**

3. **Commit perubahan Anda:**
   ```bash
   git add .
   git commit -m "Deskripsi perubahan yang jelas"
   ```

4. **Push ke GitHub:**
   ```bash
   git push origin feature/nama-fitur
   ```

5. **Buat Pull Request** dan jelaskan perubahan yang Anda buat

---

## 📝 Catatan Pengembangan

- Pastikan backend sudah berjalan sebelum menjalankan frontend
- Gunakan browser developer tools (F12) untuk debugging
- Periksa console untuk melihat error atau warning
- Pastikan CORS sudah dikonfigurasi dengan benar di backend jika frontend dan backend berjalan di port berbeda

---

## 📞 Butuh Bantuan?

Jika Anda mengalami masalah:
1. Periksa terminal untuk error message
2. Pastikan semua dependencies sudah terinstall dengan `npm install`
3. Hapus folder `node_modules` dan `package-lock.json`, kemudian install ulang jika ada masalah
4. Buka issue di GitHub repository

---

## 📄 Lisensi

Project ini tersedia di bawah lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

---

**Happy Coding! 🎉** Terima kasih sudah berkontribusi pada Catatan Belanja!
