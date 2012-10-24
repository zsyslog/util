Number.prototype.between = function(x,y) {
    return (this.valueOf() >= x && this.valueOf() <= y)
}

Number.prototype.safeDivideBy = function(x) {

    var result = this.valueOf() / x;
    if(result === Infinity) {
        return 0;
    }
    else {
        return result;
    }
}

Number.prototype.currency = function() {
    return '$' + (parseFloat(this.valueOf()).toFixed(2)).toString();
}

Number.prototype.randomMax = function() {
    return Math.floor(Math.random() * (this.valueOf() + 1));
}

Number.prototype.in = function(array) {
    var arrayLength = array.length;
    for(var i=0; i < arrayLength; i++) {
        if (array[i] === this.valueOf()) return true;
    }
    return false;
}