
# Build a Netflix Clone Landing Page

This guide helps you **incrementally build, test, and improve** a Netflix-like landing page using HTML and CSS.

You'll start with HTML, then gradually style it with CSS, testing as you go to see your project evolve.

---

## 📁 Project Setup

### ✅ Files to create
- `index.html` — your main HTML file
- `style.css` — your CSS file
- `mediaquery.css` — optional file for responsive tweaks (can add later)

---

# 🚀 1. Create the HTML structure step by step

---

## 🔹 Step 1: Basic HTML Boilerplate

Create `index.html` and add:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Netflix</title>
</head>
<body>

</body>
</html>
```

✅ **Test:** Open in browser — should show a blank page, but no errors.

---

## 🔹 Step 2: Add the Navbar

Inside `<body>`, add:

```html
<div class="navbar">
  <li class="logo"><img src="https://www.searchpng.com/wp-content/uploads/2019/02/Netflix-Logo-PNG-image-200x200.png" alt="Netflix Logo"></li>
  <li class="buttons">Sign In</li>
</div>
```

✅ **Test:** Refresh browser — you’ll see the image and “Sign In”.

---

## 🔹 Step 3: Add the Main Section

Below navbar, add:

```html
<div class="main">
  <div class="area">
    <h1>Unlimited movies, TV <br>shows, and more.</h1>
    <h3>Watch anywhere. Cancel anytime.</h3>
    <div class="search">
      <input type="text" class="box" placeholder="Email">
      <span class="try">Try 30 days free</span>
    </div>
    <h4>Ready to watch? Enter your email to create or access your account</h4>
  </div>
</div>
```

✅ **Test:** Refresh — you’ll see unstyled text and input.

---

## 🔹 Step 4: Add Content Sections

Below `<div class="main">`, add:

```html
<div class="container1">
  <div class="text">
    <h1>Enjoy on your TV.</h1>
    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
  </div>
  <div class="image">
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV">
  </div>
</div>
```

Repeat similar for mobile download & watch everywhere sections.

✅ **Test:** Should see stacked sections.

---

## 🔹 Step 5: Add FAQ Section

```html
<div class="question">
  <h1>Frequently Asked Questions</h1>
  <div class="quest">
    <div class="textbox">What is Netflix?</div>
    <i class="las la-plus"></i>
  </div>
  <!-- repeat for other questions -->
</div>
```

---

## 🔹 Step 6: Add Footer

```html
<div class="footer">
  <div class="footercon">
    <ul class="list1">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Investor Relations</a></li>
      <!-- more links -->
    </ul>
    <!-- more lists -->
  </div>
</div>
```

✅ **Test:** Should see unstyled FAQ and footer links.

---

# 🎨 2. Apply CSS step by step

---

## 🔹 Step 1: Connect CSS

In your `<head>`, add:

```html
<link rel="stylesheet" href="style.css">
```

In `style.css`, start with:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
```

✅ **Test:** Font changes.

---

## 🔹 Step 2: Style Navbar

Add:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 20px;
}
.navbar img {
  width: 120px;
}
.buttons {
  background: #e50914;
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
}
```

✅ **Test:** Navbar looks neat.

---

## 🔹 Step 3: Style Main Area

```css
.main {
  background: url('https://assets.nflxext.com/ffe/siteui/vlv3/...') center/cover no-repeat;
  min-height: 700px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.area h1 {
  font-size: 3rem;
}
.search input {
  padding: 15px;
  width: 300px;
}
.try {
  background: #e50914;
  color: white;
  padding: 15px;
  margin-left: 10px;
}
```

✅ **Test:** Now it looks like Netflix hero.

---

## 🔹 Step 4: Style Containers

```css
.container1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  color: white;
  padding: 50px 20px;
}
.container1 img {
  width: 300px;
}
.text h1 {
  font-size: 2.5rem;
}
.text p {
  font-size: 1.2rem;
}
```

✅ **Test:** TV, mobile, device sections aligned.

---

## 🔹 Step 5: Style FAQ & Footer

```css
.question {
  background: #000;
  color: white;
  text-align: center;
  padding: 50px 20px;
}
.quest {
  background: #303030;
  margin: 10px auto;
  width: 80%;
  padding: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
}
.footer {
  background: #000;
  color: #999;
  padding: 40px;
}
.footer a {
  color: #999;
  text-decoration: none;
}
.footer ul {
  list-style: none;
}
```

✅ **Test:** Questions & footer neat.

---

# 🛠️ 3. Test Responsiveness

- Open on mobile or shrink browser.
- Start adding `mediaquery.css` or inside `style.css`:

```css
@media (max-width: 768px) {
  .container1 {
    flex-direction: column;
    text-align: center;
  }
  .navbar {
    flex-direction: column;
  }
}
```

✅ **Test:** Works well on mobile.

---

# 🎉 Done!

You’ve now **built a complete Netflix landing page clone**, step by step, while testing each phase.

---

## 📂 File summary

```
/project-root
  ├── index.html
  ├── style.css
  └── mediaquery.css
```

---

👍 **Happy coding!**
