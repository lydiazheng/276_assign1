//CMPT 276 Assignment1
//Author: Lydia
var elementCount = 5;

function percent(){
	for (var i = 1; i < elementCount; i++){
		var numerator = document.getElementById("A" + i + "_numerator").value;
		var denominator = document.getElementById("A" + i + "_denominator").value;
		var percent = (numerator/ denominator) * 100;
		
		if (isFinite(numerator) == true && isFinite(denominator) == true && numerator >= 0 && denominator > 0){
			percent = Math.round(percent * 100)/100;
			document.getElementById("percent" + i).innerHTML = percent+ "%";
		}
		else{
			document.getElementById("percent" + i).innerHTML = "";
		}
	}
}


function weighted(){
	var weight_total = 0;
	var weighted = 0;
	for (var i = 1; i < elementCount; i++){
		var weight = document.getElementById("A" + i +"_weight").value;
		var numerator = document.getElementById("A" + i + "_numerator").value;
		var denominator = document.getElementById("A" + i + "_denominator").value;
		var percent = numerator/ denominator;
		
		if (isFinite(percent) == true && percent >= 0){
			weight_total = weight_total + parseInt(weight);
			weight = weight * percent;
			weighted = weight + weighted;
		}
	}
	weighted = (weighted / weight_total)* 100;
	weighted = Math.round(weighted * 100) / 100;
	return weighted;
}

function weighted_print(){
	var weighted_print = 0;
	weighted_print = weighted();
	
	if (isFinite(weighted_print) == true ){
		document.getElementById("weighted_print").innerHTML = weighted_print + "%";
	}
	else{
		document.getElementById("weighted_print").innerHTML = "wrong weighted";
	}

	if (weighted_print >= 95)
		document.getElementById("course_grade").innerHTML = "A+";
	else if (weighted_print >= 90 && weighted_print <= 94)
		document.getElementById("course_grade").innerHTML = "A";
	else if (weighted_print >= 85 && weighted_print <= 89)
		document.getElementById("course_grade").innerHTML = "A-";
	else if (weighted_print >= 80 && weighted_print <= 84)
		document.getElementById("course_grade").innerHTML = "B+";
	else if (weighted_print >= 75 && weighted_print <= 79)
		document.getElementById("course_grade").innerHTML = "B";
	else if (weighted_print >= 70 && weighted_print <= 74)
		document.getElementById("course_grade").innerHTML = "B-";
	else if (weighted_print >= 65 && weighted_print <= 69)
		document.getElementById("course_grade").innerHTML = "C+";
	else if (weighted_print >= 60 && weighted_print <= 64)
		document.getElementById("course_grade").innerHTML = "C";
	else if (weighted_print >= 55 && weighted_print <= 59)
		document.getElementById("course_grade").innerHTML = "C-";
	else if (weighted_print >= 50 && weighted_print <= 54)
		document.getElementById("course_grade").innerHTML = "D";
	else if (weighted_print < 54)
		document.getElementById("course_grade").innerHTML = "You failed the course, see you next semester!";
	else if (isFinite(weighted_print) != true)
		document.getElementById("course_grade").innerHTML = "wrong weighted";

}


function mean(){
	var mean = 0;
	var assign_total = 0;
	for (var i = 1; i < elementCount; i++){
		var numerator = document.getElementById("A" + i + "_numerator").value;
		var denominator = document.getElementById("A" + i + "_denominator").value;
		var percent = numerator/ denominator;
		if (isFinite(percent) == true && percent >= 0 ){
			assign_total++;
			mean = mean + percent;
		}
	}
	mean = (mean / assign_total) * 100;
	mean = Math.round(mean * 100) / 100;
	if (isFinite(mean) == true){
		document.getElementById("mean").innerHTML = mean + "%";
	}
	else{
		document.getElementById("mean").innerHTML = "";
	}
}

function addRow(){
	$("#two tr:last").after('<tr>'+
			'<td>Activity '+ elementCount +'</td>' +
			'<td>A'+ elementCount +'</td>' +
			'<td><input id="A'+ elementCount +'_weight"  type="text" onkeyup="weighted()"></td>' +
			'<td><input id="A'+ elementCount +'_numerator"  type="text" onkeyup="percent()" > / <br><input id="A'+ elementCount +'_denominator" type="text" onkeyup="percent()" ></td>' +
			'<td id="percent'+ elementCount +'" class="percent"></td>' +
		'</tr>');
	elementCount++;

}

function delRow(){
	if (elementCount >1){
		document.getElementById("two").deleteRow(elementCount-1);
		elementCount--;
	}
	else{
		alert("Nothing is here! Don't delete.");
		return;
	}

}

$(document).ready(function(){
    $("#flip").click(function(){
    	$("#panel").slideDown(4500);
        $("#panel").slideToggle("slow");
    });
});










