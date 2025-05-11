// TODO: Separate data and logic, fix sections that don't make sense (like ending with "in a realm")

// Data arrays
const prefixes = [
	'Create',
	'Make',
	'You are drawing',
	'Your illustration is of',
	'You are creating',
	'Paint',
	'This painting is of'
];

const types = [
	'tarot card',
	'portrait',
	'landscape',
	'still life',
	'character',
	'scene',
	'concept art'
];

const adjectives = [
	'mysterious',
	'serene',
	'energetic',
	'peaceful',
	'majestic',
	'wise',
	'powerful',
	'ancient',
	'mystical',
	'ethereal',
	'otherworldly',
	'enchanted',
	'celestial',
	'infernal',
	'sacred',
	'profane',
	'divine',
	'demonic',
	'legendary',
	'mythical'
];

const adverbs = [
	'mysteriously',
	'serenely',
	'energetically',
	'peacefully',
	'majestically',
	'wisely',
	'powerfully',
	'ancient',
	'mystically',
	'ethereally',
	'otherworldly',
	'enchantingly',
	'celestially',
	'infernally',
	'sacredly',
	'profanely',
	'divinely',
	'demonically',
	'legendarily',
	'mythically'
];

const styles = [
	'a watercolor',
	'a classic',
	'a dark',
	'a fantasy',
	'a surreal',
	'an oil painting',
	'a moody',
	'a realistic',
	'a dreamy',
	'an abstract'
];

const subjects = [
	'an empress',
	'a warrior',
	'a dragon',
	'a castle',
	'a tower',
	'a forest',
	'a farmer',
	'a knight',
	'a monster',
	'a witch',
	'a wizard',
	'a hero',
	'a villain',
	'a creature',
	'a beast',
	'a fairy',
	'a ghost',
	'a spirit',
	'a demon',
	'an angel',
	'a god',
	'a goddess',
	'a priest',
	'a warlock'
];

const titlePrefix = [
	'queen',
	'empress',
	'king',
	'emperor',
	'prince',
	'princess',
	'duke',
	'duchess',
	'lord',
	'lady',
	'baron',
	'baroness',
	'god',
	'goddess',
	'angel',
	'demon',
	'devourer',
	'destroyer',
	'guardian',
	'protector'
];

const titleSuffix = [
	'forest',
	'the sea',
	'the sky',
	'stars',
	'the underworld',
	'heavens',
	'earth',
	'night',
	'day',
	'lies',
	'the sun',
	'moons',
	'light',
	'darkness',
	'fire',
	'ice',
	'wind',
	'water',
	'earth',
	'spirits',
	'lost souls',
	'heart',
	'mind',
	'dreams',
	'thoughts',
	'memories',
	'wishes',
	'desires',
	'fears',
	'hopes'
];

const settings = [
	'a castle',
	'a tower',
	'a forest',
	'a village',
	'a city',
	'a kingdom',
	'a realm',
	'an empire',
	'a world',
	'a dimension',
	'a universe'
];

const actions = [
	'fighting',
	'flying',
	'running',
	'walking',
	'sitting',
	'standing',
	'lying',
	'jumping',
	'swimming',
	'climbing',
	'dancing',
	'singing',
	'playing',
	'laughing',
	'crying',
	'reading',
	'casting',
	'meditating',
	'praying',
	'chanting'
];

const colors = [
	'red',
	'blue',
	'green',
	'yellow',
	'purple',
	'orange',
	'pink',
	'black',
	'white',
	'gray',
	'brown',
	'gold',
	'silver'
];

// Helper functions
const getRandomElement = <T>(array: T[]): T => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

const generateTitle = (): string => {
	const prefix = getRandomElement(titlePrefix);
	const suffix = getRandomElement(titleSuffix);
	return `${prefix} of ${suffix}`;
};

// Main function
export const generatePrompt = (): string => {

	const prefix = getRandomElement(prefixes);
	const style = getRandomElement(styles);
	const type = getRandomElement(types);
	const useTitle = Math.random() < 0.3;

	const mainSubject = useTitle
		? { text: generateTitle(), canAct: true }
		: {
				text: getRandomElement(subjects),
				canAct: true
			};

	const descriptors = [];

	if (Math.random() < 0.3) {
		descriptors.push(getRandomElement(colors));
	}

	if (Math.random() < 0.5) {
		descriptors.push(getRandomElement(adjectives));
	}

	const describedSubject = descriptors.join(' ') + ' ' + mainSubject.text;

	let prompt =
		type === 'character'
			? `${prefix} ${style} ${describedSubject}`
			: `${prefix} ${style} ${type} ${getRandomElement(['showing', 'featuring', 'of'])} ${describedSubject}`;

	// Add action and adverb if subject can act
	if (mainSubject.canAct && Math.random() < 0.7) {
		const action = getRandomElement(actions);
		const adverb = getRandomElement(adverbs);
		prompt += ` ${action} ${adverb}`;
	}

	if (Math.random() < 0.8) {
		prompt += ` in ${getRandomElement(settings)}`;
	}

	return prompt;
};