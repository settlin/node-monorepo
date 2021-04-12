export default function(file) {
	const fileName = file.name || file.path;
	if (!fileName) return false;
	const suffix = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
	return !!~['jpg', 'jpeg', 'bmp', 'png'].indexOf(suffix);
}
