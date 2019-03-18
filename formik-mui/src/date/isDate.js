export default date => {
	if (typeof date === 'string') date = new Date(date);
	return date && date !== 'Invalid Date' && !isNaN(date) && typeof date.getMonth === 'function';
};
