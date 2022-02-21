var percentage= +prompt("Enter your percentage");
if(percentage >=80 && percentage <=100){
    alert("GRADE A+")
}
else if(percentage >=70 && percentage <=80){
    alert("GRADE A")
}
else if(percentage >=60 && percentage <=70){
    alert("GRADE B")
}
else if(percentage >=50 && percentage <=60){
    alert("GRADE C")
}
else if(percentage >=40 && percentage <=50){
    alert("GRADE D")
}
else if(percentage >=30 && percentage <=40){
    alert("GRADE F")
}
else{
    alert("Wrong Input")
}