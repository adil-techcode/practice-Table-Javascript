var body =document.childNodes[1].childNodes[2];
var table=document.createElement("table"); // Table 
body.appendChild(table);
var trow1=document.createElement("tr"); // Table Row 1
table.appendChild(trow1);
var trow1Col1=document.createElement("th");// Table Head Column 1
trow1.appendChild(trow1Col1);
var trow1Col1text=document.createTextNode("Subjects"); // Table Head Column 1 Text 
trow1Col1.appendChild(trow1Col1text);
// 
var trow1Col2=document.createElement("th");// Table Head Column 2
trow1.appendChild(trow1Col2);
var trow1Col2text=document.createTextNode("Marks"); // Table Head Column 2 Text
trow1Col2.appendChild(trow1Col2text);
// 
var trow1Col3=document.createElement("th");// Table Head Column 3
trow1.appendChild(trow1Col3);
var trow1Col3row1 = document.createElement("tr"); // Table Head Column 3 Sub Row 1
trow1Col3.appendChild(trow1Col3row1);
var trow1Col3row1Col1=document.createElement("th") // Table Head Column 3 Sub Row 1 Col1
trow1Col3row1.appendChild( trow1Col3row1Col1 )  
var trow1Col3row1Col1text=document.createTextNode("Marks Obtained") // Table Head Column 3 Sub Row 1 Col1 Text
trow1Col3row1Col1.appendChild(trow1Col3row1Col1text);
// //
var trow1Col3row2 = document.createElement("tr");  // Table Head Column 3 Sub Row 2
trow1Col3.appendChild(trow1Col3row2);

var trow1Col3row2Col1=document.createElement("th")  // Table Head Column 3 Sub Row 2 Col1
trow1Col3row2.appendChild( trow1Col3row2Col1)  
var trow1Col3row2Col1row1= document.createElement("tr");
trow1Col3row2Col1.appendChild(trow1Col3row2Col1row1)
var trow1Col3row2Col1row1col1=document.createElement("th") ;
trow1Col3row2Col1row1.appendChild(trow1Col3row2Col1row1col1);
var trow1Col3row2Col1row1col1text = document.createTextNode("Part I")
trow1Col3row2Col1row1col1.appendChild(trow1Col3row2Col1row1col1text)
// // // 
var trow1Col3row2Col1row2= document.createElement("tr");
trow1Col3row2Col1.appendChild(trow1Col3row2Col1row2)
var trow1Col3row2Col1row2col1=document.createElement("th") ;
trow1Col3row2Col1row2.appendChild(trow1Col3row2Col1row2col1);
var trow1Col3row2Col1row2col1text = document.createTextNode("Theory")
trow1Col3row2Col1row2col1.appendChild(trow1Col3row2Col1row2col1text)
var trow1Col3row2Col1row2col2=document.createElement("th") ;
trow1Col3row2Col1row2.appendChild(trow1Col3row2Col1row2col2);
var trow1Col3row2Col1row2col2text = document.createTextNode("Practical")
trow1Col3row2Col1row2col2.appendChild(trow1Col3row2Col1row2col2text)



var trow1Col3row2Col2=document.createElement("th") // Table Head Column 3 Sub Row 2 Col2
trow1Col3row2.appendChild( trow1Col3row2Col2)  
var trow1Col3row2Col2row1= document.createElement("tr");
trow1Col3row2Col2.appendChild(trow1Col3row2Col2row1)
var trow1Col3row2Col2row1col1=document.createElement("th") ;
trow1Col3row2Col2row1.appendChild(trow1Col3row2Col2row1col1);
var trow1Col3row2Col2row1col1text = document.createTextNode("Part II")
trow1Col3row2Col2row1col1.appendChild(trow1Col3row2Col2row1col1text)
// // // 
var trow1Col3row2Col2row2= document.createElement("tr");
trow1Col3row2Col2.appendChild(trow1Col3row2Col2row2)
var trow1Col3row2Col2row2col1=document.createElement("th") ;
trow1Col3row2Col2row2.appendChild(trow1Col3row2Col2row2col1);
var trow1Col3row2Col2row2col1text = document.createTextNode("Theory")
trow1Col3row2Col2row2col1.appendChild(trow1Col3row2Col2row2col1text)
var trow1Col3row2Col2row2col2=document.createElement("th") ;
trow1Col3row2Col2row2.appendChild(trow1Col3row2Col2row2col2);
var trow1Col3row2Col2row2col2text = document.createTextNode("Practical")
trow1Col3row2Col2row2col2.appendChild(trow1Col3row2Col2row2col2text)









var trow1Col3row2Col3=document.createElement("th")  // Table Head Column 3 Sub Row 2 Col3
trow1Col3row2.appendChild( trow1Col3row2Col3)  
var trow1Col3row2Col3text=document.createTextNode("Total")
trow1Col3row2Col3.appendChild(trow1Col3row2Col3text)


var trow1Col3row2Col4=document.createElement("th")   // Table Head Column 3 Sub Row 2 Col4
trow1Col3row2.appendChild( trow1Col3row2Col4)
var trow1Col3row2Col4text=document.createTextNode("Marks in Words")
trow1Col3row2Col4.appendChild(trow1Col3row2Col4text)  





// Table Row 2
var trow2=document.createElement("tr")  // Table Row 2
table.appendChild(trow2);
var trow2Col1=document.createElement("td") // Table Row 2 Col 1
trow2.appendChild(trow2Col1);
var row2Col1text=document.createTextNode("English");
trow2Col1.appendChild(row2Col1text);
var trow2Col2=document.createElement("td") // Table Row 2 Col 2
trow2.appendChild(trow2Col2);
var row2Col2text=document.createTextNode("200");
trow2Col2.appendChild(row2Col2text);
var trow2Col3=document.createElement("td") // Table Row 2 Col 3
trow2.appendChild(trow2Col3);
//  Sub Row
var trow2Col3row=document.createElement("tr"); // Table Row 2 Col 3 Sub Row
trow2Col3.appendChild(trow2Col3row);
var  trow2Col3rowcol1=document.createElement("td"); // Table Row 2 Col 3 Sub Row Col 1
 trow2Col3row.appendChild(trow2Col3rowcol1);
// //
var trow2Col3rowcol1Col1 = document.createElement("td") ;
trow2Col3rowcol1.appendChild(trow2Col3rowcol1Col1);
var trow2Col3rowcol1Col1text=document.createTextNode("69")
trow2Col3rowcol1Col1.appendChild(trow2Col3rowcol1Col1text);
// var trow2Col3rowcol1Col2 = document.createElement("td") ;
// trow2Col3rowcol1.appendChild(trow2Col3rowcol1Col2);
// var trow2Col3rowcol1Col2text=document.createTextNode("--")
// trow2Col3rowcol1Col2.appendChild(trow2Col3rowcol1Col2text);







 var  trow2Col3rowcol2=document.createElement("td"); // Table Row 2 Col 3 Sub Row Col 2
 trow2Col3row.appendChild(trow2Col3rowcol2);
// //
var trow2Col3rowcol2Col1 = document.createElement("td") ;
trow2Col3rowcol2.appendChild(trow2Col3rowcol2Col1);
trow2Col3rowcol2Col1.setAttribute("colspan","8")
var trow2Col3rowcol2Col1text=document.createTextNode("73")
trow2Col3rowcol2Col1.appendChild(trow2Col3rowcol2Col1text);
var trow2Col3rowcol2Col2 = document.createElement("td") ;
trow2Col3rowcol2.appendChild(trow2Col3rowcol2Col2);
var trow2Col3rowcol2Col2text=document.createTextNode("--")
trow2Col3rowcol2Col2.appendChild(trow2Col3rowcol2Col2text);




 var  trow2Col3rowcol3=document.createElement("td"); // Table Row 2 Col 3 Sub Row Col 3
 trow2Col3row.appendChild(trow2Col3rowcol1);

 var  trow2Col3rowcol4=document.createElement("td"); // Table Row 2 Col 3 Sub Row Col 4
 trow2Col3row.appendChild(trow2Col3rowcol1);








console.log(body);