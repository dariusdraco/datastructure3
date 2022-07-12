name_of_the_student_array = [];

function submit() {
var display_student_array = [];
for (var c=1;c<=4;c++)
{
    var name_of_the_student=document.getElementById("name_of_the_student_"+c).value;
    console.log(name_of_the_student)
    name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
var length_of_name_of_the_student_array = name_of_the_student_array.length;
console.log(length_of_name_of_the_student_array);
for (var d=0;d<length_of_name_of_the_student_array;d++)
{
    display_student_array.push("<h4> NAME- "+name_of_the_student_array[d]+"</h4>");
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML = display_student_array;
var remove_commas= display_student_array.join("  ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
name_of_the_student_array.sort()
console.log(name_of_the_student_array)
display_sorted=[]
var length_of_name_of_the_student_array = name_of_the_student_array.length;
console.log(length_of_name_of_the_student_array);
for (var d=0;d<length_of_name_of_the_student_array;d++)
{
    display_sorted.push("<h4> NAME- "+name_of_the_student_array[d]+"</h4>");
    console.log(display_sorted);
} var remove_commas= display_sorted.join("  ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas ;
}
function new_update() {
 document.getElementById("display_name_without_commas").innerHTML="<h1> "+name_of_the_student_array+" </h1>";
}

