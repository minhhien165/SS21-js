let weight = prompt("Nhập cân nặng (kg): ");
let height = prompt("Nhập chiều cao (m): ");
let bmi = weight / (height ** 2);
alert(`Chỉ số BMI của bạn là ${bmi.toFixed(2)}.`);

if (bmi < 18.5) {
  alert("gầy.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  alert("bình thường.");
} else if (bmi >= 25) {
  alert("thừa cân.");
} else if (bmi >= 25 && bmi <= 29.9){
  alert("tiền béo phì.");
} else if (bmi >= 30 && bmi <= 34.9) {
  alert("béo phì độ 1");  
} else if (bmi >= 35 && bmi <= 39.9) {
  alert("béo phì độ 2");
} else {
  alert("béo phì độ 3");  
}