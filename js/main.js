$(document).ready(function () {
    var data = {
        labels: ["PHP", "HTML5", "CSS", "Javascript", "jQuery", "Bash", "Git"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [90, 70, 80, 80, 80, 30, 90]
            }
        ]
    };

    $("#nav2").on('shown.bs.tab', function (e) {
        var ctx = document.getElementById("chart").getContext("2d");
        var chart = new Chart(ctx).Radar(data, {
            responsive : true
        });
    });
});
