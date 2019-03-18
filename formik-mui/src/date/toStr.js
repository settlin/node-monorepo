import isDate from './isDate';
const pad = function(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function(dt = new Date(), format = 'MMM-DD-YYYY', options) {
	options = options || {};
	if (typeof dt === 'string') dt = new Date(dt);
	if (!dt || !isDate(dt)) return '';
	if (options.humanReadable) {
		let dayAfter = new Date(new ServerDate().setHours(48, 0, 0, 0));
		if (dt < dayAfter) {
			let today = new Date(new ServerDate().setHours(0, 0, 0, 0)), tomorrow = new Date(new ServerDate().setHours(24, 0, 0, 0)), yesterday = new Date(new ServerDate().setHours(-24, 0, 0, 0));
			if (dt < tomorrow) {
				if (dt >= today) return 'today';
				else if (dt >= yesterday) return 'yesterday';
			}
			else return 'tomorrow';
		}
	}
	const s = dt.getSeconds(), m = dt.getMinutes(), H = dt.getHours(), h = H > 12 ? H - 12 : H, D = dt.getDate(), Day = dt.getDay(), M = dt.getMonth(), Y = dt.getFullYear();
	format = format.replace('ss', pad(s, 2));
	format = format.replace('s', s);
	format = format.replace('mm', pad(m, 2));
	format = format.replace('m', m);
	format = format.replace('hh', pad(h, 2));
	format = format.replace('h', h);
	format = format.replace('HH', pad(H, 2));
	format = format.replace('H', H);
	format = format.replace('A', H < 12 ? 'am' : 'pm');
	format = format.replace('DD', pad(D, 2));
	format = format.replace('D', D);
	format = format.replace('MMMM', months[M]);
	format = format.replace('MMM', months[M].substring(0, 3));
	format = format.replace('MM', pad(M + 1, 2));
	format = format.replace(/M(?![ao])/, M + 1);
	format = format.replace('DDDD', days[Day]);
	format = format.replace('DDD', days[Day].substring(0, 3));
	format = format.replace('YYYY', Y);
	format = format.replace('YY', (Y + '').substring(2));
	return format;
}
