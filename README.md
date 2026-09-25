# 🍴 TasteQuest

### Discover India Through Food & Travel

TasteQuest is a web application that helps users discover traditional Indian dishes, explore places where they can try them, and read or submit reviews.

The application follows a simple journey:

**State → Dish → Place → Review**

---

## 📌 Project Overview

India is known for its diverse food culture, with every state having its own traditional dishes and flavours.

TasteQuest provides a simple platform where users can:

- Explore Indian states
- Discover famous dishes from different states
- Find recommended places to try those dishes
- View ratings and reviews
- Submit their own reviews

The project combines a responsive React frontend with a Supabase backend for storing and retrieving data.

---

## ✨ Features

### 🗺️ Explore States
Browse different Indian states and discover their traditional food.

### 🍛 Discover Dishes
View dishes along with their descriptions and images.

### 📍 Find Places
Find places where a particular dish can be tried.

### ⭐ Reviews
Read reviews submitted by other users.

### ✍️ Submit Reviews
Users can submit their name, rating and review for a place.

### 🔎 Search
Search and explore food-related content easily.

### 📱 Responsive Design
The website is designed to work on desktop, tablet and mobile screens.

### ☁️ Supabase Backend
Supabase is used for:
- PostgreSQL database
- Storing dishes
- Storing places
- Storing reviews
- Fetching live data
- Adding new reviews

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- JSX
- HTML5
- CSS3
- React Router

### Backend
- Supabase
- PostgreSQL

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Vercel

---

## 🏗️ Project Structure

```text
TasteQuest/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── DishCard.jsx
│   │   ├── StateCard.jsx
│   │   ├── PlaceCard.jsx
│   │   └── ReviewCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── States.jsx
│   │   ├── Dishes.jsx
│   │   ├── Places.jsx
│   │   └── Reviews.jsx
│   │
│   ├── data/
│   │   └── data.js
│   │
│   ├── supabaseClient.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
