let count=0;
document.getElementById("button1").onclick=function()
{
    count++;
    document.getElementById("l1").textContent=count;
}
document.getElementById("button2").onclick=function()
{
    count=0;
    document.getElementById("l1").textContent=count;
}
document.getElementById("button3").onclick=function()
{
    count--;
    document.getElementById("l1").textContent=count;
}

