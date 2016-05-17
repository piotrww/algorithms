interface ILuckyNumbersGeneratorConfig {
    maxValue: number;
    generated: number;
}

class LuckyNumbersGenerator {
    private allPossibleNumbers: number[];
    private sixLuckyNumbers: number[];

    constructor(private config: ILuckyNumbersGeneratorConfig) { }

    public generate() {
        this.generateAllPossibleNumbers();
        this.generateNumbers();
        return this.giveIncreasingOrder();
    }

    private generateAllPossibleNumbers() {
        this.allPossibleNumbers = [];
        for (let i = 1; i <= this.config.maxValue; i++)
            this.allPossibleNumbers.push(i);
    }

    private generateNumbers() {
        this.sixLuckyNumbers = [];
        for (let i = 1; i <= this.config.generated; i++) {
            const index = Math.random() * this.allPossibleNumbers.length | 0;
            const luckyNumber = this.allPossibleNumbers.splice(index, 1)[0];
            this.sixLuckyNumbers.push(luckyNumber);
        }
    }

    private giveIncreasingOrder() {
        return this.sixLuckyNumbers.sort((x, y) => x - y);
    }
}

// USAGE
const lottoGenerator = new LuckyNumbersGenerator({ maxValue: 49, generated: 6 });
const luckyNumbers = lottoGenerator.generate();