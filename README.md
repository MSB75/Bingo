# Zahlen-Bingo

Einfache Web-App für das iPad, optimiert für die Nutzung im Querformat und ohne Scrollen in der Hauptbedienung.

## Funktionen

- genau eine 5×5-Bingokarte
- festes Freifeld in der Mitte
- Zahlenräume bis 25, 50 oder 100
- Ziehmodus für Zahlen, Plusaufgaben, Minusaufgaben oder gemischte Aufgaben
- Aufgaben wahlweise mit oder ohne Zehnerübergang
- bei Plusaufgaben bis 25 und 50 steht die größere Zahl zuerst
- im Zahlenraum bis 25 ohne Zehnerübergang: Plus nur als E + E oder ZE + E; Minus nur als ZE − E oder E − E
- optionale deutsche Sprachausgabe; bei Aufgaben wird die Aufgabe ohne Lösung gesprochen
- Markieren und automatische Bingo-Erkennung
- installierbar über das Web-App-Manifest
- bewusst nur online; der Service Worker legt keinen Offline-Cache an

## Bereitstellung

Alle Dateien gemeinsam auf einen HTTPS-Webspace oder in ein GitHub-Pages-Repository hochladen. Anschließend die `index.html` in Safari öffnen. Auf dem iPad kann die App über „Teilen“ → „Zum Home-Bildschirm“ installiert werden.


## Version 1.4

Der Button „Neu beginnen“ befindet sich im Ziehmodus direkt unter „Nächste Aufgabe“ und bleibt damit auch in Windows-Browsern sichtbar.
