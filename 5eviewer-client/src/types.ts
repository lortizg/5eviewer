
export type SelectedClass = {
	class: string,
	source: Source
}

export type ClassInfo = {
	meta: Meta;
	class: Class[];
	subclass: Subclass[];
	classFeature: WelcomeClassFeature[];
	subclassFeature: SubclassFeature[];
}

export type Class = {
	name: string;
	source: Source;
	page: number;
	srd?: boolean;
	basicRules?: boolean;
	reprintedAs?: string[];
	edition: Edition;
	hd: HD;
	proficiency: string[];
	spellcastingAbility: string;
	casterProgression: string;
	preparedSpells?: string;
	cantripProgression: number[];
	spellsKnownProgressionFixed: number[];
	spellsKnownProgressionFixedAllowLowerLevel: boolean;
	startingProficiencies: StartingProficiencies;
	startingEquipment: StartingEquipment;
	multiclassing: Multiclassing;
	classTableGroups: ClassTableGroup[];
	classFeatures: Array<ClassFeatureClassFeature | string>;
	subclassTitle: string;
	hasFluff: boolean;
	hasFluffImages: boolean;
	freeRules2024?: boolean;
	primaryAbility?: PrimaryAbility[];
	preparedSpellsProgression?: number[];
}

export type ClassFeatureClassFeature = {
	classFeature: string;
	gainSubclassFeature: boolean;
}

export type ClassTableGroup = {
	colLabels: string[];
	rows?: Array<number[]>;
	title?: string;
	rowsSpellProgression?: Array<number[]>;
}

export type Edition = "classic" | "one";

export type HD = {
	number: number;
	faces: number;
}

export type Multiclassing = {
	requirements?: Requirements;
}

export type Requirements = {
	int: number;
}

export type PrimaryAbility = {
	int: boolean;
}

export type Source = "" | "PHB" | "XPHB" | "TCE" | "EGW" | "TDCSR" | "XGE";

export type StartingEquipment = {
	additionalFromBackground?: boolean;
	default?: string[];
	goldAlternative?: string;
	defaultData: DefaultDatum[];
	entries?: string[];
}

export type DefaultDatum = {
	defaultDatumA?: string[];
	defaultDatumB?: Array<BClass | string>;
	empty?: string[];
	a?: A[];
	b?: B[];
}

export type A = {
	item?: string;
	quantity?: number;
	special?: string;
	value?: number;
}

export type B = {
	value: number;
}

export type BClass = {
	equipmentType: string;
}

export type StartingProficiencies = {
	weapons: string[];
	skills: Skill[];
}

export type Skill = {
	choose: Choose;
}

export type Choose = {
	from: string[];
	count: number;
}

export type WelcomeClassFeature = {
	name: string;
	source: Source;
	page: number;
	srd?: boolean;
	basicRules?: boolean;
	className: "Wizard";
	classSource: Source;
	level: number;
	entries: Array<PurpleEntry | string>;
	isClassFeatureVariant?: boolean;
}

export type PurpleEntry = {
	type: string;
	name?: string;
	entries: Array<FluffyEntry | string>;
}

export type FluffyEntry = {
	type: string;
	name?: string;
	attributes?: string[];
	entries?: Array<TentacledEntry | string>;
}

export type TentacledEntry = {
	type: Type;
	name: string;
	entries: Array<StickyEntry | string>;
}

export type StickyEntry = {
	type: Type;
	name: string;
	source: string;
	page: number;
	entries: string[];
}

export type Type = "entries" | "refSubclassFeature" | "options" | "list";

export type Meta = {
	internalCopies: string[];
}

export type Subclass = {
	name: string;
	shortName: string;
	source: Source;
	className: "Wizard";
	classSource: Source;
	page?: number;
	reprintedAs?: string[];
	edition?: Edition;
	subclassFeatures: string[];
	copy?: Copy;
	srd?: boolean;
	basicRules?: boolean;
	additionalSpells?: AdditionalSpell[];
	hasFluffImages?: boolean;
	fluff?: Fluff;
	otherSources?: OtherSource[];
	freeRules2024?: boolean;
}

export type AdditionalSpell = {
	known?: { [key: string]: string[] };
	expanded?: Expanded;
	prepared?: { [key: string]: string[] };
}

export type Expanded = {
	the1: The1[];
}

export type The1 = {
	all: string;
}

export type Copy = {
	name: string;
	source: Source;
	shortName: string;
	className: "Wizard";
	classSource: Source;
	preserve?: SubclassFluffPreserve;
}

export type SubclassFluffPreserve = {
	page: boolean;
	otherSources: boolean;
	srd: boolean;
	basicRules: boolean;
	reprintedAs: boolean;
}

export type Fluff = {
	subclassFluff: Copy;
}

export type OtherSource = {
	source: string;
	page: number;
}

export type SubclassFeature = {
	name: string;
	source: Source;
	page?: number;
	className: "Wizard";
	classSource: Source;
	subclassShortName: string;
	subclassSource: Source;
	level: number;
	entries?: Array<IndigoEntry | string>;
	header?: number;
	srd?: boolean;
	basicRules?: boolean;
	otherSources?: OtherSource[];
	type?: string;
	copy?: SubclassFeatureCopy;
	freeRules2024?: boolean;
}

export type SubclassFeatureCopy = {
	name: string;
	source: Source;
	className: "Wizard";
	classSource: Source;
	subclassShortName: string;
	subclassSource: Source;
	level: number;
	preserve: PurplePreserve;
}

export type PurplePreserve = {
	page: boolean;
}

export type IndigoEntry = {
	type: Type;
	subclassFeature?: string;
	entries?: Array<IndecentEntry | string>;
	items?: string[];
	name?: string;
}

export type IndecentEntry = {
	type: Type;
	name: string;
	entries: string[];
}