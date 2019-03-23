export default function(filesize) {
	var size = '';
	if (filesize >= 1048576) size = Math.round(filesize / 1048576) + ' megabytes';
	else if (filesize >= 1024) size = Math.round(filesize / 1024) + ' kilobytes';
	else size = filesize + ' bytes';
	return size;
}
