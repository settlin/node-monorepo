export default function(v) {
	const d = new Date(), dateTo = new Date(), dateFrom = new Date();
	const currentyear = new Date(v);
	dateFrom.setFullYear(d.getFullYear() - 57);
	dateTo.setFullYear(d.getFullYear() - 18);
	return (currentyear.getFullYear() > dateFrom.getFullYear() && currentyear.getFullYear() < dateTo.getFullYear());
}
