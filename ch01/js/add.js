let n1 = prompt("첫 번째 수 입력: ", "1~50");
let n2 = prompt("두 번째 수 입력: ", "1~50");
let sum_v;

//실수로 변환
sum_v = parseInt(n1) + parseInt(n2);

//소수점 자리수 설정함수 - 객체 .toFixed(2)
document.write("두 수의 합: " + sum_v.toFixed(2));