# FD Prüfung Startercode

Das Projekt verwendet den Static Page Generator [11ty](https://www.11ty.dev/docs/).


## Ordnerstruktur

### `/docs`

kompilierter Code … hier wird nix gemacht

### `/src` hier wird entwickelt

```
_data/                  JSON Daten
_templates/             Templates :)
  artefact.11ty.js      Template für die Artefact Seite
  default.11ty.js       Allgemeines Template
  …
  partials/             Header & Footer Templates
assets/                 SCSS, Skripts, Fonts, etc … alles was kein Content ist
compiled-assets/        Kompilierte Dateien, z.B. CSS
index.11ty.js           Startseite
masterpieces.11ty.js    Generator für die Artefakt Seiten
about-the-project.html  Über das Projekt - Content Seite
…
```

### Weitere Dateien

```
.eleventy.js        Config von 11ty
.eleventyignore     Welche Folder/ Files soll 11ty ignorieren?
.gitignore          Welche Folder/ Files soll git igorieren?
```

## Funktionen

`npm install`
Installiert die erforderlichen Abhängigkeiten.

`npm run dev` 
Watchmode für den SASS Compiler und Browsersync, der die Inhalte inkl. livereload serviert.


## Hinweise

Die Prüfung kann Remote oder vor Ort im Raum 3.217 absolviert werden. Bitte informieren Sie uns am 14.09.2022 bei der Herausgabe und Vorstellung des Startercodes, ob Sie vor Ort oder Remote teilnehmen wollen. Bringen Sie bitte Ihren Studierendenausweis einen Personalausweis und mit zur Prüfung. Bitte finden Sie sich 15 Minuten vor der Prüfung im Prüfungsraum ein.

### Vor Ort Teilnahme

Bringen Sie bitte Ihren eigenen Rechner mit. Sollte das nicht möglich sein, können wir auf Anfrage auch einen iMac bereit stellen. 

### Remote Teilnahme

Wenn Sie an der Prüfung Remote teilnehmen, sind Sie für eine angemessene Internetverbindung verantwortlich. Sie brauchen außerdem ein Kamerabild von Ihnen während der ganzen Prüfungdauer.

https://th-koeln.zoom.us/j/6078076173?pwd=TjZXb1BoRUxYTktNQnVmZTducVhBQT09
Meeting-ID: 607 807 6173
Kenncode: noss

### Eigenständigkeitserklärung

Bitte füllen Sie die Eigenständigkeitserklärung (siehe Repo) aus und laden selbige auch via commit und push ins Repo.

## Bewertung

Die Bewertung erfolgt entlang der folgenden Niveaustufen

### Beste Lösung
- die **Must Features** sind vollständig umgesetzt und funktionieren
- die Änderungen für die Features sind in der Commit Historie ersichtlich und verständlich erklärt
- alle Features sind gepusht
- ein Zusatz-Features im Umfang von mindestens **3 Storypoints** sind implementiert und funktionieren
- der erzeugte Code zeigt, dass der Verfasser\*In ein sehr gutes Verständnis der zugrunde liegenden Technologien und Konzepte hat 
- die Änderungen wurden im Sinne der Projektstruktur in den passenden Dateien gemacht
- der erzeugte Code ist nachvollziehbar, selbsterklärend und effizient (semantisches HTML, Nutzung von SCSS & Custom Properties, robustes Javascript)

### Gute Lösung
- die **Must Features** sind vollständig umgesetzt und funktionieren
- die Änderungen für die Features sind in der Commit Historie ersichtlich
- alle Features sind gepusht
- die Änderungen wurden im Sinne der Projektstruktur in den passenden Dateien gemacht
- der erzeugte Code zeigt, dass der Verfasser\*In ein gutes Verständnis der zugrunde liegenden Technologien und Konzepte hat
- der erzeugte Code ist nachvollziehbar, selbsterklärend und effizient (semantisches HTML, Nutzung von SCSS & Custom Properties, robustes Javascript)

### Passable Lösung
- die **Must Features** sind vollständig umgesetzt und funktionieren mir kleinen Ausnahmen
- die Änderungen für die Features sind in der Commit Historie ersichtlich
- alle Features sind gepusht
- der erzeugte Code zeigt, dass der Verfasser\*In ein grundlegendes Verständnis der zugrunde liegenden Technologien und Konzepte hat

### Akzeptable Lösung
- die meisten **Must Features** sind vollständig umgesetzt und funktionieren überwiegend
- die Änderungen für die Features sind in der Commit Historie ersichtlich
- die Änderungen sind gepusht
- der erzeugte Code zeigt, dass der Verfasser\*In die zugrunde liegenden Technologien und Konzepte in wesentlichen Teilen verstanden hat