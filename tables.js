$(document).ready(function () {

    $.ajax({
        url: "/api/tables",
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            tableNum = i + 1
            $(".tableSection").append("<div>").attr("id", "table" + i);
            $(".table" + i).append(tableNum + " || " + response[i].customerID);
        }
    });

    $.ajax({
        url: "/api/waitlist",
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            $(".waitlistSection").append("<div>").attr("id", "wait" + i);
            $(".wait" + i).append(response[i].customerID);
        }
    });

});