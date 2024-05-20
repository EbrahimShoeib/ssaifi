
export function getPercentAmt(number:number, percent:number) {
    return +(number * (percent / 100)).toFixed(2)
}

