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
            flex: 1 1 calc(25% - 20px);
            border: 2px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
        }
        .flex-item img {
            width: 100%;
            height: auto;
            display: block;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 60px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.9);
        }
        .modal-content {
            margin: auto;
            display: block;
            width: 80%;
            max-width: 700px;
        }
        .close {
            position: absolute;
            top: 15px;
            right: 35px;
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            transition: 0.3s;
        }
        .close:hover,
        .close:focus {
            color: #bbb;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/GalleryPXL_20240603_145641604.MP.jpg"><a href="https://postybaloney.github.io/aiisc-summer-school/assets/images/GalleryPXL_20240603_145641604.MP.jpg"></a></div> 
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_173212677.MP.jpg"><a href="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_173212677.MP.jpg"></a></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_181632272.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_183412373.MP.jpg"></div>
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_183415507.mp4"></div> -->
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_192652300.PORTRAIT.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_192652300.PORTRAIT~2.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_192653466.PORTRAIT.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240603_192657813.PORTRAIT.ORIGINAL.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_140404657.MP.jpg"></div>
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_144633099.mp4"></div> -->
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_151902765.MP.jpg"></div>
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_151908996.mp4"></div> -->
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_152405666.mp4"></div> -->
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_152405666.mp4"></div> -->
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_152721475.mp4"></div> -->
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_153318681.mp4"></div> -->
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_153640669.mp4"></div> -->
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240604_180621339.MP.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240606_145233548.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240606_170602638.MP.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240606_183307431.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_131535722.MP.jpg"></div>
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_134954630.mp4"></div> -->
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_135156770.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_144150153.MP.jpg"></div>
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_153426072.mp4"></div> -->
        <!-- <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_154713582.mp4"></div> -->
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_154723693.NIGHT.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_154757645.NIGHT.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_154802797.MP.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/PXL_20240607_154804634.MP.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/WhatsApp Image 2024-06-10 at 8.24.59 AM.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/WhatsApp Image 2024-06-10 at 8.25.02 AM (2).jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/WhatsApp Image 2024-06-10 at 8.25.02 AM (4).jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/WhatsApp Image 2024-06-10 at 8.25.02 AM (5).jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/WhatsApp Image 2024-06-10 at 8.25.02 AM.jpg"></div>
        <div class="flex-item"><img src="https://postybaloney.github.io/aiisc-summer-school/assets/images/Gallery/WhatsApp Image 2024-06-10 at 8.25.15 AM.jpg"></div>
    </div>
    <div id="modal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modal-img">
    </div>
    <script src="https://postybaloney.github.io/aiisc-summer-school/script.js"></script>
</body>
</html>
