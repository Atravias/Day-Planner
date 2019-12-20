var time = document.getElementById("currentDay").append(new Date());
var input = document.querySelector("input");


function hoursUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        var storageKey = $(this).attr("id");
        var display = localStorage.getItem(storageKey);
        $(this).siblings("input").val(display)
        if (blockHour <= currentHour) {
            $(this).addClass("past")
        } else if (blockHour > currentHour) {
            $(this).addClass("future")
        } else {
            return;
        }
        if (blockHour === currentHour) {
            $(this).addClass("present")
        } else {
            return;
        };
    });
};
hoursUpdater();
function minutesUpdater() {
    var currentMinute = moment().minute();
}
minutesUpdater();
$(".saveBtn").on("click", function (e) {
    e.preventDefault();
    localStorage.setItem($(this).siblings().attr("id"), $(this).siblings("input").val())
    var save = $(this).siblings()
})