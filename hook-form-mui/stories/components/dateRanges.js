import moment from 'moment';
const ranges = () => {
	let n = new Date(), y = moment(n).subtract(1, 'day'), t = moment(n).add(1, 'day');
	let lW = moment(n).subtract(1, 'week'), nW = moment(n).add(1, 'week');
	let lM = moment(n).subtract(1, 'month'), nM = moment(n).add(1, 'month');
	let lQ = moment(n).subtract(1, 'quarter'), nQ = moment(n).add(1, 'quarter');
	let lY = moment(n).subtract(1, 'year'), nY = moment(n).add(1, 'year');
	return [
		{code: 'T', name: 'Today', from: moment(n).startOf('day').toDate(), to: moment(n).endOf('day').toDate()},
		{code: 'Y', name: 'Yesterday', from: y.startOf('day').toDate(), to: y.endOf('day').toDate()},
		{code: 'L7', name: 'Last 7 days', from: moment(n).subtract(6, 'days').startOf('day').toDate(), to: moment(n).endOf('day').toDate()},
		{code: 'L30', name: 'Last 30 days', from: moment(n).subtract(30, 'days').startOf('day').toDate(), to: moment(n).endOf('day').toDate()},
		{code: 'TW', name: 'This week', from: moment(n).startOf('week').toDate(), to: moment(n).endOf('week').toDate()},
		{code: 'LW', name: 'Last week', from: lW.startOf('week').toDate(), to: lW.endOf('week').toDate()},
		{code: 'TM', name: 'This month', from: moment(n).startOf('month').toDate(), to: moment(n).endOf('month').toDate()},
		{code: 'LM', name: 'Last month', from: lM.startOf('month').toDate(), to: lM.endOf('month').toDate()},
		{code: 'TQ', name: 'This Quarter', from: moment(n).startOf('quarter').toDate(), to: moment(n).endOf('quarter').toDate()},
		{code: 'LQ', name: 'Last Quarter', from: lQ.startOf('quarter').toDate(), to: lQ.endOf('quarter').toDate()},
		{code: 'TY', name: 'This year', from: moment(n).startOf('year').toDate(), to: moment(n).endOf('year').toDate()},
		{code: 'All', name: 'All', from: new Date('1 Jan 2016'), to: moment(n).endOf('day').toDate()},
		{code: 'ND', name: 'Next day', from: t.startOf('day').toDate(), to: t.endOf('day').toDate()},
		{code: 'NW', name: 'Next week', from: nW.startOf('week').toDate(), to: nW.endOf('week').toDate()},
		{code: 'NM', name: 'Next month', from: nM.startOf('month').toDate(), to: nM.endOf('month').toDate()},
		{code: 'NQ', name: 'Next Quarter', from: nQ.startOf('quarter').toDate(), to: nQ.endOf('quarter').toDate()},
		{code: 'NY', name: 'Next Year', from: nY.startOf('year').toDate(), to: nY.endOf('year').toDate()},
		{code: 'LY', name: 'Last Year', from: lY.startOf('year').toDate(), to: lY.endOf('year').toDate()},
	];
};

const preDefinedDateRanges = ranges();
export default (fp) => { // preserve 'this'
	let ul = document.createElement('ul');
	ul.classList.add('no-margin', 'row');
	let hClick = function(e) {
		e.stopPropagation();
		this.fp.calendarContainer.querySelectorAll('.date-hint').forEach(el => el.classList.remove('border'));
		e.target.classList.add('border');
		if (this.code === 'clear') {
			this.fp.clear();
			this.fp.close();
			return;
		}
		let item = preDefinedDateRanges.find(x => x.code === this.code);
		this.fp.setDate([item.from, item.to], true); //triggerChange by second option - true
		this.fp.close();
	};
	let li = document.createElement('li');
	li.classList.add('col', 's12');
	li.setAttribute('title', 'CLEAR');
	li.setAttribute('data-code', 'clear');
	li.appendChild(document.createTextNode('clear'));
	li.addEventListener('click', hClick.bind({code: 'clear', fp}));
	ul.appendChild(li);
	preDefinedDateRanges.forEach(p => {
		li = document.createElement('li');
		li.classList.add('col', 's2', 'btn-flat', 'date-hint');
		li.setAttribute('title', p.name);
		li.setAttribute('data-code', p.code);
		li.appendChild(document.createTextNode(p.code));
		li.addEventListener('click', hClick.bind({code: p.code, fp}));
		ul.appendChild(li);
	});
	let el = document.createElement('div');
	el.classList.add('date-ranges');
	el.appendChild(ul);

	return {
		onReady() {
			if ((fp.selectedDates || [])[0]) {
				let found = preDefinedDateRanges.filter(p => fp.selectedDates[0].getTime() === p.from.getTime() && fp.selectedDates[1].getTime() === p.to.getTime())[0];
				if (found) {
					let e = el.querySelector('[data-code=' + found.code + ']');
					if (e) e.classList.add('border');
				}
			}
			fp.calendarContainer.insertBefore(el, fp.calendarContainer.childNodes[0]);
		},
	};
};
