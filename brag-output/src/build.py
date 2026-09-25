# Assembles index.html from index.template.html: shared facet SVGs and the audio track list.
FACETS = '<svg class="facets" id="{id}" data-layout-allow-overflow viewBox="0 0 1300 900"><polygon points="300,0 650,0 475,300" opacity=".10"/><polygon points="250,300 650,900 -150,900" opacity=".09"/><polygon points="650,300 1050,900 250,900" opacity=".05"/><polygon points="1050,300 1450,900 650,900" opacity=".09"/></svg>'
sfx = [  # (id, file, start, volume)
  ("hook", "impactSoft_medium_001.ogg", 2.73, .9), ("hero", "impactSoft_medium_004.ogg", 4.91, .7),
  ("who1", "card-slide-1.ogg", 10.93, .45), ("who2", "card-slide-1.ogg", 12.02, .4),
  ("gate-open", "click_003.ogg", 17.47, .9), ("gate-swap", "rollover2.ogg", 17.75, .7), ("gate-tick", "click_002.ogg", 18.56, .9),
  ("nav-click", "click_003.ogg", 21.28, .9), ("nav-expand", "click_003.ogg", 22.93, .9),
  ("map", "impactSoft_medium_004.ogg", 24.1, .7),
  ("st1", "card-slide-1.ogg", 25.11, .45), ("st2", "card-slide-1.ogg", 26.2, .45), ("st3", "card-slide-1.ogg", 27.3, .45),
  ("tiles1", "card-slide-1.ogg", 28.92, .45), ("tiles2", "card-slide-1.ogg", 30.56, .4),
  ("tab", "click_003.ogg", 34.92, .9), ("kit", "card-slide-1.ogg", 35.47, .4),
  ("road1", "card-slide-1.ogg", 38.73, .4), ("road2", "card-slide-1.ogg", 40.91, .4),
  ("send", "click_003.ogg", 45.84, .9), ("answer", "rollover2.ogg", 46.37, .8),
  ("why", "impactSoft_medium_001.ogg", 51.29, .8),
  ("logo", "impactBell_heavy_000.ogg", 55.9, .55), ("cta", "click_003.ogg", 57.28, .9),
]
keys = ["keypress-001.wav", "keypress-004.wav", "keypress-007.wav"]
for i in range(7): sfx.append((f"gk{i}", keys[i % 3], round(16.12 + i * 0.1, 2), .45))
for i in range(13): sfx.append((f"ck{i}", keys[i % 3], round(44.22 + i * 0.105, 2), .45))
lines = ['  <audio id="music" src="assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3" data-start="0" data-duration="58.5" data-track-index="20" data-volume="0.8"'
         ' data-automation=\'{"version":1,"lanes":[{"target":"volume","points":[{"t":0,"v":1},{"t":56.9,"v":1},{"t":58.5,"v":0}]}]}\'></audio>']
for n, (i, f, t, v) in enumerate(sfx):
    dur = ' data-duration="0.25"' if f.startswith("keypress") else ""
    lines.append(f'  <audio id="sfx-{i}" src="assets/sfx/{f}" data-start="{t}"{dur} data-track-index="{21 + n}" data-volume="{v}"></audio>')
s = open("src/index.template.html").read()
for k in ("1", "2", "11", "12"):
    s = s.replace(f"%FACETS{k}%", FACETS.format(id=f"s{k}-facets"))
s = s.replace("%AUDIO%", "\n".join(lines))
open("composition/index.html", "w").write(s)
