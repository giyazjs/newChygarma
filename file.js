const input = document.querySelector('.input__file');
const btnbg = document.querySelector('#input__filed');
const btncom = document.querySelector('.input__file-com')






input.onchange = (e) => {
    readURL(e.target)
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(e.target.result);
            document.getElementById("avatar").style.background = `url(${e.target.result})`;
            document.getElementById("avatar").style.backgroundSize = `cover`;
        };

        reader.readAsDataURL(input.files[0]);
    }
}



btnbg.onchange = (e) => {
    readURL1(e.target)
}


function readURL1(btnbg) {
    if (btnbg.files && btnbg.files[0]) {
        let other = new FileReader();
        other.onload = function (e) {
            // console.log(e.target.result);
            document.getElementById("bg-avatar").style.background = `url(${e.target.result})`;
            document.getElementById("bg-avatar").style.backgroundSize = `cover`;
        };

        other.readAsDataURL(btnbg.files[0]);
    }
}



// btncom.onchange = (e) => {
//     readURL(e.target)
// }

// btncom.addEventListener('click', function() {
//     console.log(btncom);
// })


// function readURL(btncom) {
//     if (btncom.files && btncom.files[0]) {
//         var old = new FileReader();
//         old.onload = function (e) {
//             // console.log(e.target.result);
//             document.getElementById("com-bg").style.background = `url(${e.target.result})`;
//             document.getElementById("com-bg").style.backgroundSize = `cover`;
//         };

//         old.readAsDataURL(btncom.files[0]);
//     }
// }







// btnbg.addEventListener('click', function() {
    
// })
