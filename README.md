# 🛠️ Task-MERN

Projekti **Task-MERN** është një aplikacion i thjeshtë për menaxhimin e detyrave (Tasks) i ndërtuar me teknologjinë **MERN Stack**:

- ⚙️ **Backend**: Node.js, Express, MongoDB, JWT
- 💻 **Frontend**: React, Vite, Redux Toolkit Query

---

## 📁 Struktura e Projektit

```
task-mern/
├── backend/          # Node.js & Express API
├── frontend/         # React + RTK Query App
```

---

## 🚀 Instalimi & Nisja Lokale

### 1️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

- Sigurohu që ke krijuar një skedar `.env` me këtë përmbajtje:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

- Krijo një skedar `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🧩 Funksionalitetet Kryesore

- ✅ Regjistrim & Login me JWT
- 🔒 Mbrojtje routes për përdorues të loguar
- ➕ Shtim i detyrave
- 🗑️ Fshirje e detyrave
- ✏️ Editim inline i detyrave me `toast` dhe autofokus
- 🔁 Rifreskim automatik i listës me `RTK Query`

---

## 🖥️ Screenshots

> Do azhornohet në një moment të dyte

---

## 📚 Teknologjitë e Përdorura

- React + Vite
- Redux Toolkit & RTK Query
- CSS i thjeshtë
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens
- React Toastify

---

## 📌 Autori

Ky projekt u zhvillua për praktikë në lëndën **Zhvillim Webi: aplikime dhe programim** me qëllim demonstrimin e përdorimit të **MERN Stack** në një aplikacion real.

> Developed by Jurgen Kruja 🚀

---

## 📄 Licenca

Ky projekt është për qëllime edukative dhe personale.