# 🎲 Advice Generator

A simple and elegant React application that fetches random advice slips from the [Advice Slip JSON API](https://api.adviceslip.com/) and displays them with a stylish UI.

---

## 🔍 Overview

- Fetches and displays a unique piece of advice with an ID.
- Features a visually appealing card design with custom SVG assets.
- Users can click a dice button to get a new random advice.
- Handles API errors gracefully by showing a fallback message.
- Built with **React** and **TypeScript**.

---

## 🎨 Preview

![Preview Screenshot](screenshot.jpg)

LIVE: https://dzik0.github.io/advice-generator/

## 🚀 Features

- Fetch advice asynchronously from a public API.
- Display advice ID and advice text.
- Clickable button to fetch new advice dynamically.
- Responsive and clean design with custom icons and patterns.
- Error handling for network/API issues.

---

## 🛠️ Tech Stack

- React + TypeScript
- Fetch API
- Tailwind CSS
- SVG assets for icons and decorative elements

---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/advice-generator.git
   ```

2. Navigate into the project directory:

   ```bash
   cd advice-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 🧩 How It Works

- The app uses React's `useState` hook to keep track of the current advice message.
- The `getAdvice` function fetches a new advice slip from the API and updates the state.
- Clicking the dice button triggers `getAdvice`, fetching fresh advice.
- If the API call fails, a default error message is shown.

---

## 🔧 Customization

- Replace SVG assets in the `/public` folder (`pattern-divider-mobile.svg`, `icon-dice.svg`) to customize visuals.
- Modify styling in your CSS or Tailwind config to adjust the look and feel.

---

## 👨‍💻 Author

**Piotr Głazowski**
_React & TypeScript Developer_
[GitHub](https://github.com/your-username)

---

## 📄 License

This project is licensed under the MIT License.
