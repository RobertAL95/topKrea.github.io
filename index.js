let progress1= document.getElementById("file1");
let progress2= document.getElementById("file2");
let progress3= document.getElementById("file3");


function changeProgress(value1, value2, value3){
        console.log(value1 + "%");
        progress1.value = value1;
        console.log(value2 + "%");
        progress2.value = value2;
        console.log(value3 + "%");
        progress3.value3 = value3;
    }



changeProgress(10, 50, 90);