export const propertyOptions = [
	{value: 'a-', label: 'Apartment', options: [
		{value: 'a', label: 'Any Apartment', finalValue: {type: 'apartment', gated: true, project: true}},
		{value: 'a:n', label: 'Only Apartment', finalValue: {type: 'apartment', gated: true, project: true, penthouse: false, villament: false}},
		{value: 'a:p', label: 'Penthouse', finalValue: {type: 'apartment', gated: true, project: true, penthouse: true, villament: false}},
		{value: 'a:v', label: 'Villament', finalValue: {type: 'apartment', gated: true, project: true, villament: true, penthouse: false}},
	]},
	{
		value: 'h-', label: 'House', options: [
			// gated, project, single, villa, villaType mandatory
			{value: 'h', label: 'Any House', finalValue: {type: 'house', villa: false}},
			{
				value: 'h:g-', label: 'House in Gated Community', options: [
					{value: 'h:g', label: 'Any Gated Community House', finalValue: {type: 'house', gated: true, project: false, villa: false}},
					{value: 'h:g:s', label: 'Single Family House (GC)', finalValue: {type: 'house', gated: true, project: false, single: true, villa: false, villaType: null}},
					{value: 'h:g:m', label: 'Multi Family House (GC)', finalValue: {type: 'house', gated: true, project: false, single: false, villa: false, villaType: null}},
				],
			},
			{value: 'h:p-', label: 'House in a Project', options: [
				{value: 'h:p', label: 'Any House in a Project', finalValue: {type: 'house', gated: true, project: true, villa: false}},
				{value: 'h:p:s', label: 'Single Family House in Project', finalValue: {type: 'house', gated: true, project: true, single: true, villa: false, villaType: null}},
				{value: 'h:p:m', label: 'Multi Family House in Project', finalValue: {type: 'house', gated: true, project: true, single: false, villa: false, villaType: null}},
			]},
			{
				value: 'h:i-', label: 'Independent House', options: [
					{value: 'h:i', label: 'Any Independent House', finalValue: {type: 'house', gated: false, project: false, villa: false}},
					{value: 'h:i:s', label: 'Single Family House (I)', finalValue: {type: 'house', gated: false, project: false, single: true, villa: false, villaType: null}},
					{value: 'h:i:m', label: 'Multi Family House (I)', finalValue: {type: 'house', gated: false, project: false, single: false, villa: false, villaType: null}},
				],
			},
		],
	},
	{
		value: 'v-', label: 'Villa', options: [
			// gated, project, single, villa, villaType mandatory
			{value: 'v', label: 'Any Villa', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true}},
			{value: 'v:s', label: 'Standalone (Villa)', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true, villaType: 'standalone'}},
			{value: 'v:1', label: '1-2 (Villa)', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true, villaType: '1-2'}},
			{value: 'v:r', label: 'Row (Villa)', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true, villaType: 'row'}},
		],
	},
	{
		value: 'p-', label: 'Plot', options: [
			// gated, project mandatory
			{value: 'p', label: 'Any Plot', finalValue: {type: 'plot'}},
			{value: 'p:p', label: 'Gated Builder Plot', finalValue: {type: 'plot', gated: true, project: true}},
			{value: 'p:g', label: 'Gated Community Plot', finalValue: {type: 'plot', gated: true, project: false}},
			{value: 'p:i', label: 'Independent Plot', finalValue: {type: 'plot', gated: false, project: false}},
		],
	},
];
