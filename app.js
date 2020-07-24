// Chap 38-42

// Question 1
// document.write("Question 1 \n")
// var a = 7;
// var b = 2;
// var value = Math.pow(a, b);
// document.write("First Test Value : " + value );

// // Question 2
// document.write("Question 2 \n")

// function checkFunction () {
//     var year = document.getElementById("year").value;

//     document.getElementById("Answer").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// } 

// // Question 3
// var a = 5;
// var b = 6;
// var c = 10;

// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2

// // S:
// var s = ( a + b + c) / 2;
// console.log(s);


// // area:
// var sa = s -a ;
// console.log(sa);

// var sb = s - b;
// console.log(sb);

// var sc = (s-c);
// console.log(sc);


// var area = (s * (sa)) * (sb) * (sc);
// document.write(area);


// // Question 4
// document.write("Question 4 \n")

// Urdu
// var urdu = [];
// for (i = 0; i < 3; i++) {
//     var urduMarks = window.prompt(("Enter marks out of hundred:"));
//     urdu.push(urduMarks);

// };

// var maths = [];
// for (i = 0; i < 3; i++) {
//     var mathMarks = window.prompt(("Enter marks out of hundred:"));
//     maths.push(mathMarks);

// };

// var physics = [];
// for (i = 0; i < 3; i++) {
//     var physicsMarks = window.prompt(("Enter marks out of hundred:"));
//     physics.push(physicsMarks);

// };

// function main() {


//     function average() {

//         var student1 = (parseInt(urdu[0]) + parseInt(maths[0]) + parseInt(physics[0])) / 3;
//         console.log(student1);

//         var student2 = (parseInt(urdu[1]) + parseInt(maths[1]) + parseInt(physics[1])) / 3;
//         console.log(student2);

//         var student3 = (parseInt(urdu[2]) + parseInt(maths[2]) + parseInt(physics[2])) / 3;
//         console.log(student3);

//     }

//     average();

//     function percentage() {

//         var total1 = ((parseInt(urdu[0]) + parseInt(maths[0]) + parseInt(physics[0])));
//         var student1 = (total1 / 300 ) * 100;
//         console.log(student1);


//         var total2 = ((parseInt(urdu[1]) + parseInt(maths[1]) + parseInt(physics[1])));
//         var student2 = (total2 / 300 ) * 100;
//         console.log(student1);



//         var total3 = ((parseInt(urdu[2]) + parseInt(maths[2]) + parseInt(physics[2])));
//         var student3 = (total3 / 300 ) * 100;
//         console.log(student1);




//     }

//     percentage();

// }

// main();



// Question 5

// task 3
// function indexof() {
//     var test = "string"
//     var search = "n";
//     var index;
//     for (var i = 0; i <= test.length; i++) {

//         if (test[i] === search) {
//             index = i;
//         }
//     }
//     return index;
// }
// document.write("index is " + indexof());


// Question 6

// var txt = "hassan mughal";
// function vowelEraser(txt) {
//     for (var i = 0; i < txt.length; i++) {
//         if (txt[i] == "a"  ||txt[i] == "A"  ||txt[i] == "e"  ||txt[i] == "E"  ||txt[i] == "i" || txt[i] == "I" || txt[i] == "o" || txt[i] == "O" || txt[i] == "u" || txt[i] == "U") {
//             var range = txt.slice(0, i);
//             // console.log(range);
//         }
//         else {
//             document.write(txt[i])
//         }
//     }
// }
// vowelEraser(txt);
// console.log(txt);


// Question 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
// console.log(findOccurrences());



// Question 8

// var dis = prompt("Enter distance between two cities in KM")


// function kmTOm (dis){
//     console.log("distance in meter"+dis*1000)
// }


// function kmTOft(dis){

//     console.log("distance in ft"+dis*3280.84)

// }

// function kmTOinch(dis){

//     console.log("distance in inch"+dis*39370.1)

// }

// function kmTOcm(dis){

//     console.log(""+dis*100000)
// }


// kmTOm(dis)
// kmTOft(dis)
// kmTOinch(dis)
// kmTOcm(dis)


// Question 9

// var a = parseInt( prompt("Enter your working hours: "))
// var b = a - 40
// var c = b*12
// document.write(c)

// Question 10

// var Amount = prompt("Please Enter Amount for Withdraw :");
// document.write("No of notes of 100 is: ", Math.floor( Amount / 100 ) ,"</br>" );
// document.write("No of notes of 50 is : " , Math.floor((Amount % 100) / 50) ,"</br>" );
// document.write("No of notes of 10 is : " , Math.floor(((Amount % 100) % 50) / 10),"</br>" );
// document.write("Amount still remaining is : ", Math.floor(((Amount % 100) % 50) % 10) ,"</br>"  );


//  // Chapter 43 - 48

// Question 1 

// function showAlert(){
//     alert("Hey ?")
// }

// Question 2 

// function purchase(){
//     alert("Thanks for purchasing phone from us :)")
// }

// Question 3 
// function myFunction(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
//   }

// Question 4 

// function changeImage(){
//     var gunImage = document.getElementById('gun');
//     gunImage.src = 'https://www.dw.com/image/38735983_303.jpg';
// }

// function originalImage(){
//     var gunImage = document.getElementById('gun');
//     gunImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJn5zhTP08FMqcM4mdOLCyHpg9Bv_W72z2vg&usqp=CAU';
// }

// Question 5 
// var clicks = 0;
// function incFunction() {

//     clicks += 1;
//     document.getElementById("counter").innerHTML = clicks;
// }
// var clicks = 0;
// function decFunction() {

//     clicks -= 1;
//     document.getElementById("counter").innerHTML = clicks;
// }



// // Chapter 49 - 52


// Question 1 
// function showMessage(){
//     var input1 = document.getElementById('1').value;
//     var input2 = document.getElementById('2').value;
//     var input3 = document.getElementById('3').value;
//     var input4 = document.getElementById('4').value;
//     var output = "<h1>Your Details</h1>" + "<br>" + "First Name: " + input1 + '<br> ' + "Last Name: " + input2 + '<br> '+ "Email: " + input3 + ' <br>'+ "Password: " + input4;
//     var a = document.getElementById('print').textContent = output;
//     document.write(a)
// }

// Question 2 
// function readMore(){
//     var text = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. Wikipedia"
//     var paragraph = document.getElementById('paragraph')
//     paragraph.innerHTML = text;
// }

// Question 3 
// function myFunction(r) {
//     var i = r.parentNode.parentNode.rowIndex;                               //Edit row ka mana krdia tha Sir ne :)
//     document.getElementById("myTable").deleteRow(i);
//   }



// // Chapter 52 - 57

// Question 1 

// var modal = document.getElementById("modal");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("modal-img");
// function iMg(){
//     modal.style.display = "block";
//     var a = modalImg.src = img.src;
//     a.getElementsByClassName('modal-open')
    
// }
// var span = document.getElementsByClassName("close")[0];

// function onClosedImagModal(){
//     modal.style.display = "none";
//    setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

// Question 2 
// function zoomIn(){
//     var a = document.getElementById('para')
//     a.className = 'bigfont'
    
// }
// function zoomOut(){
//     var a = document.getElementById('para')
//     a.className = 'smallfont'
    
// }



// // Chapter 58 - 67

// Question 1
// var render = document.getElementsByClassName("render");

// for(var a=0; a < 5; a++){
//     console.log(render[a].innerHTML)
// }


// Question 2 

// var a = document.getElementById('form-content').nodeType;
// console.log(a)

// var x = document.getElementById('lastName').nodeType;
// var y = document.getElementById('lastName').childNodes
// var z = document.getElementById('lastName').childNodes.nodeValue = 'Updated'
// console.log(x)
// console.log(y)
// console.log(z)

// var z = document.getElementById('main-content')
// var a = z.firstChild
// var b = z.lastChild
// console.log(a)
// console.log(b)

// var n = document.getElementById('lastName');
// var a = n.nextSibling
// var b = n.previousSibling;
// // console.log(a)
// console.log(b)

// var j = document.getElementById('email');
// var a = j.nodeType
// var b = j.parentNode
// console.log(a)
// console.log(b)
