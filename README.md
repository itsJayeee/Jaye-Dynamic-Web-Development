# Dynamic Web Development — Jaye Du (ITP Fall 2025)

This repository documents weekly projects and learnings from NYU ITP’s Dynamic Web Development course.

## Week 1 — Static Site + Server Basics
- Wrote and published a poem as a static webpage.
- Deployed a static site to a remote server using DigitalOcean + Cyberduck.
- Practiced Node.js basics for handling GET and POST requests.

![Poetry page screenshot](https://github.com/user-attachments/assets/d95d6527-58fd-450b-b7b8-cbec67b3a92f)

## Week 2 — Compliment Machine ✨
A small app that turns a bad mood into a custom compliment.
- Input: name, mood, and a single emoji
- Output: a generated compliment to brighten your day  
Demo: https://github.com/user-attachments/assets/1c44f7c1-d157-427a-a952-efd36021a89a

## Week 3 — Dream Machine
Share your dream, then discover the next dreams of people who reached it.
- Built with EJS templates
- Deployed to a public server  
Live demo: http://68.183.135.158:1234/


- # Final — Boulder Designer

Design your bouldering routes and save them — a lightweight web app for setting problems on a climbing wall.

> Built with **Node.js + Express** and **fetch (AJAX)**. UI assets were drawn in **Figma**.

---

## ✨ Features

* **Route design**: place holds on a wall canvas, set grade/color, add notes.
* **Save & load**: simple in-memory persistence by default (easy to swap for a DB).
* **Responsive UI**: works on desktop and tablet.
* **AJAX API**: clean endpoints for creating and listing routes.

---

## 📸 Screenshots

<img width="1512" height="820" alt="image" src="https://github.com/user-attachments/assets/9590d041-a670-402b-b35e-f55f28a186d3" />
<img width="1512" height="982" alt="Climbing wall" src="https://github.com/user-attachments/assets/c86c2c41-b7dc-4c74-9850-c683c6e68305" />
<img width="1512" height="982" alt="Climbing wall (1)" src="https://github.com/user-attachments/assets/e90b6e1d-4266-4b22-8bb2-d634d44be4d2" />

---

## 🎥 Demo

* Video: [https://youtu.be/xqGcNFVIjVc](https://youtu.be/xqGcNFVIjVc)

---

## 📁 Project Structure

```
boulder-designer/
├─ public/              # static assets (css, js, images)
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js            # canvas interactions + fetch calls
├─ server.js            # Express app + API routes
├─ routesStore.js       # in-memory store (replaceable)
└─ package.json
```


---

## Tech Stack
- Node.js, Express
- EJS templating
- Deployment: DigitalOcean, Cyberduck

## Repository Structure
- Week 1: Static site + server notes
- Week 2: Compliment Machine
- Week 3: Dream Machine

## Notes
This repo will evolve weekly with new features, code, and reflections.
