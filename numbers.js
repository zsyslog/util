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

Number.prototype.toCurrency = function(c, d, t){
    // c: decimals fix
    // d: decimal separator
    // t: thousands separator
    var n = this, 
		c = isNaN(c = Math.abs(c)) ? 2 : c, 
		d = d == undefined ? "," : d, 
		t = t == undefined ? "." : t, 
		s = n < 0 ? "-" : "", 
		i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
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
