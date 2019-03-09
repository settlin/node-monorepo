export default function(v, msg) {
	return !/^\d{10}$/.test(v) && msg;
}
