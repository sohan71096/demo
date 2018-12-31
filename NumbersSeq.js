var NumbersSeq = /** @class */ (function () {
    function NumbersSeq() {
    }
    NumbersSeq.prototype.doGet = function () {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
        console.log("Finally" + i);
    };
    return NumbersSeq;
}());
var s = new NumbersSeq();
s.doGet();
