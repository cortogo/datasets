const generateWorldCities = letter => ({
	displayname: `World cities (${letter})`,
	filename: `world_cities_${letter}`,
	description: `World cities starting with ${letter}`,
	keymap: {
		uniqueKey: {
			country: 'Alpha 2 country code',
			name: 'Name',
			lat: 'Latitude',
			long: 'Longitude'
		}
	}
});

const generateEnglishWords = letter => ({
	displayname: `English words (${letter})`,
	filename: `english_words_${letter}`,
	description: `English words starting with ${letter}`,
	keymap: {
		key: {
			key: 'Word with punctuation removed',
			value: 'Raw word'
		}
	}
});

const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

const datasetIndex = [
	{
		displayname: 'World airports',
		filename: 'world_airports',
		description: 'World airports including their name, country and code',
		keymap: {
			airportCode: {
				airportName: 'Airport name',
				country: 'Country',
				code: 'Airport code'
			}
		}
	},
	{
		displayname: 'World countries',
		filename: 'world_countries',
		description:
			'Countries of the world including lots of useful information',
		keymap: {
			alpha3Code: {
				name: 'Country name',
				alpha2: 'Alpha 2 code',
				alpha3: 'Alpha 3 code',
				numeric: 'Numeric code',
				calling: {
					callingCode: 'Calling code',
					intDialingPrefix: 'International dialing prefix'
				},
				currency: {
					name: 'Currency name',
					alphabeticCode: 'Alpha code',
					numericCode: 'Numeric code'
				},
				names: {
					english: 'English name',
					french: 'French name',
					local: 'Local name',
					officialName: 'Official name',
					other: 'Array of alternative names'
				},
				region: 'Region',
				area: {
					area: 'Territory area',
					earthPercentage: 'Territory area as percentage of earth'
				},
				capital: {
					name: 'Capital name',
					population: 'Capital population'
				},
				population: {
					'2013': 'Population',
					'2014': 'Population',
					'2015': 'Population',
					'2016': 'Population',
					'2017': 'Population'
				},
				isSovereign: 'Is sovereign country',
				isUN: 'Is UN member'
			}
		}
	},
	{
		displayname: 'World languages',
		filename: 'world_languages',
		description:
			'Languages of the world including english and french names as well as alpha codes',
		keymap: {
			alpha3Code: {
				english: 'English name',
				french: 'French name',
				alpha3: 'Alpha 3 code',
				alpha2: 'Alpha 2 code'
			}
		}
	},
	{
		displayname: 'London bus routes',
		filename: 'london_bus_routes',
		description: 'Detailed london bus route data',
		keymap: {
			regular: {
				number: {
					number: 'Route number',
					start: 'Location 1',
					end: 'Location 2',
					operator: 'Operator',
					twentyFourHour: '24 hour operation'
				}
			},
			night: {
				number: {
					number: 'Route number',
					start: 'Location 1',
					end: 'Location 2',
					operator: 'Operator',
					twentyFourHour: '24 hour operation'
				}
			},
			school: {
				number: {
					number: 'Route number',
					start: 'Location 1',
					end: 'Location 2',
					operator: 'Operator',
					twentyFourHour: '24 hour operation'
				}
			},
			mobility: {
				number: {
					number: 'Route number',
					start: 'Location 1',
					end: 'Location 2',
					operator: 'Operator',
					twentyFourHour: '24 hour operation'
				}
			}
		}
	},
	{
		displayname: 'World sea ports',
		filename: 'seaports',
		description: 'World ports including name, code and country',
		keymap: {
			portCode: {
				code: 'Port code',
				name: 'Port name',
				country: 'Country'
			}
		}
	},
	{
		displayname: 'UK train carriers',
		filename: 'uk_train_carriers',
		description: 'UK train carriers and associated codes',
		keymap: {
			atocCode: {
				name: 'Carrier name',
				business: 'Business code',
				sector: 'Sector code',
				atoc: 'ATOC code'
			}
		}
	},
	{
		displayname: 'UK train stations',
		filename: 'uk_train_stations',
		description: 'UK train stations and associated code',
		keymap: [
			{
				name: 'Station name',
				code: 'Station code'
			}
		]
	},
	{
		displayname: 'US states',
		filename: 'us_states',
		description: 'US states and territories including their capital',
		keymap: {
			stateName: {
				capital: 'Capital name',
				name: 'State name',
				isState: 'Is a state',
				isTerritory: 'Is a territory'
			}
		}
	},
	{
		displayname: 'English stop words',
		filename: 'english_stop_words',
		description: 'Compilation of english stop words',
		keymap: {
			formattedWord: {
				key: 'Formatted word',
				value: 'Original word'
			}
		}
	},
	{
		displayname: 'Common english words',
		filename: 'common_english_words',
		description:
			'English words and their types such as time, web and family',
		keymap: {
			formattedWord: {
				type: 'Type of word',
				value: 'Original word'
			}
		}
	},
	{
		displayname: 'Human given names',
		filename: 'human_given_names',
		description: 'Human given names including sex',
		keymap: {
			formattedName: {
				sex: 'Sex',
				value: 'Original name'
			}
		}
	},
	...alphabet.map(letter => generateWorldCities(letter)),
	...alphabet.map(letter => generateEnglishWords(letter))
];

module.exports = {
	datasetIndex
};
