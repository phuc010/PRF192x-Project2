//only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function(){ 
    var i = 1;
    //click event for id enter
    $("#enter").click(function(){
        //assign values from input to variables
        var name = $("#name").val();
        var mathscore = $("#mathscore").val();
        var physicscore = $("#physicscore").val();
        var chemscore = $("#chemscore").val();
        var avgscore = "?";
         //validation
        if (name == ""){
            alert("Bạn chưa nhập tên!");
        } else if (isNaN(mathscore) || isNaN(physicscore) || isNaN(chemscore)){
            alert("Điểm phải là số!");
        } else if (mathscore > 10 || physicscore > 10 || chemscore >10 || mathscore < 0 || physicscore < 0 || chemscore < 0){
            alert("Điểm phải từ 0-10")
        } else if ( mathscore == "" || physicscore == "" || chemscore == ""){
            alert("Bạn phải nhập điểm đủ 3 môn!")
        } else {
        //Enter values of the variables on cells in the table
        let row = "<tr><td>" + i++ + "</td><td>" + name + "</td><td>" + mathscore + "</td><td>" + physicscore + "</td><td>" + chemscore + "</td><td>" + avgscore + "</td></tr>";
        //add row-end
        $("#myTable").append(row);
        //clear input element after enter
        $("#name").val("");
        $("#mathscore").val("");
        $("#physicscore").val("");
        $("#chemscore").val("");
        }
    });
    //click event for id avg
    $("#avg").click(function(){
        //iterate over each element tbody tr
        $("tbody tr").each(function(){
            let math_score = $(this).children("td").eq(2).html();
            let physic_score = $(this).children("td").eq(3).html();
            let chem_score = $(this).children("td").eq(4).html();
            let avg_score = ((parseFloat(math_score) + parseFloat(physic_score) + parseFloat(chem_score))/3).toFixed(1);
            $(this).children("td").eq(5).html(avg_score);
        })
    })
    //click event for id ranked
    $("#ranked").click(function(){
        $("tbody tr").each(function(){
        let avgScore = $(this).children("td").eq(5).html();
        if (avgScore >= 8){
            $(this).children("td").addClass("styleranked");
            $(this).children(".styleranked").css({'color' : 'red'});
        }
        })
    })
})