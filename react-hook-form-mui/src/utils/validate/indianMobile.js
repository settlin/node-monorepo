export default function(v, msg) {
	return !/^[6-9]\d{9}$/.test(v) && msg;
}
