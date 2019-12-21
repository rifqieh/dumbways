    function sort_array(data) {
    for (var i = 0; i < data.length - 1; i++) {
        for (var j = i + 1; j < data.length; j++) {
        if (data[j].length < data[i].length) {
            var temp = data[j];
            data[j] = data[i];
            data[i] = temp;
        }
        }
    }

    for (var i = 0; i < data.length; i++) {
        data[i].sort();
    }
    console.log(data);
    }

    var data = [
    ["d", "c", "e", "b", "a"],
    ["k", "i", "j"]
    ];

    sort_array(data);

    var datalain = [
    ["g", "h", "i", "j"],
    ["a", "c", "b", "e", "d"],
    ["g", "e", "f"]
    ];

    sort_array(datalain);
