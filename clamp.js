// Clamp a number to a given range
Number.prototype.clamp = Number.prototype.clamp || function(min, max) {
	if (min < max || min == max) {
		return Math.min(Math.max(this, min), max);
	} else return null;
};
