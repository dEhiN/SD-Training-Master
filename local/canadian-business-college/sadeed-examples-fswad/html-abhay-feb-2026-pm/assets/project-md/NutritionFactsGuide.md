
# Build a Nutrition Facts Label

This guide will help you **incrementally build, test, and see the results** of creating a nutrition facts label (like on food packaging) using HTML and CSS.

You'll first create the HTML structure, then style it step by step, testing your progress at each stage.

---

## 📁 Project setup

### ✅ Files to create
- `index.html` — main HTML file
- `style.css` — CSS file

---

# 🚀 1. Create the HTML structure step by step

---

## 🔹 Step 1: Basic HTML Boilerplate

Create `index.html` and add:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nutrition Facts</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
```

✅ **Test:** Open in browser — it should be a blank page with no errors.

---

## 🔹 Step 2: Insert the Image and Container

Inside `<body>`, add:

```html
<img src="https://s.cdpn.io/3/NutritionFacts.gif" class="image">

<section class="performance-facts">
  <header class="performance-facts__header">
    <h1 class="performance-facts__title">Nutrition Facts</h1>
    <p>Serving Size 1/2 cup (about 82g)</p>
    <p>Serving Per Container 8</p>
  </header>
</section>
```

✅ **Test:** Open in browser — should see an image and the title “Nutrition Facts”.

---

## 🔹 Step 3: Add the Nutrition Table

Below the header inside `<section>`, add:

```html
<table class="performance-facts__table">
  <thead>
    <tr>
      <th colspan="3" class="small-info">Amount Per Serving</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2"><b>Calories</b> 200</th>
      <td>Calories from Fat 130</td>
    </tr>
    <tr class="thick-row">
      <td colspan="3" class="small-info"><b>% Daily Value*</b></td>
    </tr>
    <!-- more rows here -->
  </tbody>
</table>
```

✅ **Test:** Page should show the start of a table.

---

## 🔹 Step 4: Complete the Table Rows

Add rows for Total Fat, Saturated Fat, Trans Fat, Cholesterol, Sodium, Carbs, Protein, etc., matching the nutrition label structure.

✅ **Test:** All data appears, though unstyled.

---

## 🔹 Step 5: Add Vitamins and Small Info

Add two more tables:

```html
<table class="performance-facts__table--grid">...</table>
<p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet...</p>
<table class="performance-facts__table--small small-info">...</table>
```

✅ **Test:** You now see the vitamin grid and small calorie guide.

---

# 🎨 2. Apply CSS step by step

---

## 🔹 Step 1: Link and Reset

Make sure `style.css` is linked in `<head>`. In `style.css` start with:

```css
body {
  font-size: small;
  line-height: 1.4;
}
p {
  margin: 0;
}
```

✅ **Test:** Text shrinks slightly.

---

## 🔹 Step 2: Style Image and Container

```css
.image {
  width: 250px;
  float: left;
  margin: 20px;
}
.performance-facts {
  border: 1px solid black;
  margin: 20px;
  float: left;
  width: 280px;
  padding: 0.5rem;
}
```

✅ **Test:** Image floats left, label floats beside.

---

## 🔹 Step 3: Style Header

```css
.performance-facts__title {
  font-weight: bold;
  font-size: 2rem;
  margin: 0 0 0.25rem 0;
}
.performance-facts__header {
  border-bottom: 10px solid black;
  margin: 0 0 0.5rem 0;
  padding: 0 0 0.25rem 0;
}
```

✅ **Test:** Bold title and thick line appear.

---

## 🔹 Step 4: Style Main Table

```css
.performance-facts__table {
  width: 100%;
  border-collapse: collapse;
}
.performance-facts__table th,
.performance-facts__table td {
  font-weight: normal;
  text-align: left;
  padding: 0.25rem 0;
  border-top: 1px solid black;
  white-space: nowrap;
}
.performance-facts__table td:last-child {
  text-align: right;
}
.performance-facts__table .thick-row th,
.performance-facts__table .thick-row td {
  border-top-width: 5px;
}
```

✅ **Test:** The table lines now appear correctly.

---

## 🔹 Step 5: Style Small Tables

```css
.small-info {
  font-size: 0.7rem;
}
.performance-facts__table--grid,
.performance-facts__table--small {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 0.5rem 0;
}
.performance-facts__table--small thead tr {
  border-bottom: 1px solid black;
}
.performance-facts__table--small th,
.performance-facts__table--small td {
  border: 0;
  padding: 0;
}
```

✅ **Test:** Small text and additional grids look aligned.

---

## 🔹 Step 6: Bottom Notes

```css
.text-center {
  text-align: center;
}
.thick-end {
  border-bottom: 10px solid black;
}
.thin-end {
  border-bottom: 1px solid black;
}
```

✅ **Test:** Now the end lines look thick or thin as needed.

---

# 🎉 Done!

You’ve **built a complete Nutrition Facts label**, step by step, seeing your work evolve.

---

## 📂 File summary

```
/project-root
  ├── index.html
  └── style.css
```

---

👍 **Happy coding!**
