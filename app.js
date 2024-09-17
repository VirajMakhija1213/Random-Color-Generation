let divi=document.querySelector("div");
let btn=document.querySelector("button");
let heading=document.querySelector("h2");
btn.addEventListener("click",function()
{
    let color=generateRandom();
    heading.innerText=color;
    heading.style.color=color;
    divi.style.backgroundColor=color;
});
function generateRandom()
{
  let x=Math.floor(Math.random()*255)+1;
  let y=Math.floor(Math.random()*255)+1;
  let z=Math.floor(Math.random()*255)+1;
  return `rgb(${x},${y},${z})`;
}