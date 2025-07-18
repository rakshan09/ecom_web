# 🛒 Full Stack eCommerce App

This is a full stack eCommerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with integrated payment gateways via **Razorpay** and **Stripe**. The project supports both **Cash on Delivery (COD)** and online payments.

---

## 🚀 Features

- ✅ User authentication & registration
- 🛍️ Product listing with categories
- 🧺 Add to cart & cart management
- 🧾 Place orders (COD, Razorpay, Stripe)
- 💳 Payment gateway integration:
  - Razorpay (for INR payments)
  - Stripe (international-ready)
- 📦 Order tracking and history
- 🛠️ Admin panel to manage orders

---

## 🧰 Tech Stack

### Frontend
- React.js
- Axios
- Router-dom
- Toast (toastify)
- Tailwind CSS / CSS Modules (depending on your styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Razorpay SDK
- Stripe SDK
- JWT for authentication

## 🔐 Environment Variables

Create a `.env` file in your backend directory and include:

```env
PORT= your_designated_port
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

🧪 Running the Project Locally follow bellow steps
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install

run with command (npm run dev for frontend and admin & npm run server for backend) and open on your given ports

#👤 Author
Rakshan Kalekar
🌐 LinkedIn - www.linkedin.com/in/rk091999

