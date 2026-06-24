# Red Graphite

Bear-like look for Obsidian — typography and colors based on Bear's
"Red Graphite" (default) theme, with red accents, red list bullets and
Bear-style heading weights. Light and dark variants included.

## Установка через BRAT (рекомендуется для своих устройств)

1. Установи плагин **BRAT** (Obsidian → Settings → Community plugins → BRAT) и включи его.
2. Command palette → **BRAT: Add a beta theme**.
3. Вставь ссылку на этот репозиторий: `https://github.com/isuvorov/obsidian-red-graphite`.
4. BRAT скачает тему. Включи её: **Settings → Appearance → Themes → Red Graphite**.

Повтори шаги 2–4 на каждом устройстве/vault один раз. Дальше обновления
прилетают автоматически (BRAT проверяет `version` в `manifest.json`).

## Обновление темы

1. Правишь `theme.css`.
2. Бампаешь `version` в `manifest.json` (например `1.0.0` → `1.0.1`).
3. `git commit && git push`.

BRAT на всех устройствах подтянет новую версию сам (или вручную:
**BRAT: Check for updates to all beta plugins and themes**).

## Заметка про шрифт

Тема использует шрифт `Bear Sans UI` с фолбэком на системный (`-apple-system`).
Если шрифт Bear не установлен в системе — будет системный шрифт, остальное оформление сохранится.
