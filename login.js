let savedName = localStorage.getItem('name');
console.log(savedName);

$(window).on('beforeunload', function() {
    console.log("reloaded");
});

const togglePasswordVisibility = () => {
    const type = $('#i2').prop('type');
    const newType = type === 'password' ? 'text' : 'password';
    const imgSrc = newType  == 'password' ? 'eyeclose.png' : 'eye.png';
    $('#i2').prop('type', newType);
    $('.pass img').prop('src',imgSrc);
};

function submitForm() {
    const name = btoa($('#i1').val());
    const pass = btoa($('#i2').val());

    localStorage.setItem('name', name);
    localStorage.setItem('pass', pass);
    if(name == ""){
        $('#t2').html("Empty Username");
    }else if(pass == ""){
        $('#t2').html("Empty Password");
    }else{ 
        if(name === "QW1pYW5z"){
            if(pass === "Nzg2Nzg2"){
                window.location.href = "index.html";
            }else{
                $('#t2').html("Invalid Password");
            }
        }else if(pass === "Nzg2Nzg2"){
                $('#t2').html("Invalid Username");
        }else{
            $('#t2').html("Incorrect Credentials");
            
        }

        }
    }
        // if (name === "QW1pYW5z" && pass === "Nzg2Nzg2") {
    //     window.location.href = "index.html";
    // } else {
    //     $('#t2').html("Invalid Credentials");
    // }


$(this).on('keydown', (e) => {
    if (e.which === 13) {
        submitForm();
    }
});


function forget(){
    alert("please contact Thadomal Shahani Engineering College or your respective batch faculty ")
};