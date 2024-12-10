Hooks.on("initializeDynamicTokenRingConfig", (a) => {
    const SkyKingsTombRing = new foundry.canvas.tokens.DynamicRingData({
    Id: 'pathfinderSkyKingsTombRing',
    label: "sky king's tomb ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/sky-kings.json"
  });
  a.addConfig("skykingsrings", SkyKingsTombRing);

  const PrototypeRing = new foundry.canvas.tokens.DynamicRingData({
    id: 'CustomRingPrototype',
    label: "custom test ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/custom token ring.json"
  });
  a.addConfig("customtokenring", PrototypeRing);

  const DesertRing = new foundry.canvas.tokens.DynamicRingData({
    id: 'DesertRing',
    label: "Desert ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/Desert token spritesheet.json"
  });
  a.addConfig("customtokenring", DesertRing);

  const ArchivesRing = new foundry.canvas.tokens.DynamicRingData({
    id: 'ArchivesRing',
    label: "Archives Ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/Archives Spritesheet.json"
  });
  a.addConfig("customtokenring", ArchivesRing);
});
