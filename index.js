Hooks.on("initializeDynamicTokenRingConfig", (a) => {
  const A1 = new foundry.canvas.tokens.DynamicRingData({
    Id: 'PathfinderBloodLordsRing',
    label: "blood lords ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/rings-blood.json"
  });
  a.addConfig("bloodring", A1);

    const A2 = new foundry.canvas.tokens.DynamicRingData({
    Id: 'pathfinderSkyKingsTombRing',
    label: "sky king's tomb ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/sky-kings.json"
  });
  a.addConfig("skykingsrings", A2);

  const A3 = new foundry.canvas.tokens.DynamicRingData({
    id: 'CustomRingPrototype',
    label: "custom test ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/custom token ring.json"
  });
  a.addConfig("customtokenring", A3);

  const A4 = new foundry.canvas.tokens.DynamicRingData({
    id: 'DesertRing',
    label: "Desert ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/Desert token spritesheet.json"
  });
  a.addConfig("customtokenring", A4);

  const A5 = new foundry.canvas.tokens.DynamicRingData({
    id: 'ArchivesRing',
    label: "Archives Ring",
    spritesheet: "modules/rebels-custom-token-rings/rings/Archives Spritesheet.json"
  });
  a.addConfig("customtokenring", A5);
});
