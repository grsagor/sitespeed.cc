module.exports = {
    name: "APPAREL", // optional, falls back to object key
    description: "Apparel webs ites",
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
        "https://www.fashionnova.com",
        "https://www.stevemadden.com",
        "https://www.wearfigs.com",
        "https://www.heydude.com",
        "https://vuoriclothing.com",
        "https://www.windsorstore.com",
        "https://www.keenfootwear.com",
        "https://spanx.com",
        "https://fearofgod.com",
        "https://www.rainbowshops.com",
        "https://bombas.com",
        "https://kith.com",
        "https://timex.com",
        "https://www.allbirds.com",
        "https://www.thirdlove.com",
        "https://www.neweracap.com",
        "https://rothys.com",
        "https://www.carhartt-wip.com",
        "https://www.puravidabracelets.com",
        "https://www.ohpolly.com",
        "https://www.goodamerican.com",
        "https://petalandpup.com",
        "https://www.whitefoxboutique.com",
        "https://www.stussy.com",
        "https://www.stetson.com",
        "https://www.alexandani.com",
        "https://www.pitviper.com",

    ]
};