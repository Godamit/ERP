

$('.profile').hide();

$('#i5').on('click',()=>{
    // $('.profile').css('background-color','blue');
    $('.profile').show();
});
$('#X').on('click',()=>{
    // $('.profile').css('background-color','blue');
    $('.profile').hide();
});

$('#im5').on('click',()=>{
    // $('.profile').css('background-color','blue');
    $('.profile').show();
});
$('#im6').on('click',()=>{
    // $('.profile').css('background-color','blue');
    window.location.href = "login.html";
});

$('#logout').on('click',()=>{
    localStorage.clear()
    window.location.href = "index.html"


});

$(document).ready(()=>{
    var keytoken = localStorage.getItem('key')
    if(keytoken == 'QW1pYW5zNzg2Nzg2'){
            console.log("verified");
    }else{
        window.location.href = "login.html"
    }

});



//dropdown section begins
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}