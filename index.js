const request = require('request');
const _ = require('lodash');
const { datasetIndex } = require('./json-index');

const getProcessedString = (string, selectedString, selectedStringFormats) => {
	const selectedStringParts = selectedString
		.split('.')
		.slice(1)
		.join('.');
	string =
		selectedString && selectedStringParts
			? _.get(string, selectedStringParts)
			: string;
	selectedStringFormats.forEach(
		selectedStringFormat =>
			(string =
				string && typeof string == 'string'
					? lookupFormatOptions[selectedStringFormat].processor(
							string
					  )
					: string)
	);
	return string;
};

const getDatasetIndex = () => datasetIndex;

const getDataset = name => {
	return new Promise(resolve => {
		try {
			request(
				`https://raw.githubusercontent.com/cortogo/datasets/master/json/${name}.json`,
				function(err, res, body) {
					if (!err && body) {
						try {
							resolve(JSON.parse(body));
							return;
						} catch (e) {
							console.log(e);
						}
					}
					resolve({ error: 'an error occurred' });
				}
			);
		} catch (e) {
			console.log(e);
			resolve({ error: 'an error occurred' });
		}
	});
};

const convertDatasetToArray = (jsonFile, selectedValue, selectedValueFormats) =>
	Object.values(jsonFile).map(value =>
		getProcessedString(value, selectedValue, selectedValueFormats)
	);

const convertDatasetToArrayString = (
	jsonFile,
	selectedValue,
	selectedValueFormats
) =>
	convertDatasetToArray(
		JSON.stringify(jsonFile, selectedValue, selectedValueFormats),
		null,
		2
	);

const convertDatasetToLookup = (
	jsonFile,
	selectedValue,
	selectedValueFormats,
	selectedKey,
	selectedKeyFormats
) => {
	const lookup = {};
	Object.keys(jsonFile).forEach(key => {
		const lookupKey = getProcessedString(
			jsonFile[key],
			selectedKey,
			selectedKeyFormats
		);
		if (lookupKey) {
			lookup[lookupKey] = getProcessedString(
				jsonFile[key],
				selectedValue,
				selectedValueFormats
			);
		}
	});
	return lookup;
};

const convertDatasetToLookupString = (
	jsonFile,
	selectedValue,
	selectedValueFormats,
	selectedKey,
	selectedKeyFormats
) =>
	JSON.stringify(
		convertDatasetToLookup(
			jsonFile,
			selectedValue,
			selectedValueFormats,
			selectedKey,
			selectedKeyFormats
		),
		null,
		2
	);

const lookupFormatOptions = {
	original: { display: 'Original', processor: val => val },
	lowercase: { display: 'Lowercase', processor: val => val.toLowerCase() },
	uppercase: { display: 'Uppercase', processor: val => val.toUpperCase() },
	nowhitespace: {
		display: 'No whitespace',
		processor: val => val.replace(/\s/g, '')
	},
	onlyalpha: {
		display: 'Only alpha',
		processor: val => val.replace(/[^a-zA-Z]/g, '')
	},
	onlynumeric: {
		display: 'Only numeric',
		processor: val => val.replace(/[^0-9]/g, '')
	},
	onlyalphanumeric: {
		display: 'Only alpha numeric',
		processor: val => val.replace(/[^a-zA-Z0-9]/g, '')
	},
	booleantrue: {
		display: 'Boolean true',
		processor: () => true
	}
};

module.exports = {
	getDatasetIndex,
	getDataset,
	convertDatasetToArray,
	convertDatasetToArrayString,
	convertDatasetToLookup,
	convertDatasetToLookupString,
	lookupFormatOptions
};
