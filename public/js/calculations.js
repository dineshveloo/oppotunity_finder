const ProcessModel = mongoose.model('Process');
// const express = require("express");
// const mongoose = require("mongoose");
// const router=express.Router();

function calculate() {
    var myBox1 = document.getElementById('mv').value; 
    var myBox2 = document.getElementById('aht').value;
    var result = document.getElementById('fte');  
    var myResult = myBox1 * myBox2;
    var myyResult = myResult/10080;
    var myyyResult = Math.ceil(myyResult);
    result.value = myyyResult;
    fte_benifit();

    
};
function automation(){
    var selObj  = document.getElementById('docpre');
    var selValue = selObj.options[selObj.selectedIndex].value;
    document.getElementById("Ar").value = selValue*100;
    fte_benifit();

};

function ap(){
    var selObj1  = document.getElementById("rbased");
    var selValue1 = selObj1.options[selObj1.selectedIndex].value;
    var arpa = document.getElementById('arpa').value;
    var arpa1 = arpa/100;
    var crpa = document.getElementById('crpa').value;
    var crpa1 = crpa/100;
    var result1 = (arpa1*selValue1*100)+(crpa1*(crpa/2));
    result2 = result1.toFixed(2);
    // var result2 = crpa/2;
    // var result3 = crpa*result2;
    // var result4 = result1+result3;
   
    
    document.getElementById("apot").value = result2;
    fte_benifit();

}
function fte_benifit(){
    var ap = document.getElementById('apot').value/100;
    var fte = document.getElementById('fte').value;
    var resulta = document.getElementById('fteb');
    var result2 = ap*fte;
    var final = Math.ceil(result2);
    resulta.value = final;  

}
function ValidateRange() {
    var value = parseInt(document.getElementById("arpa").value);
    if (value < 0 || value > 100) {
        alert("Please enter number between 0 and 100");
        return false;
    }
    return true;
}
function ValidateRange1() {
    var value = parseInt(document.getElementById("crpa").value);
    if (value < 0 || value > 100) {
        alert("Please enter number between 0 and 100");
        return false;
    }
    return true;
}
// function isAlphabet(evt){
//     var charCode = (evt.which) ? evt.which : evt.keyCode
//    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)){
//        alert("Please enter alphabets as input")
      
      
//           return false;
//           return true;  
//   }
  
// }
function isNumberKey(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)){
            alert("Please enter an integer")
        
        
            return false;
            return true;
        
    }
        
    } 
    function isAlphabet(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
          if (!(charCode > 31 && (charCode < 48 || charCode > 57))){
              alert("Please enter valid text")
          
          
              return false;
              
          return true;
      }
      
      } 
      function GetSelected() {
        //Create an Array.
        console.log("i am in get selcted func")
        var selectedProcess = new Array();
    console.log("i am inside getselected function")
        //Reference the Table.
        var processes = document.getElementById("processes");
    
        //Reference all the CheckBoxes in Table.
        var chks = processes.getElementsByTagName("INPUT");
    
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selectedProcess.push(chks[i].value);
            }
        }
    
        //Display the selected CheckBox values.
        if (selectedProcess.length > 0) {
            fetch('/addSelectedProcess', {method : 'POST'})
            .then(function(response) {
                if(response.ok) {
                  console.log('Process was recorded');
                  return;
                }
                throw new Error('Request failed.');
              })
              .catch(function(error) {
                console.log(error);
              });
        }
    window.history.back();
    }
      function goBack() {
          
        window.history.back();
      }
      
      function validnum(a) { 
        if(a < 0 || a > 100) 
            return false;
        else 
            return true;
    } 
    function validOrPunchTheUser(inputElement) {
        if(!validnum(inputElement.value)) {
            window.alert('Please enter the value between 0 to 100'); // punch the user
            inputElement.value = ""; // take away their things
        }
    }

    function getprocessid(){
        var cname  = document.getElementById('clientName').value;
        var subbusunit  = document.getElementById('sub_buss_unit').value;
        console.log(cname);
        var query={clientName:cname,Sub_Buss_Unit:subbusunit}
        ProcessModel.find({query},(err,doc)=>{
            console.log("i am in getprocessid function")
            // console.log(doc);
            if(doc.length!=0){
                if(!err)
                {
                    // res.render("processviewById",{viewtitle:doc[0].Proc_Id});
                    document.getElementById('procid').value=doc[0].Proc_Id;
                }
            }
            else
            {
                res.render("processviewById",{viewtitle:"there is no proccess id with the above values"});
            }
        });
    }
    
    function clientName() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
    
      function clientName2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
    


      function businessunit() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("businessunitinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

      function businessunit2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("businessunitinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }


      function subbusinessunit() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("subbusinessunitinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

      function subbusinessunit2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("subbusinessunitinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }


      function processname() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processnameinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[3];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

      function processname2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processnameinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[3];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }


      function processid() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processidinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }

      function processid2() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("processidinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("processes");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
      // function processId() {
      //   var input, filter, table, tr, td, i, txtValue;
      //   input = document.getElementById("processIdinput");
      //   filter = input.value.toUpperCase();
      //   table = document.getElementById("processes");
      //   tr = table.getElementsByTagName("tr");
      //   for (i = 0; i < tr.length; i++) {
      //     td = tr[i].getElementsByTagName("td")[0];
      //     if (td) {
      //       txtValue = td.textContent || td.innerText;
      //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //         tr[i].style.display = "";
      //       } else {
      //         tr[i].style.display = "none";
      //       }
      //     }       
      //   }
      // }

      //  function complexity() {
      //       var input, filter, table, tr, td, i, txtValue;
      //       input = document.getElementById("complexityinput");
      //       filter = input.value.toUpperCase();
      //       table = document.getElementById("processes");
      //       tr = table.getElementsByTagName("tr");
      //       for (i = 0; i < tr.length; i++) {
      //         td = tr[i].getElementsByTagName("td")[1];
      //         if (td) {
      //           txtValue = td.textContent || td.innerText;
      //           if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //             tr[i].style.display = "";
      //           } else {
      //             tr[i].style.display = "none";
      //           }
      //         }       
      //       }
      //     }
    
    
      //     function quadrant() {
      //       var input, filter, table, tr, td, i, txtValue;
      //       input = document.getElementById("quadrantinput");
      //       filter = input.value.toUpperCase();
      //       table = document.getElementById("processes");
      //       tr = table.getElementsByTagName("tr");
      //       for (i = 0; i < tr.length; i++) {
      //         td = tr[i].getElementsByTagName("td")[2];
      //         if (td) {
      //           txtValue = td.textContent || td.innerText;
      //           if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //             tr[i].style.display = "";
      //           } else {
      //             tr[i].style.display = "none";
      //           }
      //         }       
      //       }
      //     }
    
          function classification() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("classificationinput");
            filter = input.value.toUpperCase();
            table = document.getElementById("processes");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[5];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
          }
    
          // function selectprocess() {
          //   var input, filter, table, tr, td, i, txtValue;
          //   input = document.getElementById("selectprocessinput");
          //   filter = input.value.toUpperCase();
          //   table = document.getElementById("processes");
          //   tr = table.getElementsByTagName("tr");
          //   for (i = 0; i < tr.length; i++) {
          //     td = tr[i].getElementsByTagName("td")[4];
          //     if (td) {
          //       txtValue = td.textContent || td.innerText;
          //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
          //         tr[i].style.display = "";
          //       } else {
          //         tr[i].style.display = "none";
          //       }
          //     }
          //   }
          // }