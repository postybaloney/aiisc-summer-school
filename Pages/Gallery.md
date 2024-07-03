---
title: Gallery
layout: page
nav_order: 3
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px;
        }
        .flex-item {
            flex: 1 1 calc(25% - 20px); /* Adjust the percentage to control the number of columns */
            border: 2px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.2s;
        }
        .flex-item img {
            width: 100%;
            height: auto;
            display: block;
        }
        .flex-item:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <h1>Image Grid with Flexbox</h1>
    <div class="flex-container">
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/aiisc.png" alt="Image 1"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/amitsheth.png" alt="Image 2"></div>
        <!-- <div class="flex-item"><img src="https://via.placeholder.com/200" alt="Image 3"></div>
        <div class="flex-item"><img src="https://via.placeholder.com/200" alt="Image 4"></div> -->
        <!-- Add more images as needed -->
    </div>
</body>
</html>
