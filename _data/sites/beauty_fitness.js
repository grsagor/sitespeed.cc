module.exports = {
	name: "BF", // optional, falls back to object key
	description: "Beauty & Fitness web sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 24, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://fentybeauty.com",
		"https://skims.com",
		"https://www.aloyoga.com",
		"https://waxcenter.com",
		"https://www.gymshark.com",
		"https://www.rarebeauty.com",
		"https://jeffreestarcosmetics.com",
		"https://www.opi.com",
		"https://colourpop.com",
		"https://soldejaneiro.com",
		"https://www.glossier.com",
		"https://inkbox.com",
		"https://www.manscaped.com",
		"https://olaplex.com",
		"https://www.drsquatch.com",
		"https://www.glowrecipe.com",
		"https://www.laurageller.com",
		"https://mielleorganics.com",
		"https://loveamika.com",
		"https://www.onepeloton.com",
		"https://www.dcshoes.com",
		"https://www.browning.com",
		"https://www.elgato.com",
		"https://www.benchmade.com",
		"https://eagles.com",
		"https://www.schwinnbikes.com",

	]
};