$("#btnsend").click(function () {

    var fAverage = 0;
    var grade = " ";
    var assignment = $("#txtassignment").val();
    var group = $("#txtgroup").val();
    var quiz = $("#txtquizzes").val();
    var exam = $("#txtexams").val();
    var intex = $("#txtintex").val();

    fAverage = (.55 * assignment) + (.05 * group) +
        (.1 * quiz) + (.2 * exam) + (.1 * intex);


    if (fAverage >= 94) {
        grade = "A";
    }
    else if (fAverage >= 90) {
        grade = "A-";
    }
    else if (fAverage >= 87) {
        grade = "B+";
    }
    else if (fAverage >= 83) {
        grade = "B";
    }
    else if (fAverage >= 80) {
        grade = "B-";
    }
    else if (fAverage >= 77) {
        grade = "C+";
    }
    else if (fAverage >= 73) {
        grade = "C";
    }
    else if (fAverage >= 70) {
        grade = "C-";
    }
    else if (fAverage > 67) {
        grade = "D+";
    }
    else if (fAverage >= 63) {
        grade = "D";
    }
    else if (fAverage >= 60) {
        grade = "D-";
    }
    else {
        grade = "E";
         }

    alert("Your final percentage was: " + fAverage + "% Your final grade is an: " + grade);

})