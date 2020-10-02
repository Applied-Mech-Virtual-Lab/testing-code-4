
//on click of next button
var mpointer=0;
var repeat =0;
var a,p,lastp,n,b,q,flag=0,avg,average;

var values1=[[2.5,2.381],
	        [2.4,-2.738],
			[2.4,-2.738],
			[2.6,7.500],
			[2.5,2.381]];
var values2=[[3.0,7.500],
		    [2.9,3.200],
			[2.8,-1.100],
			[2.9,3.200],
			[2.7,-5.400]];
var values3=[[3.5,4.032],
			[3.3,-2.903],
			[3.2,-6.371],
			[3.5,4.032],
			[3.4,0.564]];
var values4=[[4.5,2.381],
			[4.4,-0.179],
			[4.2,-5.298],
			[4.1,-7.857],
			[4.3,-2.738]];
var values5=[[5.4,5.350],
			[4.9,-5.400],
			[4.8,-7.550],
			[5.1,-1.100],
			[5.0,-3.250]];
var values6=[[6.0,-4.637],
			[5.9,-6.371],
			[6.2,-6.169],
			[6.1,-2.903],
			[6.6,5.755]];



p=Math.floor(Math.random()*(4));

function navNext()
{
  for (temp = 0; temp <= 7 ; temp++)
  {
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}


var ca;
var questions=["Capacity of Le-Chatelier Flask used for determining</br> Specific Gravity of Cement is",
				"The amount of cement taken is calculated as ",
				"Care should be taken for the Kerosene to be free from water.",
				"If the cement is exposed to extreme moisture content due to bad weather</br> conditions, then the specific gravity of cement may go up to "];

var options2=[["100ml","250ml","500ml","1000ml"],//250ml
			  ["W1+W2","W1-W2","W2-W1","W2"],//W2-W1
			  ["True","False"],//True
			  ["3.9","3.11","3.16","3.19"]];//3.19



function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);

	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction()
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{

	if (simsubscreennum==1)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 70px; top: 245px; height: 40px; z-index: 10;";

		myInt = setInterval(function(){ animatearrow(); }, 500);



		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('canvas1_img1').onclick=function() { step1(); };
	}

	else if (simsubscreennum==2)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('canvas1_img2').style.visibility="hidden";
		document.getElementById('canvas2_img1').style.visibility="visible";


	}
	else if (simsubscreennum==3)
	{
		document.getElementById('canvas2_img1').style.visibility="hidden";
		step3()
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('canvas3_img1').style.visibility="hidden";
		document.getElementById('canvas4_img1').style.visibility="visible";

		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('weight2').style.visibility="visible";
		document.getElementById('arrow1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 480px; top: 270px; height: 40px; z-index: 10;";

		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";


		document.getElementById('weight2').onclick=function() { step4(); };
	}
	else if (simsubscreennum==5)
	{
		document.getElementById('weight2').style.visibility="hidden";
		document.getElementById('canvas4_img1').style.visibility="hidden";
		document.getElementById('canvas5_img1').style.visibility="visible";

		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('weight3').style.visibility="visible";
		document.getElementById('arrow1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 500px; top: 270px; height: 40px; z-index: 10;";

		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";


		document.getElementById('weight3').onclick=function() { step5(); };

	}

	else if (simsubscreennum==6)
	{
		document.getElementById('weight3').style.visibility="hidden";
		document.getElementById('canvas5_img1').style.visibility="hidden";
		document.getElementById('canvas6_img1').style.visibility="visible";

		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('weight4').style.visibility="visible";
		document.getElementById('arrow1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 520px; top: 270px; height: 40px; z-index: 10;";

		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";


		document.getElementById('weight4').onclick=function() { step6(); };

	}

	else if (simsubscreennum==7)
	{
		document.getElementById('weight4').style.visibility="hidden";
		document.getElementById('canvas6_img1').style.visibility="hidden";
		document.getElementById('canvas7_img1').style.visibility="visible";

		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('weight5').style.visibility="visible";
		document.getElementById('arrow1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 480px; top: 270px; height: 40px; z-index: 10;";

		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";


		document.getElementById('weight5').onclick=function() { step7(); };

	}

	else if (simsubscreennum==8)
	{
		document.getElementById('weight5').style.visibility="hidden";
		document.getElementById('canvas7_img1').style.visibility="hidden";
		document.getElementById('canvas8_img1').style.visibility="visible";

		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('weight6').style.visibility="visible";
		document.getElementById('arrow1').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 500px; top: 270px; height: 40px; z-index: 10;";

		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";


		document.getElementById('weight6').onclick=function() { step8(); };

	}

	else if (simsubscreennum==9)
	{
		document.getElementById('canvas8_img1').style.visibility="hidden";
		document.getElementById('weight6').style.visibility="hidden";
		document.getElementById('canvas8_img1').style.visibility="hidden";
		document.getElementById('canvas8').style.visibility="hidden";
	document.getElementById('question7').style.visibility="hidden";


	}

}

	function step1()
{
	myStopFunction();
	document.getElementById('canvas1_img1').style.visibility="hidden";
	document.getElementById('canvas1_img2').style.visibility="visible";
 	document.getElementById('nextButton').style.visibility="visible";
}


	function step2()
{
	myStopFunction();
	if(document.getElementById('myList').value == 2)
		{
			document.getElementById('Answer').textContent="Correct Answer!";
			document.getElementById('nextButton').style.visibility="visible";
		}
	else
	{
		document.getElementById('Answer').textContent="Incorrect Answer!";
	}

}

function step3()
{
	myStopFunction();
	document.getElementById('canvas3_img1').style.visibility="visible";
	document.getElementById('weight').style.left="70px";
	document.getElementById('weight').style.top="380px";
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 450px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('weight').onclick=function() { step3_1(); };
}

function step3_1()
{
	myStopFunction();
	document.getElementById('weight').style.left="500px";
	document.getElementById('weight').style.top="325px";
	document.getElementById('canvas3_img1').style.visibility="hidden";
	document.getElementById('canvas3_img2').style.visibility="visible";

	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 80px; top: 245px; height: 40px; z-index: 10;";

	myInt = setInterval(function(){ animatearrow(); }, 500);

	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('canvas3_img2').onclick=function() { step3_2(); };
}

function step3_2()
{
	myStopFunction();
	document.getElementById('canvas3_img2').style.visibility="hidden";
	document.getElementById('canvas3_img1').style.visibility="visible";
	step3_3()
}

function step3_3()
{
	document.getElementById('canvas3_img1').style.left="50px";
	document.getElementById('canvas3_img1').style.top="100px";
	document.getElementById('weight').style.left="440px";
	document.getElementById('weight').style.top="270px";
	document.getElementById('question2').style.visibility="visible";

}

function step3_4()
{
	myStopFunction()
	if(document.getElementById('myList2').value == 3)
	{
		document.getElementById('Answer2').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer2').textContent="Incorrect Answer!";
}
}

function step4()
{
	myStopFunction();
	document.getElementById('weight2').style.left="460px";
	document.getElementById('weight2').style.top="272px";
	document.getElementById('canvas4_img1').style.visibility="hidden";
	document.getElementById('canvas4_img2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 60px; top: 200px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";

	document.getElementById('canvas4_img2').onclick=function() { step4_1(); };
}

function step4_1()
{
	myStopFunction();
	document.getElementById('canvas4_img2').style.visibility="hidden";
	document.getElementById('canvas4_img1').style.visibility="visible";
	document.getElementById('question2').style.visibility="hidden";
	document.getElementById('question3').style.visibility="visible";
}

function step4_2()
{
	myStopFunction()
	if(document.getElementById('myList3').value == 3)
	{
		document.getElementById('Answer3').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer3').textContent="Incorrect Answer!";
}
}


function step5()
{
	myStopFunction();
	document.getElementById('weight3').style.left="480px";
	document.getElementById('weight3').style.top="272px";
	document.getElementById('canvas5_img1').style.visibility="hidden";
	document.getElementById('canvas5_img2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 60px; top: 200px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";

	document.getElementById('canvas5_img2').onclick=function() { step5_1(); };
}

function step5_1()
{
	myStopFunction();
	document.getElementById('canvas5_img2').style.visibility="hidden";
	document.getElementById('canvas5_img1').style.visibility="visible";
	document.getElementById('question3').style.visibility="hidden";
	document.getElementById('question4').style.visibility="visible";
}

function step5_2()
{
	myStopFunction()
	if(document.getElementById('myList4').value == 3)
	{
		document.getElementById('Answer4').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer4').textContent="Incorrect Answer!";
}
}


function step6()
{
	myStopFunction();
	document.getElementById('weight4').style.left="440px";
	document.getElementById('weight4').style.top="272px";
	document.getElementById('canvas6_img1').style.visibility="hidden";
	document.getElementById('canvas6_img2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 60px; top: 200px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";

	document.getElementById('canvas6_img2').onclick=function() { step6_1(); };
}

function step6_1()
{
	myStopFunction();
	document.getElementById('canvas6_img2').style.visibility="hidden";
	document.getElementById('canvas6_img1').style.visibility="visible";
	document.getElementById('question4').style.visibility="hidden";
	document.getElementById('question5').style.visibility="visible";
}

function step6_2()
{
	myStopFunction()
	if(document.getElementById('myList5').value == 3)
	{
		document.getElementById('Answer5').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer5').textContent="Incorrect Answer!";
}
}

function step7()
{
	myStopFunction();
	document.getElementById('weight5').style.left="460px";
	document.getElementById('weight5').style.top="272px";
	document.getElementById('canvas7_img1').style.visibility="hidden";
	document.getElementById('canvas7_img2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 60px; top: 200px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";

	document.getElementById('canvas7_img2').onclick=function() { step7_1(); };
}

function step7_1()
{
	myStopFunction();
	document.getElementById('canvas7_img2').style.visibility="hidden";
	document.getElementById('canvas7_img1').style.visibility="visible";
	document.getElementById('question5').style.visibility="hidden";
	document.getElementById('question6').style.visibility="visible";
}

function step7_2()
{
	myStopFunction()
	if(document.getElementById('myList6').value == 3)
	{
		document.getElementById('Answer6').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer6').textContent="Incorrect Answer!";
}
}

function step8()
{
	myStopFunction();
	document.getElementById('weight6').style.left="480px";
	document.getElementById('weight6').style.top="272px";
	document.getElementById('canvas8_img1').style.visibility="hidden";
	document.getElementById('canvas8_img2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 60px; top: 200px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
		// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(180deg)";

	document.getElementById('canvas8_img2').onclick=function() { step8_1(); };
}

function step8_1()
{
	myStopFunction();
	document.getElementById('canvas8_img2').style.visibility="hidden";
	document.getElementById('canvas8_img1').style.visibility="visible";
	document.getElementById('question6').style.visibility="hidden";
	document.getElementById('question7').style.visibility="visible";
}

function step8_2()
{
	myStopFunction()
	if(document.getElementById('myList7').value == 3)
	{
		document.getElementById('Answer7').textContent="Correct Answer!";
		document.getElementById('nextButton').style.visibility="visible";
	}
else
{
	document.getElementById('Answer7').textContent="Incorrect Answer!";
}
}

function refresh1()
{
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('hand').style.animation = "";
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand5').style.transformOrigin = "";
	document.getElementById('hand5').style.animation = "";
	document.getElementById("arrow1").style.animation = "";

	document.getElementById('can1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)	=";
	document.getElementById('can2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";

	document.getElementById('can4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
	document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)=";

	document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
		document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
	document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";

	 document.getElementById('v1').innerHTML="";
	 document.getElementById('v2').innerHTML="";
	 document.getElementById('v3').innerHTML="";
	 document.getElementById('v4').innerHTML="";
	 document.getElementById('v5').innerHTML="";


}

function refresh2()
{
	document.getElementById('output').value="";
}

function calculateSpecificGravity()
{
	document.getElementById("form").onclick=function()
	{
		document.getElementById("formula").style.visibility="visible";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
	}

	document.getElementById("check").onclick=function()
	{
		document.getElementById("formula").style.visibility="hidden";
		if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n = document.getElementById("output").value;
			console.log(values[p][7]);
			if(Math.round(n) == Math.round(values[p][7]))
			{
				document.getElementById("check").style.visibility="hidden";
				document.getElementById("form").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("result").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				// document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
				// document.getElementById("p6-1").style.visibility="visible";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result").style.visibility="visible";
				document.getElementById("w1").style.visibility="visible";
			}
		}
		document.getElementById("result").onclick=function()
		{
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
			document.getElementById("form").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("6-1").style.visibility="hidden";
			document.getElementById("p6-1").innerHTML="Specific gravity of cement = "+values[p][7];
			document.getElementById("p6-1").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}

function calculateSpecificGravity2()
{
	document.getElementById("l6-1").style.visibility="hidden";
	document.getElementById("6-2").style.visibility="visible";
	document.getElementById("l6-2").style.visibility="visible";
	document.getElementById("form2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="visible";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
	}

	document.getElementById("check2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="hidden";
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("output2").value;
			console.log(values[p][7]);
			if(Math.round(n2) == Math.round(values[p][7]))
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result2").style.visibility="visible";
				document.getElementById("w2").style.visibility="visible";
			}
		}
		document.getElementById("result2").onclick=function()
		{
			document.getElementById("l6-2").style.visibility="hidden";
			document.getElementById("check2").style.visibility="hidden";
			document.getElementById("result2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="hidden";
			document.getElementById("formula2").style.visibility="hidden";
			document.getElementById("6-2").style.visibility="hidden";
			document.getElementById("p6-2").innerHTML="Specific gravity of cement = "+values[p][7];
			document.getElementById("p6-2").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 2.8 - 3.15";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(average>=2.8 && average<=3.15)
		{
			document.getElementById("infAns").innerHTML="According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is "+average+". So the test result is in range.";
		}
		else
		{
			document.getElementById("infAns").innerHTML="According to IS 10262, suggested range of specific gravity of cement for marine application is 2.8 - 3.15. The Specific gravity obtained for given cement sample is "+average+". So the test result is not in range.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}

function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
	  document.getElementById('result-11').innerHTML = 'Correct!'
	  step2()
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
  }
  // the functon displays the link to the correct answer
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
	  document.getElementById('showanswer1').removeChild(showAnswer1)
	  step2()
    })
  }

  function displayAnswer2() {
    if (document.getElementById('option-21').checked) {
      document.getElementById('block-21').style.border = '3px solid limegreen'
      document.getElementById('result-21').style.color = 'limegreen'
	  document.getElementById('result-21').innerHTML = 'Correct!'
	  step2()
    }
    if (document.getElementById('option-22').checked) {
      document.getElementById('block-22').style.border = '3px solid red'
      document.getElementById('result-22').style.color = 'red'
      document.getElementById('result-22').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-23').checked) {
      document.getElementById('block-23').style.border = '3px solid red'
      document.getElementById('result-23').style.color = 'red'
      document.getElementById('result-23').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-24').checked) {
      document.getElementById('block-24').style.border = '3px solid red'
      document.getElementById('result-24').style.color = 'red'
      document.getElementById('result-24').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
  }
  // the functon displays the link to the correct answer
  function showCorrectAnswer2() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-21').style.border = '3px solid limegreen'
      document.getElementById('result-21').style.color = 'limegreen'
      document.getElementById('result-21').innerHTML = 'Correct!'
	  document.getElementById('showanswer2').removeChild(showAnswer2)
	  step2()
    })
  }
