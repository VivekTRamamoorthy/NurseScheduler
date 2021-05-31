
// EDIT DATA VIEW
var editData=function(){
    // creating HTML elements for column 1
    var column1=document.getElementById("column1")
    column1.innerHTML="<h2>Schedule</h2> <br>";
    var content=document.createElement("div");
    content.id="content";
    column1.appendChild(content);
    
    // creating HTML elements for column 2
    var column2=document.getElementById("column2")
    
    // HIDE SIDEBAR
    column1.style="width:auto";
    column2.hidden=true;
    
    
    // UPDATE BUTTON
    updateButton=document.createElement("button");
    updateButton.innerText="UPDATE";
    updateButton.onclick=function(){updateNurses();}
    content.appendChild(updateButton);
    
    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br>"
    content.appendChild(gap);
    
    // HEADING FOR NURSE EDIT
    var nurseTable=document.createElement("table");
    var nurseTableDiv=document.createElement("div");
    nurseTableDiv.classList.add("tableEditDiv")
    nurseTableDiv.innerHTML="EDIT NURSES: <br>"
    nurseTableDiv.appendChild(nurseTable);

    content.appendChild(nurseTableDiv);
    var heading=document.createElement("tr");
    heading.innerHTML="<th>No</th><th>Name</th><th>Phone number</th>";
    nurseTable.appendChild(heading)
    
    // EDIT NURSES TABLE
    for(let i=0;i<nurseNames.length;i++){
        
        // ADDING INPUT FOR NURSE NAMES
        thisRow=document.createElement("tr");
        // Nurse No
        thisCell=document.createElement("td");
        thisRow.appendChild(thisCell);
        thisCell.innerText=(i+1).toString();
        // Nurse Name (editable)
        thisCell=document.createElement("td");
        nurseNameInput=document.createElement("input");
        nurseNameInput.value=nurses[i].name;
        nurseNameInput.id="nurseNameInput"+i.toString();
        thisCell.appendChild(nurseNameInput);
        thisRow.appendChild(thisCell);
        // Nurse Phone number (editable)
        thisCell=document.createElement("td");
        nursePhoneInput=document.createElement("input");
        nursePhoneInput.value=nurses[i].phone;
        nursePhoneInput.id="nursePhoneInput"+i.toString();
        thisCell.appendChild(nursePhoneInput);
        thisRow.appendChild(thisCell);
        
        nurseTable.appendChild(thisRow)
    }

    // GAP
    var gap=document.createElement("div");
    gap.innerHTML="<br><br><br>"; gap.style=" display:block;  overflow:auto;   height:auto;    width:95vw;";
    content.appendChild(gap);
    
     // HEADING FOR WARD EDIT
     var wardTable=document.createElement("table");
     var wardTableDiv=document.createElement("div");
     wardTableDiv.classList.add("tableEditDiv");
     wardTableDiv.innerHTML="EDIT WARDS: <br>"
     wardTableDiv.appendChild(wardTable);
 
     content.appendChild(wardTableDiv);
     var heading=document.createElement("tr");
     heading.innerHTML="<th>No</th><th>Ward</th><th>Shifts</th>";
     wardTable.appendChild(heading)
     
     // EDIT WARDS TABLE
     for(let i=0;i<wardNames.length;i++){
         
         // ADDING INPUT FOR WARD NAMES
         thisRow=document.createElement("tr");
         // WARD No
         thisCell=document.createElement("td");
         thisRow.appendChild(thisCell);
         thisCell.innerText=(i+1).toString();
         // WARD Name (editable)
         thisCell=document.createElement("td");
         wardNameInput=document.createElement("input");
         wardNameInput.value=wards[i].name;
         wardNameInput.id="wardNameInput"+i.toString();
         thisCell.appendChild(wardNameInput);
         thisRow.appendChild(thisCell);
        // Ward shifts (editable)
        thisCell=document.createElement("td");
        wardShiftSelect=document.createElement("select");
        wardShiftSelect.innerHTML="<option value='1'>1</option><option value='3'>3</option>"
        wardShiftSelect.value=wards[i].shifts;
        wardShiftSelect.id="wardShiftSelect"+i.toString();
        thisCell.appendChild(wardShiftSelect);
        thisRow.appendChild(thisCell);
         
         wardTable.appendChild(thisRow)
     }
}

function updateNurses(){
    for(let i=0;i<nurseNames.length;i++){
        // UPDATING INPUT FOR NURSE NAMES
        nurseNameInput=document.getElementById("nurseNameInput"+i.toString());
        nurseNames[i]=nurseNameInput.value;
        nurses[i].name=nurseNameInput.value;
    }
    console.log("Nurse names updated! :-)")
}

function updateWards(){
    for(let i=0;i<wardNames.length;i++){
        // UPDATING INPUT FOR WARD NAMES
        wardNameInput=document.getElementById("wardNameInput"+i.toString());
        wardNames[i]=wardNameInput.value;
        wards[i].name=wardNameInput.value;
        // UPDATING INPUT FOR WARD SHIFTS
        wardShiftSelect=document.getElementById("wardShiftSelect"+i.toString());
        wards[i].shifts=wardShiftSelect.value;
    }
    console.log("Wards names updated! :-)")
}

