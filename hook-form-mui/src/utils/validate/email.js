export default function(v, msg) {
	return !/^.+@.+\..+$/.test(v) && msg;
}
