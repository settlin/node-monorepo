export default function(v, msg) {
	return !/^\d{5,13}$/.test(v) && msg;
}
