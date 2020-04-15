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
  window.onload = function(){
    var monthlyvolume = document.getElementById('mvtwo').value; 
    var aht = document.getElementById('ahttwo').value;
    var app = document.getElementById('apottwo').value;
    var mes = document.getElementById('meffs');
    var output = aht * app/100 * monthlyvolume;
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
    
    efforts.value = yout;
    
   
  };
  
  function quadrant(){
    var funcPoint = document.getElementById('funp').value;
    var mes = document.getElementById('meffs').value;
    
    var qua = document.getElementById('qua');
    var quaout; 
    if ((funcPoint >= 55) && (mes >= 1500)) {
      quaout = "Big Bets";
    }
    if ((funcPoint >= 55) && (mes <= 1500)) {
      quaout = "Defer";
    }
    if ((funcPoint <= 55) && (mes <= 1500)) {
      quaout = "Low Hanging Fruits";
    }
    if ((funcPoint <= 55) && (mes >= 1500)) {
      quaout = "Quick Wins";
    }
    
  qua.value = quaout;
  
  
  };
  
  var result1;
  var result2;
  var result3;
  var result4;
  var result5;

  function fte_savings_usd(){
    var ftecount1 = document.getElementById('year1').value;
    var ftecount2 = document.getElementById('year2').value;
    var ftecount3 = document.getElementById('year3').value;
    var ftecount4 = document.getElementById('year4').value;
    var ftecount5 = document.getElementById('year5').value;

    var ftecost1 = document.getElementById('y1').value;
    var ftecost2 = document.getElementById('y2').value;
    var ftecost3 = document.getElementById('y3').value;
    var ftecost4 = document.getElementById('y4').value;
    var ftecost5 = document.getElementById('y5').value;
    
    var ftesavings1 = document.getElementById('ftesav1');
    var ftesavings2 = document.getElementById('ftesav2');
    var ftesavings3 = document.getElementById('ftesav3');
    var ftesavings4 = document.getElementById('ftesav4');
    var ftesavings5 = document.getElementById('ftesav5');

    var ftesavingresult1 = ftecount1*ftecost1;
    var ftesavingresult2 = ftecount2*ftecost2;
    var ftesavingresult3 = ftecount3*ftecost3;
    var ftesavingresult4 = ftecount4*ftecost4;
    var ftesavingresult5 = ftecount5*ftecost5;
    

    ftesavings1.value = ftesavingresult1;
    ftesavings2.value = ftesavingresult2;
    ftesavings3.value = ftesavingresult3;
    ftesavings4.value = ftesavingresult4;
    ftesavings5.value = ftesavingresult5;

    result1 = ftesavings1.value;
    result2 = ftesavings2.value;
    result3 = ftesavings3.value;
    result4 = ftesavings4.value;
    result5 = ftesavings5.value;

    net_savings();

  };

 function net_savings(){

  var implec1 = document.getElementById('imp1').value;
  var implec2 = document.getElementById('imp2').value;
  var licc1 = document.getElementById('lic1').value;
  var infrac1 = document.getElementById('infc1').value;
  var maintc1 = document.getElementById('mac1').value;

      var output1 = result1;
      var output2 = result2;
      var output3 = result3;
      var output4 = result4;
      var output5 = result5;
    // var ftesavings1 = document.getElementById('ftesav1').value;
    // var ftesavings2 = document.getElementById('ftesav2').value;
    // var ftesavings3 = document.getElementById('ftesav3').value;
    // var ftesavings4 = document.getElementById('ftesav4').value;
    // var ftesavings5 = document.getElementById('ftesav5').value;
   
    var netsav1 = document.getElementById('nets1');
    var netsav2 = document.getElementById('nets2');
    var netsav3 = document.getElementById('nets3');
    var netsav4 = document.getElementById('nets4');
    var netsav5 = document.getElementById('nets5');
    var totalsav = document.getElementById('totns');
    var sum1 = parseInt(implec1) + parseInt(licc1) + parseInt(infrac1) + parseInt(maintc1);
    var sum2 = parseInt(implec2) + parseInt(licc1) + parseInt(infrac1) + parseInt(maintc1);
    
    var netsavings1 = output1-sum1;
    var netsavings2 = output2-sum2;
    var netsavings3 = output3-sum2;
    var netsavings4 = output4-sum2;
    var netsavings5 = output5-sum2;
    
    netsav1.value = Math.round(netsavings1);
    netsav2.value = Math.round(netsavings2);
    netsav3.value = Math.round(netsavings3);
    netsav4.value = Math.round(netsavings4);
    netsav5.value = Math.round(netsavings5);
    totalsav.value = Math.round(netsavings1) +  Math.round(netsavings2) +  Math.round(netsavings3) +  Math.round(netsavings4) +  Math.round(netsavings5) 
    // window.onload = net_savings();
  };
  // window.onload = net_savings();
  