/*here JavaScript Progress Bar*/


var i =0;
function moveBar(){
    if (i == 0) {
        i = 1;
    
    var elementBar = document.getElementById("mybar");
    var width = 10;
    var id = setInterval(frameBar, 10);

    function frameBar(){
        if (width >= 100) {
            clearInterval(id);
            i=0;
        } else {
            width++;
            elementBar.style.width = width + "%";
            elementBar.innerHTML = width + "%";
        }
    }
   }
}
