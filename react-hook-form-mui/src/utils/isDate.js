export default function(date) {
	return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
}
