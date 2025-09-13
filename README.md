# SentryAid 🛡️  

**SentryAid** is a comprehensive safety and emergency response platform designed specifically for women. Built on the **MERN stack**, the application provides a secure environment where users can **send SOS alerts**, receive **instant notifications**, and **report inappropriate behavior** by volunteers.  

The platform empowers **volunteers** to actively participate in emergency response by **accepting SOS requests**, offering assistance, and maintaining open communication with users via the in-app chat system. Volunteers can manage their availability and contribute to a coordinated and efficient support network.  

Administrators oversee the system by broadcasting urgent updates, managing user and volunteer reports, and ensuring overall safety, thereby creating a **robust ecosystem for rapid response and community support**.



🔗 **Live Demo:** [Click Here](https://sentryaid-frontend.onrender.com)  

---

## 🛠️ Tech Stack  
| Layer         | Technology |
|---------------|------------|
| Frontend      | React + Vite, TailwindCSS |
| Backend       | Node.js, Express.js |
| Database      | MongoDB + Mongoose |
| Real-Time     | Socket.IO (for live notifications, optional) |
| Deployment    | Render (Backend), Vercel/Netlify (Frontend) |
| Other         | Axios, CORS, JavaScript (ES6) |

---



## 👥 Contributors  
- **Farah Tabussum** – [GitHub](https://github.com/FarahTabussum)
- **Rubaiyat Haque** – [GitHub](https://github.com/Rubi1018) 
- **Abrar Ibne Haque** – [GitHub](https://github.com/BaraYaga)


---

## ⚡ Features  

### 👩 User Features  
- Register and maintain **personal profile** (with medical info, blood group, allergies, etc.)  
- Trigger **SOS alerts** with one click in emergencies  
- View **real-time notifications** from admins  
- Submit and track **reports against volunteers**  

### 👨‍💼 Admin Features  
- Approve or manage **volunteers and users**  
- Broadcast **notifications** to all users instantly  
- View, review, and update **report statuses** (`under_review`, `resolved`, `dismissed`)  
- Monitor **emergency SOS alerts**  

### 🙋 Volunteer Features  
- View **assigned notifications**  
- Respond to **SOS requests**  
- Maintain **basic volunteer info**  

---

## 🧑‍💻 How It Works  

1. **User Onboarding**  
   - User registers and logs in  
   - Personal info stored securely in MongoDB  

2. **SOS Flow**  
   - User presses **SOS button**  
   - Alert is sent to backend → stored + forwarded to admin/volunteers  
   - Admin/volunteers are notified instantly  

3. **Notifications**  
   - Admin creates a **bulletin message**  
   - Message appears in all connected users’ dashboards  

4. **Reports System**  
   - User files a complaint against a volunteer  
   - Admin reviews and updates the report’s status  
   - User sees the progress in their dashboard  

---

## 📸 Screenshots  

### 1️⃣ Website Homepage  
<table>
  <tr>
    <td><img src="media/pic2.png" width="400" /></td>
    <td><img src="media/pic1.png" width="400" /></td>
  </tr>
</table>  

### 2️⃣ User & Volunteer SOS  
<table>
  <tr>
    <td><img src="media/pic4.png" width="400" /></td>
    <td><img src="media/pic5.png" width="400" /></td>
  </tr>
  <tr>
    <td style="text-align:center;"><img src="media/pic3.png" width="400" /></td>
  </tr>
</table>  

---

## 💻 Setup & Instructions  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Erfan-Khan-Dhrubo/SentryAid.git
   cd SentryAid
   ```

2. **Backend setup**  
   Open a terminal and run:  
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Frontend setup**  
   Open another terminal and run:  
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
