/**
 * Created by 1212962259 on 21.1.2016.
 */
$("document").ready(function () {
    $.ajax({
        url: "templates/template.handlebars", success: function (template) {
            var renderer = Handlebars.compile(template);
            $.getJSON("js/data.json", function (data) {
                var result = renderer(data);
                $("#container").html(result);
            });
        }
    });
});