addEventListener("click", function() {
    var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen;
    rfs.call(el);
});
 

function load(){
    document.getElementsByTagName("body")[0].style.cursor="none"
    i=0;
    var p=document.getElementById("per")
    var interval=setInterval(function(){
        if(i!=31)
        {
            p.innerHTML=i;
            i++
        }
        if(i>30)
        {
           document.getElementById("popup").style.display="block" 
           clearInterval(interval)
        }
    },30)
}
// animation()

// function animation(){
//     var balls=document.getElementsByClassName("ball")
   
//     setInterval(function(){
//         setTimeout(function(){
//             balls[0].style.visibility="hidden"
//             balls[1].style.visibility="hidden"
//             balls[2].style.visibility="hidden"
//             balls[3].style.visibility="hidden"
//             console.log("D")
//         },100)
//         setTimeout(function(){
//             balls[0].style.visibility="visible"
//             balls[2].style.visibility="visible"
//             console.log("a")

//         },100)
//         setTimeout(function(){
//             balls[1].style.visibility="visible"
//             balls[3].style.visibility="visible"
//             console.log("s")
//         },100)
    
//     },100)
// }
// animation();
// function animation() {
//     var balls = document.getElementsByClassName("ball");

//     setInterval(function () {
//         setTimeout(function () {
//             balls[0].style.visibility = "hidden";
//             balls[1].style.visibility = "hidden";
//             balls[2].style.visibility = "hidden";
//             balls[3].style.visibility = "hidden";
//             console.log("D");
//         }, 1000);
//         setTimeout(function () {
//             balls[0].style.visibility = "visible";
//             balls[2].style.visibility = "visible";
//             console.log("a");
//         }, 1000);
//         setTimeout(function () {
//             balls[1].style.visibility = "visible";
//             balls[3].style.visibility = "visible";
//             console.log("s");
//         }, 1000);
//     },1000);
// }
