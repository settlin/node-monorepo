export default function(filesize) {
	var size = '';
	if (filesize >= 1048576) size = (filesize / 1048576) + ' megabytes';
	else if (filesize >= 1024) size = (filesize / 1024) + ' kilobytes';
	else size = filesize + ' bytes';
	return size;
}
