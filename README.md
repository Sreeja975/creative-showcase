Creative Showcase

Creative Showcase is a **React + Supabase web application** that allows users to sign up, log in, and showcase their creative work by uploading and displaying images on a personal dashboard.

---

## Features

* **User Authentication:** Signup/Login using Supabase email authentication
* **Dashboard:** Personalized dashboard displaying uploaded images
* **Image Upload:** Users can upload and manage their images
* **Responsive Design:** Works on both desktop and mobile devices
* **Hosted on Vercel** for easy deployment

---

## Tech Stack

* **Frontend:** React, JavaScript, CSS
* **Backend & Database:** Supabase (Auth, Storage, Database)
* **Hosting:** Vercel

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/YourUsername/creative-showcase.git
cd creative-showcase
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file in the root directory** with your Supabase credentials:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the app locally**

```bash
npm start
```

* Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## App Flow

1. **Signup / Login**

   * Users can create an account or login using their email.
   * After login, users are redirected to the **Dashboard**.

2. **Dashboard**

   * Displays all uploaded images for the logged-in user.
   * Option to upload new images.

3. **Image Upload**

   * Images are stored in **Supabase Storage**.
   * Public URLs are used to display images in the dashboard.

---

## Deployment (Vercel)

1. Push your project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Set **Environment Variables** in Vercel Dashboard:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Click **Deploy**. Your app will be live at:

```
https://sreeja975-creative-showcase.vercel.app/
```

---

## Folder Structure

```
creative-showcase/
├─ public/
├─ src/
│  ├─ components/       # Reusable React components
│  ├─ pages/            # App pages (Login, Signup, Dashboard)
│  ├─ supabase.js       # Supabase client config
│  └─ App.js            # Main App
├─ package.json
└─ README.md
```
Screenshots

Signup: <img width="1920" height="1080" alt="Signup" src="https://github.com/user-attachments/assets/271898a7-0ae7-4643-938e-1a7e9391aabd" />

Dashboard: <img width="1920" height="1080" alt="Dashboard" src="https://github.com/user-attachments/assets/da96a8f8-b03b-4ead-8772-5e914bfda2b3" />

Imageupload: <img width="1920" height="1080" alt="Imageupload" src="https://github.com/user-attachments/assets/96b1cd2b-cac4-4679-a164-635484f6e286" />

---

## License

This project is licensed under the **MIT License**.

---

## Author

GitHub: [Sreeja975](https://github.com/Sreeja975)
Email: [bwumca24001@brainwareuniversity.ac.in](mailto:bwumca24001@brainwareuniversity.ac.in)
