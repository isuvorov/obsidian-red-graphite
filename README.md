# Red Graphite in Cupertino

Bear-like "Red Graphite" styling (red accents, red list bullets, Bear heading
weights, light + dark) as a **plugin overlay** — it layers on top of your
current theme (e.g. Cupertino) instead of replacing it.

Сделано плагином, а не темой/сниппетом, специально чтобы:
- не заменять твою основную тему;
- раздаваться на все устройства через **BRAT** с автообновлением
  (сниппеты BRAT раздавать не умеет, плагины — умеет).

## Установка через BRAT

1. Установи и включи плагин **BRAT** (Settings → Community plugins).
2. Command palette → **BRAT: Add a beta plugin**.
3. Вставь: `https://github.com/isuvorov/obsidian-red-graphite`
4. Включи плагин: Settings → Community plugins → **Red Graphite in Cupertino**.

CSS наложится поверх текущей темы. Выключишь плагин — оформление снимется.
Повтори на каждом устройстве/vault один раз; дальше обновления прилетают сами.

> BRAT берёт `main.js` + `manifest.json` + `styles.css` из последнего GitHub **Release**.
> Без релиза будет ошибка `no releases found` — см. ниже.

## Выпуск новой версии (через CI)

Релизы собирает GitHub Actions (`.github/workflows/release.yml`) при пуше тега.
Вручную `gh release create` больше не нужен:

1. Правишь `styles.css`.
2. Бампаешь `version` в `manifest.json` (например `0.0.1` → `0.0.2`).
3. Коммит, пуш, тег:
   ```bash
   git commit -am "v0.0.2"
   git push
   git tag 0.0.2
   git push origin 0.0.2
   ```

CI проверит, что тег совпадает с `version` в `manifest.json`, и создаст
Release с `main.js` + `manifest.json` + `styles.css`. BRAT на всех устройствах
подтянет обновление автоматически.

> Тег обязан совпадать с `version` в `manifest.json` — иначе CI упадёт намеренно.
