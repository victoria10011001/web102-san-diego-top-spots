$(document).ready(function() {
    $.getJSON("data.json", function(data) {
        var items = [];
        $.each(data, function(index, row) {
            items.push("<tr>")
            $.each(row, function(key, val) {
                if(key === "location") {
                    var link = 'https://www.google.com/maps?q=' + val.join(",")
                    items.push('<td><a target="_blank" class="btn btn-primary" href="' + link + '">Open in Google Maps</a></td>')
                } else {
                    items.push("<td>" + val + "</td>") 
                }
            })
            items.push("</tr>");
        })
        $("tbody").append(items.join(""));
    })
});
