//只今読み込み中
//使えない

myY = (window.innerHeight !== undefined) ? window.innerHeight : document.body.clientHeight;
myX = (window.innerWidth !== undefined) ? window.innerWidth : document.body.clientWidth;
myObj = document.getElementById("mySplash").style;
myObj.top = (myY / 2 - 70 < 0) ? 0 : myY / 2 - 70;
myObj.left = (myX / 2 - 300 < 0) ? 0 : myX / 2 - 300;
myObj.visibility = "visible";

function myOnLoad() {
    myObj.visibility = "hidden";
}



//html部分
/*
<body onload="myOnLoad()">
    <div id="mySplash" style="position:absolute;z-index:1;visibility:hidden;width:600px;height:140px;background-color:#FFFFFF;text-align:center;font-size:large;font-weight:bold;border-style:ridge;color:black;">
        <br>
        <br>ただいまページ読み込み中。お待ちください。
    </div>
    </body>
    */