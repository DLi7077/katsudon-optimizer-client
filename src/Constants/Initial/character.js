const INITIAL_STATS_LEFT =
	[
		{ label: "Lv.", value: "Level" },
		{ label: "Base Attack", value: "Base Attack" },
		{ label: "ATK%", value: "ATK %" },
		{ label: "ATK", value: "Flat Attack" },
		{ label: "HP%", value: "HP %" },
		{ label: "HP", value: "Flat HP" },
		{ label: "DEF%", value: "DEF %" },
		{ label: "DEF", value: "Flat Defense" },
		{ label: "Energy Recharge%", value: "Energy Recharge%" },
		{ label: "Elem. Mastery", value: "Elemental Mastery" },
		{ label: "Crit Rate%", value: "Crit Rate" },
		{ label: "Crit Damage%", value: "Crit Damage" },
	];


const INITIAL_STATS_RIGHT = [
	{ label: "Anemo DMG Bonus%", value: "Anemo DMG Bonus%" },
	{ label: "Cryo DMG Bonus%", value: "Cryo DMG Bonus%" },
	{ label: "Dendro DMG Bonus%", value: "Dendro DMG Bonus%", },
	{ label: "Electro DMG Bonus%", value: "Electro DMG Bonus%" },
	{ label: "Geo DMG Bonus%", value: "Geo DMG Bonus%" },
	{ label: "Hydro DMG Bonus%", value: "Hydro DMG Bonus%" },
	{ label: "Pyro DMG Bonus%", value: "Pyro DMG Bonus%" },
	{ label: "Physical DMG Bonus%", value: "Physical DMG Bonus%" },
	{ label: "Other DMG Bonus%", value: "Other DMG Bonus%" },
	{ label: "Talent DMG Bonus%", value: "Talent DMG Bonus%" },
	{ label: "Quicken Bonus%", value: "Quicken Bonus%" },
	{ label: "Melt Bonus%", value: "Melt Bonus%" },
	{ label: "Defense Ignore%", value: "Defense Ignore%" },
]

export const INITIAL_CHARACTER_STATS = {
	leftStats: INITIAL_STATS_LEFT,
	rightStats: INITIAL_STATS_RIGHT
}