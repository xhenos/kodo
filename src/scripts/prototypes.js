Array.prototype.popAndPushContent = function(from, to, object) {
	object.content = from;
	this.pop(object);
	object.content = to;
	this.push(object);
};
