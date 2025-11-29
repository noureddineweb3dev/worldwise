# 🌍 WorldWise — Modern React Travel Logger

WorldWise is a **React application** that allows users to save and track the cities they've visited around the world.
It is built using the **latest versions** of React, React Router, and JSON Server (v1.1.x).

---

## ✨ Features

- 🌎 Mark cities on an interactive map
- 📝 Add notes and visit dates
- 📌 List of visited cities
- 🔄 Persistent storage using JSON Server
- 🧭 Client-side routing with React Router
- 🎨 Styled using CSS Modules
- ⚡ Fast and modern development setup

---

## 🛠️ Tech Stack

### Frontend

- **React 18**
- **React Router 6+**
- **CSS Modules**
- **Vite** (if used)

### Backend (Development API)

- **JSON Server (v1.1.6)**

  > ✔ Works with `--port` only
  > ❌ `--delay` not supported
  > ❌ config files not supported

---

## 📁 Project Structure

```
/src
  /components
  /contexts
  /hooks
  /pages
  /styles
/data
  cities.json
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/[your-username]/worldwise.git
cd worldwise
```

### 2. Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Development Servers

### 🔹 Start the React App

```bash
npm run dev
```

### 🔹 Start JSON Server (latest version)

```bash
npm run server
```

With the latest JSON Server, your script in `package.json` should look like:

```json
"server": "json-server --port 8000 data/cities.json"
```

Your API will run at:
👉 [http://localhost:8000](http://localhost:8000)

The React app runs at (Vite):
👉 [http://localhost:5173](http://localhost:5173)

---

## 🌐 JSON Data Format

Example `cities.json`:

```json
[
  {
    "id": 1,
    "cityName": "Lisbon",
    "country": "Portugal",
    "emoji": "🇵🇹",
    "date": "2027-10-31T15:59:59.138Z",
    "notes": "My favorite city so far!",
    "position": {
      "lat": 38.727881642324164,
      "lng": -9.140900099907554
    }
  }
]
```

---

## 📸 Screenshots

Add your own screenshots:

```
![WorldWise Screenshot](./screenshots/preview.png)
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📝 Notes About the Latest JSON Server

- `--delay` was **removed**
- `--config` was **removed**
- `json-server.json` is **ignored**
- The only valid flags are:

  - `--port`
  - `--host`
  - `--static`
  - `--help`
  - `--version`

So your API script must be simple and modern.

---

## ✨ Credits

Based on the concept from _The Ultimate React Course_ by Jonas Schmedtmann, adapted for **modern tooling**.

---

## 📜 License

Released under the MIT License.
