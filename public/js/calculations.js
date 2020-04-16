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
    var documentation_value;
    switch(selValue) {
      case "No Documenation":
        documentation_value = 0.4;
        break;
      case "Partial Documentation":
        documentation_value = 0.6;
        break;
      case "Detailed Documentation":
        documentation_value = 0.8;
        break;
    }
    document.getElementById("Ar").value = documentation_value*100;
    fte_benifit();

};

function ap(){
    var selObj1  = document.getElementById("rbased");
    var rulebased_value_str = selObj1.options[selObj1.selectedIndex].value;
    var rulebased_value_int;
    switch(rulebased_value_str) {
      case "Low":
        rulebased_value_int = 0.2;
        break;
      case "Medium":
        rulebased_value_int = 0.5;
        break;
      case "High":
        rulebased_value_int = 0.8;
        break;
    }
    var arpa = document.getElementById('arpa').value;
    var arpa1 = arpa/100;
    var crpa = document.getElementById('crpa').value;
    var crpa1 = crpa/100;
    var result1 = (arpa1*rulebased_value_int*100)+(crpa1*(crpa/2));
    result2 = result1.toFixed(2);
    // var result2 = crpa/2;
    // var result3 = crpa*result2;
    // var result4 = result1+result3;
   
    
    document.getElementById("apot").value = result2;
    fte_benifit();

};
function fte_benifit(){
    var ap = document.getElementById('apot').value/100;
    var fte = document.getElementById('fte').value;
    var resulta = document.getElementById('fteb');
    var result2 = ap*fte;
    var final = Math.ceil(result2);
    resulta.value = final;  

};


// function funtional_point(){
//   var a = 2;
//   var b = 4;
//   var c = 4;
//   var d = 5;
//   var e = 0.5;
//   var f = 0.2;
//   var g = 4;
//   var h = 0.5;
//   var i = 4;
//   var j = 1;
//   var k = 0.5;
//   var l = 4;
//   var m = 2.5;
//   var n = 2.5;
//   var o = 10;
//   var p = 4;
//   var q = 2.5;
//   var r = 2.5;
//   var Num_of_apps = document.getElementById('Num_of_app').value;
//   var Num_of_mainframe = document.getElementById('Num_of_mainfram').value;
//   var Num_of_Citrix = document.getElementById('Num_of_Citri').value;
//   var Third_party_sites = document.getElementById('Third_party_site');
//   var Third_party_sites_str = Third_party_sites.options[Third_party_sites.selectedIndex].value;
//   var Third_party_sites_int;
//   switch(Third_party_sites_str){
//     case "Yes":
//         Third_party_sites_int = 1;
//       break;
//     case "No":
//         Third_party_sites_int = 0;
//       break;
    
//   }
//   var Num_of_scrs = document.getElementById('Num_of_scr').value;
//   var Num_of_proccessteps = document.getElementById('subject').value;
//   var Num_of_Scenarios = document.getElementById('Num_of_Scenario').value;
//   var Num_of_Decpoints = document.getElementById('Num_of_Decpoint').value;
//   var Num_of_standardinput = document.getElementById('Num_of_standardinpu').value;
//   var Intr_dynamic_table = document.getElementById('Intr_dynamic_tabl');
//   var Intr_dynamic_table_str = Intr_dynamic_table.options[Intr_dynamic_table.selectedIndex].value;
//   var Intr_dynamic_table_int;
//   switch(Intr_dynamic_table_str){
//     case "Yes":
//       Intr_dynamic_table_int = 1;
//       break;
//     case "No":
//       Intr_dynamic_table_int = 0;
//       break;
    
//   }
//   var Num_of_basedcontrols = document.getElementById('Num_of_basedcontrol').value;
//   var Num_of_accessprofiles = document.getElementById('Num_of_accessprofile').value;
//   var Num_of_browsersupp = document.getElementById('Num_of_browsersup').value;
//   var Operation_stability = document.getElementById('Operation_stabilit');
//   var Operation_stability_str = Operation_stability.options[Operation_stability.selectedIndex].value;
//   var Operation_stability_int;
//   switch(Operation_stability_str){
//     case "Planned Downtime":
//       Operation_stability_int = 0;
//       break;
//     case "Once in a month":
//       Operation_stability_int = 1;
//       break;
    
//   }

//   var Freq_change = document.getElementById('Freq_chang');
//   var Freq_change_str =Freq_change.options[Freq_change.selectedIndex].value;
//   var Freq_change_int;
//   switch(Freq_change_str){
//     case "Frequently":
//       Freq_change_int = 1;
//       break;
//     case "Infrequently":
//       Freq_change_int = 0;
//       break;
    
//   }
//   var Svc_lvl_agr = document.getElementById('Svc_lvl_ag');
//   var Svc_lvl_agr_str =Svc_lvl_agr.options[Svc_lvl_agr.selectedIndex].value;
//   var Svc_lvl_agr_int;
//   switch(Svc_lvl_agr_str){
//     case "Less than 8 hrs":
//       Svc_lvl_agr_int = 2;
//       break;
//     case "Less than or equal to 24 hrs":
//       Svc_lvl_agr_int = 1;
//       break;
//     case "More than 24 hrs":
//         Svc_lvl_agr_int = 0;
//   }
//   var Num_of_getsignoff = document.getElementById('Num_of_getsignof').value;
//   var Num_of_Envsetup = document.getElementById('Num_of_Envsetu').value;
//   var Func_point = document.getElementById('Func_poin');
//   var aa = a * Num_of_apps;
//   var bm = b * Num_of_mainframe;
//   var cc = c * Num_of_Citrix;
//   var dt = d * Third_party_sites_int;
//   var es = e * Num_of_scrs;
//   var fp = f * Num_of_proccessteps;
//   var gs = g * Num_of_Scenarios;
//   var hd = h * Num_of_Decpoints;
//   var is = i * Num_of_standardinput;
//   var jd = j * Intr_dynamic_table_int;
//   var kb = k * Num_of_basedcontrols;
//   var la = l * Num_of_accessprofiles;
//   var mb = m * Num_of_browsersupp;
//   var no = n * Operation_stability_int;
//   var ofc = o * Freq_change_int;
//   var ps = p * Svc_lvl_agr_int;
//   var qg = q * Num_of_getsignoff;
//   var re = r * Num_of_Envsetup;
//   var output = aa + bm + cc + dt + es + fp + gs + hd + is + jd + kb + la + mb + no + ofc + ps + qg + re;
//   Func_point.value = output;
//   effort();
//   quadrant();
// };
// function monthly_savings(){
//   var monthlyvolume = document.getElementById('mv').value; 
//   var aht = document.getElementById('aht').value;
//   var app = document.getElementById('apot').value;
//   var mes = document.getElementById('Monthly_effsavin');
//   var output = aht * app * monthlyvolume;
//   var output1 = output/60;
//   var output2 = Math.ceil(output1);
//   mes.value = output2;
//   quadrant();
// };

// function effort(){
//   var xaxis = document.getElementById('Func_poin').value;
//   var yaxis = document.getElementById('Effor');
//   var yout;
//   switch(true){
//     case ((xaxis >= 0) && (xaxis <= 10)):
//       yout = 4;
//       break;
//     case ((xaxis >= 11) && (xaxis <= 20)):
//         yout = 8;
//         break;
//     case ((xaxis >= 21) && (xaxis <= 40)):
//             yout = 12;
//             break;
//      case ((xaxis >= 41) && (xaxis <= 60)):
//                 yout = 16;
//                 break;
//      case ((xaxis >= 61) && (xaxis <= 110)):
//                 yout = 20;
//                 break;
//   }
//   yaxis.value = yout;
  
 
// };

// function quadrant(){
//   var xaxis = document.getElementById('Func_poin').value;
//   var yaxis = document.getElementById('Effor').value;
  
//   var qua = document.getElementById('Quadran');
//   var quaout;
//   switch(true){
//     case ((xaxis > 55) && (yaxis > 1500)):
//         quaout = "Big Bets";
//       break;
//     case ((xaxis > 55) && (yaxis < 1500)):
//         quaout = "Defer";
//         break;
//     case ((xaxis < 55) && (yaxis < 1500)):
//         quaout = "Low Hanging Fruits";
//             break;
//      case ((xaxis < 55) && (yaxis > 1500)):
//         quaout = "Quick Wins";
//                 break;
     
//   }

// qua.value = quaout;


// };

function ValidateRange() {
    var value = parseInt(document.getElementById("arpa").value);
    if (value < 0 || value > 100) {
        alert("Please enter number between 0 and 100");
        return false;
    }
    return true;
};
function ValidateRange1() {
    var value = parseInt(document.getElementById("crpa").value);
    if (value < 0 || value > 100) {
        alert("Please enter number between 0 and 100");
        return false;
    }
    return true;
};
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
        
    }; 
    function isAlphabet(evt){
        var charCode = (evt.which) ? evt.which : evt.keyCode
          if (!(charCode > 31 && (charCode < 48 || charCode > 57))){
              alert("Please enter valid text")
          
          
              return false;
              
          return true;
      }
      
      } ;
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
    };
      function goBack() {
          
        window.history.back();
      };
      
      function validnum(a) { 
        if(a < 0 || a > 100) 
            return false;
        else 
            return true;
    } ;
    function validOrPunchTheUser(inputElement) {
        if(!validnum(inputElement.value)) {
            window.alert('Please enter the value between 0 to 100'); // punch the user
            inputElement.value = ""; // take away their things
        }
    };

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
    };
    
    function clientName() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("clientnameinput");
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
      };
    
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
      };
    


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
      };

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
      };


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
      };

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
      };


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
      };

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
      };


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
      };

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
      };
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
          };
    
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


        //   document.getElementById('edit').onclick = function() {
        //     document.getElementById('fte').readOnly =false;
        //  };

      


 