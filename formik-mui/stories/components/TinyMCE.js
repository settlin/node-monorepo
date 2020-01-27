import React, {memo} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import formikToMuiProps from '../../src/forms/formikToMuiProps';

import 'tinymce/tinymce';

import 'tinymce/themes/silver';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';

// Any plugin you want to use has to be imported
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/print';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/wordcount';

export default memo(p => {
	const fp = formikToMuiProps(p);
	const onChange = function(content) {
		if (p.form) p.form.setFieldValue(fp.name, content);
		if (p.onChange) p.onChange(content);
	};
	const onBlur = function(event) {
		if (p.form) p.form.setFieldValue(fp.name, event.target.getContent());
		if (p.onBlur) p.onBlur(event);
	};
	return <Editor
		init={{
			plugins: ['advlist anchor autolink charmap code fullscreen help image insertdatetime link lists media paste preview print searchreplace table table visualblocks wordcount'],
		}}
		{...{...fp, onChange: () => {}, onEditorChange: onChange, onBlur}}
	/>;
});
