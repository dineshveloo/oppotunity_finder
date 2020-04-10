function funtional_point(){
    var a = 2;
    var b = 4;
    var c = 4;
    var d = 5;
    var e = 0.5;
    var f = 0.2;
    var g = 4;
    var h = 0.5;
    var i = 4;
    var j = 1;
    var k = 0.5;
    var l = 4;
    var m = 2.5;
    var n = 2.5;
    var o = 10;
    var p = 4;
    var q = 2.5;
    var r = 2.5;
    var numOfApps = document.getElementById('noa').value;
    var numOfMainframe = document.getElementById('nom').value;
    var numOfCitrix = document.getElementById('noc').value;
    var thirdPartySites = document.getElementById('tps');
    var thirdPartySites_str = thirdPartySites.options[thirdPartySites.selectedIndex].value;
    var thirdPartySites_int;
    switch(thirdPartySites_str){
      case "Yes":
        thirdPartySites_int = 1;
        break;
      case "No":
        thirdPartySites_int = 0;
        break;
      
    }
    var numOfScrs = document.getElementById('nos').value;
    var numOfProccessteps = document.getElementById('subject').value;
    var numOfScenarios = document.getElementById('nosc').value;
    var numOfDecpoints = document.getElementById('nod').value;
    var numOfStandardinput = document.getElementById('nost').value;
    var intrDynamicTable = document.getElementById('indt');
    var intrDynamicTable_str = intrDynamicTable.options[intrDynamicTable.selectedIndex].value;
    var intrDynamicTable_int;
    switch(intrDynamicTable_str){
      case "Yes":
        intrDynamicTable_int = 1;
        break;
      case "No":
        intrDynamicTable_int = 0;
        break;
      
    }
    var numOfBasedcontrols = document.getElementById('nob').value;
    var numOfAccessprofiles = document.getElementById('noap').value;
    var numOfBrowsersupp = document.getElementById('nbs').value;
    var operationStability = document.getElementById('opst');
    var operationStability_str = operationStability.options[operationStability.selectedIndex].value;
    var operationStability_int;
    switch(operationStability_str){
      case "Planned Downtime":
        operationStability_int = 0;
        break;
      case "Once in a month":
        operationStability_int = 1;
        break;
      
    }
  
    var freqChange = document.getElementById('freqch');
    var freqChange_str =freqChange.options[freqChange.selectedIndex].value;
    var freqChange_int;
    switch(freqChange_str){
      case "Frequently":
        freqChange_int = 1;
        break;
      case "Infrequently":
        freqChange_int = 0;
        break;
      
    }
    var svcLvlAgr = document.getElementById('svc');
    var svcLvlAgr_str =svcLvlAgr.options[svcLvlAgr.selectedIndex].value;
    var svcLvlAgr_int;
    switch(svcLvlAgr_str){
      case "Less than 8 hrs":
        svcLvlAgr_int = 2;
        break;
      case "Less than or equal to 24 hrs":
        svcLvlAgr_int = 1;
        break;
      case "More than 24 hrs":
          svcLvlAgr_int = 0;
    }
    var numOfGetsignoff = document.getElementById('nog').value;
    var numOfEnvsetup = document.getElementById('noes').value;
    var funcPoint = document.getElementById('funp');
    var A = a * numOfApps;
    var B = b * numOfMainframe;
    var C = c * numOfCitrix;
    var D = d * thirdPartySites_int;
    var E = e * numOfScrs;
    var F = f * numOfProccessteps;
    var G = g * numOfScenarios;
    var H = h * numOfDecpoints;
    var I = i * numOfStandardinput;
    var J = j * intrDynamicTable_int;
    var K = k * numOfBasedcontrols;
    var L = l * numOfAccessprofiles;
    var M = m * numOfBrowsersupp;
    var N = n * operationStability_int;
    var O = o * freqChange_int;
    var P = p * svcLvlAgr_int;
    var Q = q * numOfGetsignoff;
    var R = r * numOfEnvsetup;
    var output = A + B + C + D + E + F + G + H + I + J + K + L + M + N + O + P + Q + R;
    funcPoint.value = output;
    effort();
    quadrant();
  };
  function monthly_savings(){
    var monthlyvolume = document.getElementById('mv_2').value; 
    var aht = document.getElementById('aht_2').value;
    var app = document.getElementById('apot_2').value;
    var mes = document.getElementById('meffs');
    var output = aht * app * monthlyvolume;
    var output1 = output/60;
    var output2 = Math.ceil(output1);
    mes.value = output2;
    quadrant();
  };
  
  function effort(){
    var funcPoint = document.getElementById('funp').value;
    var efforts = document.getElementById('effo');
    var yout;
    if ((funcPoint >= 0) || (funcPoint <= 10)){
      yout = 4;
    }
    if ((funcPoint >= 11) || (funcPoint <= 20)){
      yout = 8;
    }
    if ((funcPoint >= 21) || (funcPoint <= 40)){
      yout = 12;
    }
    if ((funcPoint >= 41) || (funcPoint <= 60)){
      yout = 16;
    }
    if ((funcPoint >= 61) || (funcPoint <= 110)){
      yout = 20;
    }
    // switch(xaxis){
    //   case ((xaxis >= 0) && (xaxis <= 10)):
    //     yout = 4;
    //     break;
    //   case ((xaxis >= 11) && (xaxis <= 20)):
    //       yout = 8;
    //       break;
    //   case ((xaxis >= 21) && (xaxis <= 40)):
    //           yout = 12;
    //           break;
    //    case ((xaxis >= 41) && (xaxis <= 60)):
    //               yout = 16;
    //               break;
    //    case ((xaxis >= 61) && (xaxis <= 110)):
    //               yout = 20;
    //               break;
    // }
    efforts.value = yout;
    
   
  };
  
  function quadrant(){
    var funcPoint = document.getElementById('funp').value;
    var mes = document.getElementById('meffs').value;
    
    var qua = document.getElementById('qua');
    var quaout; 
    if ((funcPoint > 55) && (mes > 1500)) {
      quaout = "Big Bets";
    }
    if ((funcPoint > 55) && (mes < 1500)) {
      quaout = "Defer";
    }
    if ((funcPoint < 55) && (mes < 1500)) {
      quaout = "Low Hanging Fruits";
    }
    if ((funcPoint < 55) && (mes > 1500)) {
      quaout = "Quick Wins";
    }
    // switch(true){
    //   case ((xaxis > 55) || (yaxis > 1500)):
    //       quaout = "Big Bets";
    //     break;
    //   case ((xaxis > 55) || (yaxis < 1500)):
    //       quaout = "Defer";
    //       break;
    //   case ((xaxis < 55) || (yaxis < 1500)):
    //       quaout = "Low Hanging Fruits";
    //           break;
    //    case ((xaxis < 55) || (yaxis > 1500)):
    //       quaout = "Quick Wins";
    //               break;
       
    // }
  
  qua.value = quaout;
  
  
  };
  