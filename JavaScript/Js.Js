var menu = document.getElementById("menu")
var r=document.getElementsByClassName("r")
function toggle_menu()
{
if(menu.style.left!="85%")
{
menu.style.left="85%"
r[0].style.transform="translate(0px,13px) rotate(45deg)"

r[1].style.background="rgba(0,0,0,0)"
r[2].style.transform="translate(0px,-13px) rotate(-45deg)"
return
}
if(menu.style.left != "100%")
{
menu.style.left="100%"
r[0].style.transform="translate(0px,0px) rotate(0deg)"
r[1].style.background ="rgba(0,0,0,1)"
r[2].style.transform="translate(0px,0px) rotate(0deg)"
return
}
}
var skills=document.getElementsByClassName("skill")
var c =[82,75,71,90]
for(var i = 0; i<4;i++)
{
skills[i].style.background = "conic-gradient(rgb(255,41,43) "+c[i]+"%, rgb(30,30,30) "+c[i]+"%)"
document.getElementsByClassName("skill-value")[i].innerHTML=c[i]+'<span style="font-size:15px;">%</span>'
}
