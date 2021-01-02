function submit(){
// parseInt()
let Quizes = parseInt(document.getElementById("Quizes").value)
let Midterm = parseInt(document.getElementById("Midterm").value)
let FinalTest = parseInt(document.getElementById("FinalTest").value)
let Oral = parseInt(document.getElementById("Oral").value)
let total = (Quizes+Midterm+FinalTest+Oral)/4
// `Quizes :${Quizes}, +Midterm+FinalTest+Oral`

console.log(total)

document.getElementById("total_grades").innerHTML = total;

if (total >=90 && total <= 100)
{
    console.log("A")
    document.getElementById("final_grade").innerHTML = "A";
    var docs = document.getElementById("img");
    docs.setAttribute("src", "./img/A.gif");
docs.style.display = 'block';

}
else if (total >=80){
    document.getElementById("final_grade").innerHTML = "B";
    var docs = document.getElementById("img");
    docs.setAttribute("src", "./img/B.gif");
docs.style.display = 'block';
}
else if (total >=70){
    document.getElementById("final_grade").innerHTML = "C";
    var docs = document.getElementById("img");
    docs.setAttribute("src", "./img/C.gif");
docs.style.display = 'block';
}
else if (total >=60){
    document.getElementById("final_grade").innerHTML = "D";
    var docs = document.getElementById("img");
    docs.setAttribute("src", "./img/D.gif");
docs.style.display = 'block';
}else {
    document.getElementById("final_grade").innerHTML = "F";
    var docs = document.getElementById("img");
    docs.setAttribute("src", "./img/COVID F.gif");
docs.style.display = 'block';
}
}