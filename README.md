# Catatan Belanja 📝🛒

Aplikasi web untuk mencatat dan mengelola daftar belanja Anda dengan antarmuka yang sederhana.

---

## 📋 Penjelasan

**Catatan Belanja** adalah aplikasi web yang dirancang untuk membantu Anda mengelola daftar belanja dengan mudah. Aplikasi ini memungkinkan Anda untuk:

- Menambahkan item belanja baru
- Mengedit item yang sudah ada
- Menghapus item dari daftar
- Menandai item sebagai selesai/dibeli
- Penyimpanan sederhana berupa Array
- Sorting/Filter list berdasarkan waktu input, checklist dan urutan alfabet

Aplikasi ini dibangun dengan teknologi modern:
- **Frontend**: JavaScript dengan Framework library React.JS
- **Backend**: Node.js dengan framework Express.JS (untuk API)
- **Database**: Array sementara JavaScript di file **backend/src/db/groceryItems.js**

---

## 📁 Struktur Folder/Directory

```
catatan-belanja/
├── backend/                       # Direktori aplikasi Backend                  
│   ├── src/                       
│   |   ├── controllers/           # logika sistem
│   |   ├── db/                    # Penyimpanan sederhana dan temporary berupa Array
│   |   ├── routes/                # Rute endpoint
│   |   └── server.js              # File server utama
|   ├── package-lock.json          
│   └── package.json               # Dependencies Backend
|
├── frontend/                      # Direktori aplikasi Frontend                
│   ├── public/                    
│   ├── src/                       # Folder JavaScript
│   │   ├── assets/                # File utama aplikasi
│   │   ├── components/            # File Komponen UI React
|   |   ├── App.jsx                # File utama aplikasi
│   │   ├── index.css              # Style Utama
│   │   └── main.jsx               # Render UI Utama
│   ├── eslint.config.js          
│   ├── index.html                 # HTML utama
│   ├── package-lock.json          
│   ├── package.json               # Dependencies React
│   └── vite.config.js              
├── README.md                      # File dokumentasi ini
└── .gitignore                     # File untuk mengabaikan file tertentu
```

### 1️⃣ Clone Repository

```bash
# Clone repository dari GitHub
git clone https://github.com/Mhmd7uLL/catatan-belanja.git

# Masuk ke direktori project
cd catatan-belanja
```

---

### 2️⃣ Setup & Jalankan Backend

```bash
# Masuk directory backend
cd catatan-belanja/backend

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
cd catatan-belanja/frontend

# Jika menggunakan bundler (webpack, vite, dll):
npm install
npm run dev

# Frontend berjalan di: http://localhost:5173

# Jika tanpa bundler:
# Cukup buka file index.html dengan live server atau server sederhana
# Opsi 1: Menggunakan Live Server (VS Code extension)
# Opsi 2: Menggunakan Python (jika tersedia)
python -m http.server 8000

# Frontend dapat diakses di: http://localhost:3000 atau http://localhost:8000
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

**Happy Coding! 🎉** Terima kasih sudah berkontribusi pada Catatan Belanja!
