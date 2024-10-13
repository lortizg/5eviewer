export type Species = {
	meta: Meta;
	race: Race[];
	subrace: Subrace[];
}

export type Meta = {
	internalCopies: string[];
}

export type Race = {
	name: string;
	source: string;
	page: number;
	size?: Size[];
	speed?: PurpleSpeed | number;
	ability?: RaceAbility[];
	traitTags?: string[] | null;
	languageProficiencies?: RaceLanguageProficiency[];
	entries?: Array<FluffyEntry | string>;
	otherSources?: Source[];
	reprintedAs?: string[];
	age?: Age;
	soundClip?: SoundClip;
	hasFluff?: boolean;
	hasFluffImages?: boolean;
	lineage?: boolean | "VRGR";
	additionalSpells?: RaceAdditionalSpell[];
	darkvision?: number;
	resist?: Array<ResistClass | string>;
	versions?: RaceVersion[];
	heightAndWeight?: HeightAndWeight | null;
	creatureTypes?: string[];
	sizeEntry?: SizeEntry;
	skillProficiencies?: RaceSkillProficiency[];
	creatureTypeTags?: string[];
	toolProficiencies?: RaceToolProficiency[];
	conditionImmune?: string[];
	copy?: Copy;
	feats?: RaceFeat[];
	srd?: boolean;
	basicRules?: boolean;
	weaponProficiencies?: WeaponProficiency[];
	freeRules2024?: boolean;
	additionalSources?: Source[];
	blindsight?: number;
	immune?: Immune[];
	armorProficiencies?: RaceArmorProficiency[];
	vulnerable?: string[];
}

export type RaceAbility = {
	dex?: number;
	wis?: number;
	cha?: number;
	choose?: AbilityChoose;
	str?: number;
	int?: number;
	con?: number;
}

export type AbilityChoose = {
	from: FromElement[];
	count?: number;
	amount?: number;
}

export type FromElement = "int" | "wis" | "cha" | "str" | "dex" | "con";

export type Source = {
	source: string;
	page?: number;
}

export type RaceAdditionalSpell = {
	innate?: { [key: string]: string[] | PurpleInnate };
	ability?: AdditionalSpellAbilityClass | FromElement;
	known?: FluffyKnown;
}

export type AdditionalSpellAbilityClass = {
	choose: FromElement[];
}

export type PurpleInnate = {
	daily: RESTClass;
}

export type RESTClass = {
	the1: string[];
}

export type FluffyKnown = {
	the1?: string[] | Fluffy1;
	empty?: Known[];
}

export type Known = {
	choose: string;
	count: number;
}

export type Fluffy1 = {
	rest: RESTClass;
}

export type Age = {
	mature?: number;
	max: number;
}

export type RaceArmorProficiency = {
	light: boolean;
}

export type Copy = {
	name: string;
	source: string;
	mod: CopyMod;
	preserve?: Preserve;
}

export type CopyMod = {
	entries: Entr[] | Entr;
}

export type Entr = {
	mode: Mode;
	replace?: string;
	items?: SizeEntry;
	names?: string;
}

export type SizeEntry = {
	name: string;
	type: SizeEntryType;
	entries?: string[];
	entry?: string;
}

export type SizeEntryType = "entries" | "item" | "itemSpell";

export type Mode = "replaceArr" | "appendArr" | "removeArr";

export type Preserve = {
	reprintedAs: boolean;
}

export type FluffyEntry = {
	name?: string;
	entries: Array<TentacledEntry | string>;
	type: FluffyType;
	data?: Data;
}

export type Data = {
	overwrite: string;
}

export type TentacledEntry = {
	type: PurpleType;
	items?: Array<SizeEntry | string>;
	style?: "list-hang-notitle";
	caption?: string;
	colLabels?: string[];
	colStyles?: PurpleColStyle[];
	rows?: Array<string[]>;
	name?: string;
	entries?: string[];
}

export type PurpleColStyle = "col-3 text-center" | "col-6" | "col-6 text-center" | "col-2";

export type PurpleType = "list" | "table" | "inset";

export type FluffyType = "entries" | "inset";

export type RaceFeat = {
	any?: number;
	anyFromCategory?: AnyFromCategory;
}

export type AnyFromCategory = {
	category: string;
	count: number;
}

export type HeightAndWeight = {
	baseHeight: number;
	heightMod: HeightMod;
	baseWeight: number;
	weightMod?: string;
}

export type HeightMod = "2d10" | "2d12" | "1d10" | "2d4" | "2d8" | "2d6";

export type Immune = "acid" | "lightning" | "fire" | "poison" | "cold" | "necrotic";

export type RaceLanguageProficiency = {
	auran?: boolean;
	common?: boolean;
	other?: boolean;
	celestial?: boolean;
	anyStandard?: number;
	goblin?: boolean;
	sylvan?: boolean;
	draconic?: boolean;
	dwarvish?: boolean;
	elvish?: boolean;
	giant?: boolean;
	primordial?: boolean;
	gnomish?: boolean;
	terran?: boolean;
	undercommon?: boolean;
	orc?: boolean;
	halfling?: boolean;
	aquan?: boolean;
	choose?: ChooseElement;
	infernal?: boolean;
	abyssal?: boolean;
}

export type ChooseElement = {
	from: string[];
	count?: number;
}

export type ResistClass = {
	choose: ResistChoose;
}

export type ResistChoose = {
	from: string[];
}

export type Size = "M" | "S" | "V";

export type RaceSkillProficiency = {
	intimidation?: boolean;
	perception?: boolean;
	stealth?: boolean;
	choose?: ChooseElement;
	any?: number;
	athletics?: boolean;
	acrobatics?: boolean;
	performance?: boolean;
	persuasion?: boolean;
	survival?: boolean;
}

export type SoundClip = {
	type: "internal";
	path: string;
}

export type PurpleSpeed = {
	walk: number;
	fly?: boolean | number;
	swim?: boolean | number;
	climb?: boolean | number;
	burrow?: number;
}

export type RaceToolProficiency = {
	any?: number;
	choose?: ResistChoose;
	anyArtisansTool?: number;
	tinkerSTools?: boolean;
	poisonerSKit?: boolean;
	musicalInstrument?: boolean;
}

export type RaceVersion = {
	name?: string;
	source?: PurpleSource;
	mod?: PurpleMod;
	traitTags?: string[];
	skillProficiencies?: null;
	darkvision?: number | null;
	abstract?: Abstract;
	implementations?: PurpleImplementation[];
	additionalSpells?: VersionAdditionalSpell[] | null;
	speed?: number;
	resist?: Immune[];
}

export type Abstract = {
	name: string;
	source: string;
	mod: AbstractMod;
}

export type AbstractMod = {
	entries: Entr[];
}

export type VersionAdditionalSpell = {
	innate?: { [key: string]: AdditionalSpellInnateClass };
	ability: AdditionalSpellAbilityClass;
	known: PurpleKnown;
}

export type AdditionalSpellInnateClass = {
	daily: PurpleDaily;
}

export type PurpleDaily = {
	the1?: string[];
	pb?: string[];
}

export type PurpleKnown = {
	the1: string[] | Purple1;
}

export type Purple1 = {
	empty: The1__[];
}

export type The1__ = {
	choose: string;
}

export type PurpleImplementation = {
	variables: PurpleVariables;
	resist?: string[];
}

export type PurpleVariables = {
	color: string;
	damageType: string;
}

export type PurpleMod = {
	entries: EntriesClass;
}

export type EntriesClass = {
	mode: Mode;
	replace?: string;
	items: Items;
}

export type Items = {
	name: string;
	type: SizeEntryType;
	entries: Array<PurpleEntry | string>;
}

export type PurpleEntry = {
	type: PurpleType;
	style: "list-hang-notitle";
	items: SizeEntry[];
}

export type PurpleSource = "MPMM" | "PSK" | "TCE" | "XPHB";

export type WeaponProficiency = {
	battleaxePhb?: boolean;
	handaxePhb?: boolean;
	lightHammerPhb?: boolean;
	warhammerPhb?: boolean;
	longswordPhb?: boolean;
	shortswordPhb?: boolean;
	shortbowPhb?: boolean;
	longbowPhb?: boolean;
	firearms?: boolean;
	choose?: WeaponProficiencyChoose;
	spearPhb?: boolean;
	javelinPhb?: boolean;
}

export type WeaponProficiencyChoose = {
	fromFilter: string;
	count: number;
}

export type Subrace = {
	name?: string;
	source: string;
	raceName: string;
	raceSource: string;
	page: number;
	reprintedAs?: string[];
	ability?: RaceAbility[];
	entries?: Array<StickyEntry | string>;
	hasFluff?: boolean;
	hasFluffImages?: boolean;
	skillProficiencies?: SubraceSkillProficiency[] | null;
	speed?: TentacledSpeed | number;
	traitTags?: string[];
	toolProficiencies?: SubraceToolProficiency[];
	srd?: boolean;
	versions?: SubraceVersion[];
	darkvision?: number;
	resist?: Immune[] | null;
	overwrite?: SubraceOverwrite;
	otherSources?: Source[] | null;
	languageProficiencies?: SubraceLanguageProficiency[];
	additionalSpells?: SubraceAdditionalSpell[] | null;
	basicRules?: boolean;
	heightAndWeight?: HeightAndWeight;
	armorProficiencies?: SubraceArmorProficiency[];
	alias?: string[];
	weaponProficiencies?: { [key: string]: boolean }[];
	skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
	age?: Age;
	soundClip?: SoundClip;
	feats?: SkillProficiencyElement[];
}

export type SubraceAdditionalSpell = {
	innate?: { [key: string]: string[] | FluffyInnate };
	ability: AdditionalSpellAbilityClass | FromElement;
	expanded?: Expanded;
	known?: TentacledKnown;
}

export type Expanded = {
	s1: string[];
	s2: string[];
	s3: string[];
	s4: string[];
	s5: string[];
}

export type FluffyInnate = {
	daily?: RESTClass;
	rest?: RESTClass;
}

export type TentacledKnown = {
	the1: string[] | Tentacled1;
}

export type Tentacled1 = {
	rest?: RESTClass;
	empty?: The1__[];
}

export type SubraceArmorProficiency = {
	light: boolean;
	medium: boolean;
}

export type StickyEntry = {
	name: string;
	entries: Array<IndigoEntry | string>;
	type: FluffyType;
	data?: Data;
}

export type IndigoEntry = {
	type: TentacledType;
	caption?: string;
	colLabels?: ColLabel[];
	colStyles?: FluffyColStyle[];
	rows?: Array<string[]>;
	style?: "list-hang-notitle";
	items?: SizeEntry[];
	name?: string;
	entries?: string[];
}

export type ColLabel = "Dragon" | "Damage Type" | "Breath Weapon" | "Spell Level" | "Spells";

export type FluffyColStyle = "col-3 text-center" | "col-6" | "col-2 text-center" | "col-10";

export type TentacledType = "table" | "list" | "entries";

export type SkillProficiencyElement = {
	any: number;
}

export type SubraceLanguageProficiency = {
	common: boolean;
	dwarvish?: boolean;
	undercommon?: boolean;
	elvish?: boolean;
	anyStandard?: number;
	aquan?: boolean;
	gnomish?: boolean;
	goblin?: boolean;
	other?: boolean;
}

export type SubraceOverwrite = {
	ability?: boolean;
	traitTags?: boolean;
	languageProficiencies?: boolean;
	skillProficiencies?: boolean;
}

export type SubraceSkillProficiency = {
	perception?: boolean;
	animalHandling?: boolean;
	any?: number;
	athletics?: boolean;
	survival?: boolean;
	intimidation?: boolean;
	history?: boolean;
	nature?: boolean;
	sleightOfHand?: boolean;
	stealth?: boolean;
	deception?: boolean;
	persuasion?: boolean;
	acrobatics?: boolean;
}

export type SkillToolLanguageProficiency = {
	choose: ChooseElement[];
}

export type TentacledSpeed = {
	walk: number;
	swim?: boolean | number;
	fly?: number;
}

export type SubraceToolProficiency = {
	any?: number;
	tinkerSTools?: boolean;
	thievesTools?: boolean;
	anyArtisansTool?: number;
	navigatorSTools?: boolean;
}

export type SubraceVersion = {
	abstract?: Abstract;
	implementations?: FluffyImplementation[];
	name?: string;
	source?: "SCAG";
	mod?: FluffyMod;
	skillProficiencies?: SkillProficiencyElement[] | null;
	speed?: FluffySpeed | number;
	overwrite?: VersionOverwrite;
	additionalSpells?: null;
	weaponProficiencies?: null;
}

export type FluffyImplementation = {
	variables: FluffyVariables;
	resist?: Immune[];
}

export type FluffyVariables = {
	color: string;
	damageType: Immune;
	area: Area;
	savingThrow: SavingThrow;
}

export type Area = "5-foot-wide, 30-foot-long line" | "15-foot cone";

export type SavingThrow = "Dexterity" | "Constitution";

export type FluffyMod = {
	entries: Entr;
}

export type VersionOverwrite = {
	skillProficiencies: boolean;
}

export type FluffySpeed = {
	walk: number;
	swim: number;
}
