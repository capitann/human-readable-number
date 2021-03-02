module.exports = function toReadable(number) {
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let result = '';
    if (number.toString().length == 3) {
        result += `${digits[parseInt(number.toString().split('')[0])]} ${hundred} `;
        if (number.toString().substring(1) == '00') {
            return result.trim();
        }
        result += toReadable(parseInt(number.toString().substring(1)));
    }else if (number >= 21) {
        result += `${tens[parseInt(number.toString().split('')[0]) - 2]}`;
        if (number.toString().substring(1) != '0'){
            result += ` ${digits[parseInt(number.toString().split('')[1])]}`;
        }
    }else{
        result += digits[number];
    }
    return result.trim();
}
