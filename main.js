'use strict';

// Минимальный плагин-наложение. Сам по себе ничего не делает —
// Obsidian автоматически подключает styles.css этого плагина поверх
// текущей темы (Cupertino), пока плагин включён. При выключении —
// CSS снимается. Сборка/транспиляция не нужна: Obsidian грузит main.js как есть.
const { Plugin } = require('obsidian');

module.exports = class RedGraphiteInCupertino extends Plugin {
  onload() {}
  onunload() {}
};
