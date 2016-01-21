/**
 * Created by 1212962259 on 21.1.2016.
 */
var template = $("#itemTemplate").html();
var renderer = Handlebars.compile(template);
var result = renderer((function () {
    var result = null;
    $.getJSON("data.json", function (data) {
        result = data;
    })
})());

$("#container").html(result);