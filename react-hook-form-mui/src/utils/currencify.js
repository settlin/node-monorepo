const pi = x => parseInt(x, 10);
export default function(amount, {abbreviated, short, numberWithCommas, fullWords, roundOff = true} = {}) {
	if (!amount) return 0;
	if (abbreviated || short) {
		amount = pi(amount);
		let roundOffAmt = Math.round(amount / 100000);
		if (roundOffAmt >= 100) {
			let tmp = roundOffAmt / 100;
			if (short) return tmp + 'C';
			return tmp + (tmp > 1 ? ' Crores' : ' Crore');
		}
		if (short) return roundOffAmt + 'L';
		return roundOffAmt + ' Lakhs';
	}
	if (numberWithCommas) return amount.toLocaleString('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0, minimumFractionDigits: 0});
	if (amount.toString().length > 9) return 'overflow';

	if (fullWords) {
		let a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
		var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

		let inWords = ((num) => {
			//valid upto 9 digits
			if ((num = num.toString()).length > 9) return 'overflow';
			let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
			if (!n) return ''; let str = '';
			str += (pi(n[1]) !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
			str += (pi(n[2]) !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
			str += (pi(n[3]) !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
			str += (pi(n[4]) !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
			str += (pi(n[5]) !== 0) ? ((str !== '') ? 'And ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only ' : 'Only';
			return str;
		});
		return inWords(amount);
	}
	var n = ('000000000' + amount).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
	var str = '';
	if (!n) return str;
	str += (pi(n[1]) !== 0)
		? (n[1] < 10 ? n[1][1] : n[1][0] + n[1][1]) + (roundOff && pi(n[2]) !== 0 ? '.' + (pi(n[2][1]) !== 0 ? n[2][0] + n[2][1] : n[2][0])  : '') + ' Crore' + (n[1][1] > 1 ? 's' : '') + ' '
		: (pi(n[2]) !== 0) ? (n[2] < 10 ? n[2][1] : n[2][0] + n[2][1]) + (roundOff && pi(n[3]) !== 0 ? '.' + (pi(n[3][1]) !== 0 ? n[3][0] + n[3][1] : n[3][0])  : '') + ' Lakh' + (n[2][1] > 1 ? 's' : '') + ' ' : '';

	if (!str || !roundOff) {
		str += (pi(n[3]) !== 0) ? (n[3] < 10 ? n[3][1] : n[3][0] + n[3][1]) + ' Thousand' + (n[3][1] > 1 ? 's' : '') + ' ' : '';
		str += (pi(n[4]) !== 0) ? n[4] + ' Hundred' + (n[4][1] > 1 ? 's' : '') + ' ' : '';
		str += (pi(n[5]) !== 0) ? (n[5] < 10 ? n[5][1] : n[5][0] + n[5][1]) : '';
	}
	return str;
}
