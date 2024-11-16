Hooks.on("initializeDynamicTokenRingConfig", (a) => {
  const s = new foundry.canvas.tokens.DynamicRingData({
    label: "blood ring",
    effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
    },
    spritesheet: "modules/Custom-token-rings/rings/rings-blood.json"
  });
  a.addConfig("bloodringstesting", s);
});
Hooks.on("initializeDynamicTokenRingConfig", (a) => {
  const s = new foundry.canvas.tokens.DynamicRingData({
    label: "sky king's ring",
    effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
    },
    spritesheet: "modules/Custom-token-rings/rings/sky-kings.json"
  });
  a.addConfig("skykingsrings", s);
});
console.log(`[${f}@${Z}...] successfully loaded!`);
