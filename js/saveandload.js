// SAVE and LOAD


// INSTRUCTIONS VIEW
var saveData=function(){
    // creating HTML elements for content
    let column1=document.getElementById("column1")
    column1.style="";
    let textHTML=`
    <h2>Save in browser local storage</h2>
    <div class="buttonsDiv">
        <button onclick="saveToLocalStorage()">Save Local</button>
        <div class="autosaveDiv">
        <label for="autosave">Autosave on exit:</label> <input type="checkbox" id="autosave" name="autosave"> 
        </div>
    </div>
    <h2>Save as CSV </h2> 
    `;
    column1.innerHTML=textHTML;
    let column2=document.getElementById("column2");
    
    // HIDE SIDEBAR
    column1.style="grid-column: 1 / span 2";
    column2.hidden=true;
    // column2.style="width:25%";
    
    
    // AUTOSAVE CHECKBOX CONTROLS
    let checkbox = document.getElementById("autosave")
    checkbox.oninput = ()=>{
        let autosaveBtn = document.getElementById("autosave")
        if(autosaveBtn.checked ===true){
            autosaveToggle = true;
            console.log("Autosave:on");
        }
        else{
            autosaveToggle = false;
            console.log("Autosave; off");
        }
    };

    // BUTTONS DIV
    let buttonsDiv= document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");


    // DOWNLOAD CSV BUTTON
    let savebutton=document.createElement('button');
    savebutton.innerText="Save CSV";
    savebutton.onclick=function(){
        let output=[['Nurse no', 'Nurse name', 'Ward no', 'Ward allocated']];
        for(let i=0;i<nurseNames.length;i++){
            output[i+1]=[i+1,nurseNames[i],nurses[i].allotment,wardNames[nurses[i].allotment]];
            
        }
        console.log(output)
        download_csv(output);
    };
    buttonsDiv.appendChild(savebutton);

    // PRINT PDF BUTTON
    tablePrintButton=document.createElement("button");
    tablePrintButton.onclick=function(){PrintElem("saveTableDiv")};
    tablePrintButton.innerText="Print PDF";
    buttonsDiv.appendChild(tablePrintButton);



    // ADD BUTTONS DIV TO COLUMN1
    column1.appendChild(buttonsDiv);
    
    
    
    // PRINT DATA TABLE ON SCREEN
    print_table();
    


    
    
    
    // creating HTML elements for content
    // var column2=document.getElementById("column2")
    // column2.innerHTML="Sidebar <br>";
    var sidebar=document.createElement("div");
    sidebar.id="sidebar";
    sidebar.innerHTML="";
    column2.appendChild(sidebar);
    
    
  
    
}

// FUNCTION SPACE

function download_csv(out) {
    // var output=[];
    // for(let i=0;i<nurseNames.length;i++){
    //     output[i]=[i,nurseNames[i],nurses[i].allotment,wardNames[nurses[i].allotment]];
        
    // }
    // console.log(output)
    
    // var csv = 'No,Nurse,Wardno, Allotment\n';
    var csv='';
    out.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    // var date= new Date;
    hiddenElement.download = 'nurse_schedule.csv';
    hiddenElement.click();
}


function print_table(){
    var tableDiv=document.createElement("div");
    tableDiv.innerHTML="";
    tableDiv.id="saveTableDiv";
    let tableElement=document.createElement("table");
    
    let tableheader=document.createElement("tr");
    tableheader.innerHTML="<th>S.No.</th><th>Name</th><th>Allotment</th>";
    tableElement.appendChild(tableheader);
    let thisRow  
    for(let i=0;i<nurseNames.length;i++){
        
        thisRow=document.createElement("tr");// create row
        tableElement.appendChild(thisRow); // add row
        
        thisCell=document.createElement("td"); // create cell
        thisRow.appendChild(thisCell); // add cell 
        thisCell.innerText=(i+1).toString(); // enter cell 1 text
        
        thisCell=document.createElement("td"); // create cell
        thisRow.appendChild(thisCell); // add cell 
        thisCell.innerText=nurseNames[i]; // enter cell 1 text
        
        thisCell=document.createElement("td"); // create cell
        thisRow.appendChild(thisCell); // add cell 
        thisCell.innerText=wardNames[nurses[i].allotment]; // enter cell 1 text
        
        tableElement.appendChild(thisRow);
        
    }
    tableDiv.appendChild(tableElement);
    column1.appendChild(tableDiv);
    
    //GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br>"
    column1.appendChild(gap);

    // Table print button

    tablePrintButton=document.createElement("button");
    tablePrintButton.onclick=function(){PrintElem("saveTableDiv")};
    tablePrintButton.innerText="Print this table";
    
    column1.appendChild(tablePrintButton);
    
    
}



function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    
    mywindow.document.write('<html><head><title>' + "Nurse schedule"  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + "Nurse schedule"  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');
    
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    
    mywindow.print();
    // mywindow.close();
    
    return true;
}
