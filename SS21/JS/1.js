let namsinh = prompt("Bạn sinh năm bao nhiêu");
if (!isNaN(namsinh) ) {
    let answer = 2024 - namsinh;
    console.log(answer);
} else {
    console.log("giá trị không hợp lệ");
}