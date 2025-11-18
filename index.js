Hooks.once("init", () => {
  game.settings.register("rebels-custom-token-rings", "enable-colorband-rctr", {
    name: "Enable color band?",
    hint: "the color band is the small (by default white) ring that sits nested in the token ring, this can be used for effects if your system supports it, or if you have a module that supports it. \n(This setting is only for the token rings that come with this module)",
    scope: "world",
    config: true,
    type: Boolean,
    default: "true",
    requiresReload: true
  });
});

Hooks.on("initializeDynamicTokenRingConfig", (a) => {
  const useColorBand = game.settings.get("rebels-custom-token-rings", "enable-colorband-rctr");
  
  const dwarvenRingSpritesheet = useColorBand
  ? "modules/rebels-custom-token-rings/rings/Dwarven ring/Dwarven-ring-color-band.json"
  : "modules/rebels-custom-token-rings/rings/Dwarven ring/Dwarven-ring-no-color-band.json";

  const desertRingSpritesheet = useColorBand
  ? "modules/rebels-custom-token-rings/rings/Desert ring/Desert-ring-color-band.json"
  : "modules/rebels-custom-token-rings/rings/Desert ring/Desert-ring-no-color-band.json";

  const radiantRingSpritesheet = useColorBand
  ? "modules/rebels-custom-token-rings/rings/Radiant ring/Radiant-ring-color-band.json"
  : "modules/rebels-custom-token-rings/rings/Radiant ring/Radiant-ring-no-color-band.json";

  const archivesRingSpritesheet = useColorBand
  ? "modules/rebels-custom-token-rings/rings/Archives ring/Archives-ring-color-band.json"
  : "modules/rebels-custom-token-rings/rings/Archives ring/Archives-ring-no-color-band.json";

  const kingdomRingSpritesheet = useColorBand
  ? "modules/rebels-custom-token-rings/rings/kingdom ring/Kingdom-ring-color-band.json"
  : "modules/rebels-custom-token-rings/rings/kingdom ring/Kingdom-ring-no-color-band.json";



  const DwarvenRing_rctr = new foundry.canvas.placeables.tokens.DynamicRingData({
    Id: 'DwarvenRing_rctr',
    label: "Dwarven Ring",
    spritesheet: dwarvenRingSpritesheet
  });
  a.addConfig("dwarvenRing_rctr", DwarvenRing_rctr);

  const RadiantRing_rctr = new foundry.canvas.placeables.tokens.DynamicRingData({
    id: 'RadiantRing_rctr',
    label: "Radiant Ring",
    spritesheet: radiantRingSpritesheet
  });
  a.addConfig("RadiantRing_rctr", RadiantRing_rctr);

  const DesertRing_rctr = new foundry.canvas.placeables.tokens.DynamicRingData({
    id: 'DesertRing_rctr',
    label: "Desert Ring",
    spritesheet: desertRingSpritesheet
  });
  a.addConfig("DesertRing_rctr", DesertRing_rctr);

  const ArchivesRing_rctr = new foundry.canvas.placeables.tokens.DynamicRingData({
    id: 'ArchivesRing_rctr',
    label: "Archives Ring",
    spritesheet: archivesRingSpritesheet
  });
  a.addConfig("ArchivesRing_rctr", ArchivesRing_rctr);

  const KingdomRing_rctr = new foundry.canvas.placeables.tokens.DynamicRingData({
    id: 'KingdomRing_rctr',
    label: "Kingdom Ring",
    spritesheet: kingdomRingSpritesheet
  });
  a.addConfig("KingdomRing_rctr", KingdomRing_rctr);
});
