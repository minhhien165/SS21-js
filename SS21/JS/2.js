let a = prompt("nhập vào một số bất kỳ");

if (!isNaN(a)) {
    if (a % 2 == 0) {
        console.log("số chẵn");
    } else {
        console.log("số lẻ");   
    }     
} else {
    console.log("không hợp lệ");
}
