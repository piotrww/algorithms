var LuckyNumbersGenerator = (function () {
    function LuckyNumbersGenerator(config) {
        this.config = config;
    }
    LuckyNumbersGenerator.prototype.generate = function () {
        this.generateAllPossibleNumbers();
        this.generateNumbers();
        return this.giveIncreasingOrder();
    };
    LuckyNumbersGenerator.prototype.generateAllPossibleNumbers = function () {
        this.allPossibleNumbers = [];
        for (var i = 1; i <= this.config.maxValue; i++)
            this.allPossibleNumbers.push(i);
    };
    LuckyNumbersGenerator.prototype.generateNumbers = function () {
        this.sixLuckyNumbers = [];
        for (var i = 1; i <= this.config.generated; i++) {
            var index = Math.random() * this.allPossibleNumbers.length | 0;
            var luckyNumber = this.allPossibleNumbers.splice(index, 1)[0];
            this.sixLuckyNumbers.push(luckyNumber);
        }
    };
    LuckyNumbersGenerator.prototype.giveIncreasingOrder = function () {
        return this.sixLuckyNumbers.sort(function (x, y) { return x - y; });
    };
    return LuckyNumbersGenerator;
}());
// USAGE
var lottoGenerator = new LuckyNumbersGenerator({ maxValue: 49, generated: 6 });
var luckyNumbers = lottoGenerator.generate();
//# sourceMappingURL=lotto.js.map