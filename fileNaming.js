title = document.getElementById("titleLine");
wholefileName = document.getElementById("jsFileName").src;
fileName = wholefileName.split("http://127.0.0.1:3000/").pop();
title.innerHTML = fileName;
