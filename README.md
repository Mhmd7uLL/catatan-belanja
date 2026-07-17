# Catatan Belanja 📝🛒

Projek Fullstack sederhana untuk mencatat dan mengelola daftar belanja.

---

## 📋 Penjelasan

**Catatan Belanja** adalah aplikasi web yang dirancang untuk membantu Anda mengelola daftar belanja dengan mudah. Aplikasi ini memungkinkan Anda untuk:

- Menambahkan item belanja baru
- Menghapus item dari daftar berdasarkan item yang dipilih dan seluruh item
- Menandai item sebagai selesai/dibeli
- Sorting/Filter list berdasarkan waktu input, checklist dan urutan alfabet
- Penyimpanan CRUD sederhana berupa database MySQL

Tech Stacks:
- **Bahasa**   : JavaScript
- **Frontend** : React.JS
- **Backend**  : Node.Js + Express.Js 
- **Database** : MySQL 

---

## 📁 Struktur Folder/Directory

```
catatan-belanja/
├── backend/                       # Direktori aplikasi Backend                  
│   ├── src/                       
│   |   ├── controllers/           # logika sistem
│   |   ├── db/                    # koneksi database MysQL
│   |   ├── routes/                # Rute/endpoint API
│   |   └── server.js              # File server utama
|   ├── package-lock.json          
│   └── package.json               # Dependencies Backend
|
├── frontend/                      # Direktori aplikasi Frontend                
│   ├── public/                    
│   ├── src/                       # Folder JavaScript
│   │   ├── assets/                # Folder komponen assets
│   │   ├── components/            # File Komponen UI React
|   |   ├── App.jsx                # File utama aplikasi
│   │   ├── index.css              
│   │   └── main.jsx               # Render UI Utama
│   ├── eslint.config.js          
│   ├── index.html                 # HTML utama
│   ├── package-lock.json          
│   ├── package.json               # Dependencies React
│   └── vite.config.js              
├── README.md                      # File dokumentasi ini
└── .gitignore                     # File untuk mengabaikan file tertentu
```

### Clone Repository

```bash
# Clone repository dari GitHub
git clone https://github.com/Mhmd7uLL/catatan-belanja.git

# Masuk ke direktori project
cd catatan-belanja
```

---

## Database Setup

1. Jalankan MySQL menggunakan XAMPP atau Laragon.
2. Pastikan MySQL berjalan pada port `3306`.
3. Gunakan konfigurasi berikut:

```js
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=catatan_belanja
```

> Database dan tabel akan dibuat secara otomatis saat backend dijalankan.

---


## Setup Backend

Masuk ke folder backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Jalankan server:

```bash
npm run dev
```

Server akan berjalan di:

```txt
http://localhost:5000
```

---

## Setup Frontend 

Buka terminal baru, masuk ke direktori project root
```bash
cd catatan-belanja/frontend
```

Jika menggunakan bundler (webpack, vite, dll):
```bash
npm install
npm run dev
```

> Frontend berjalan di: http://localhost:5173

Jika tanpa bundler:

```bash
# Cukup buka file index.html dengan live server atau server sederhana
# Opsi 1: Menggunakan Live Server (VS Code extension)
# Opsi 2: Menggunakan Python (jika tersedia)
python -m http.server 8000
```

> Frontend dapat diakses di: http://localhost:3000 atau http://localhost:8000

---

### Mulai Berkontribusi

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

## 📝 Catatan Tambahan

- Pastikan backend sudah berjalan sebelum menjalankan frontend
- Gunakan browser developer tools (F12) untuk debugging
- Periksa console untuk melihat error atau warning
- Pastikan CORS sudah dikonfigurasi dengan benar di backend jika frontend dan backend berjalan di port berbeda

---
