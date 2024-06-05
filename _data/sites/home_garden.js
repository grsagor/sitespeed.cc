module.exports = {
    name: "HG", // optional, falls back to object key
    description: "Home & Garden web sites",
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
        "https://www.stanley1913.com/",
        "https://overstock.com",
        "https://ruggable.com/",
        "https://www.craftsman.com",
        "https://www.thesill.com",
        "https://www.fast-growing-trees.com",
        "https://instantpot.com",
        "https://www.blackanddecker.com",
        "https://hoover.com",
        "https://www.igloocoolers.com",
        "https://www.dremel.com",
        "https://ring.com",
        "https://www.hermanmiller.com",

    ]
};