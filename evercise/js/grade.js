let score = 55;
let grade;

if(score <= 100 && score >=90){
grade = "A";
}
else if(score <= 90 && score >=80){
grade = "B";
}
else if(score <= 80 && score >=70){
grade = "C";
}
else if(score <= 70 && score >=60){
grade = "D";
}
else{
grade = "F";
}
document.write("학점은 <span class='access'>" + grade + "</span> 입니다.");