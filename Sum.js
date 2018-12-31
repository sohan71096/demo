function SumAll() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var s = 0;
    for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
        var data = num_1[_a];
        s = s + data;
        console.log("Addition of number:" + data);
    }
    console.log("Sum: " + s);
}
SumAll(1, 2, 3, 4);
