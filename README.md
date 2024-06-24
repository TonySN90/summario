Projekt Summario

Tech Stack:
Vite, React, Typescript, Context, Tailwind, Bootstrap, React Icons

1. Designerstellung, Logodesign, Projektaufsetzung Im ersten Schritt wurden das Design und das
   Logo entwickelt und das Projekt aufgesetzt. Dies umfasste die Auswahl von Schriftarten und die
   Gestaltung eines ansprechenden Logos, gefolgt von der Einrichtung der Projektstruktur und
   Entwicklungsumgebung.

2. Layouterstellung mit TailwindCSS Mit TailwindCSS wurde das Layout erstellt. Dank der hohen
   Flexibilität dieses Tools konnte ein individuelles Design schnell und effizient entwickelt werden, was
   die Entwicklungszeit deutlich verkürzte.

3. Implementierung der Funktionalitäten – Sortierfunktion Nachdem das Layout stand, wurde die
   erste Funktionalität, die Sortierfunktion, implementiert. Diese ermöglicht es den Benutzern, Inhalte
   alphabetisch zu sortieren.

4. Integration der Listen- und Kachelansicht Anschließend wurde die Möglichkeit hinzugefügt,
   zwischen einer Listen- und einer Kachelansicht zu wechseln. Diese Funktion verbessert die
   Benutzerfreundlichkeit, indem sie verschiedene Ansichtsoptionen bietet.

5. Schritt: Entwicklung der Favoriten-Funktionalität Danach wurde eine Favoriten-Funktionalität
   entwickelt, die es den Benutzern ermöglicht, Inhalte als Favoriten zu markieren und später schnell
   wiederzufinden.

6. Redesign mit Bootstrap Schließlich wurde ein Redesign mit Bootstrap durchgeführt. Die
   bestehenden Komponenten wurden geklont und mit Bootstrap neu gestaltet, das Ziel war so nah wie
   möglich am ursprünglichen Design zu bleiben. Da meine letzten Erfahrungen mit Bootstrap einige
   Jahre zurücklagen, war zusätzliche Recherche erforderlich.
   Für das Stagemanagement entschied ich mich für die Verwendung eines Contexts in Verbindung mit
   dem useState-Hook, da diese Lösung für die Größe des Projekts ausreichend ist.

- Erklärung der Favoritenfunktion

Jeder Hoteleintrag verfügt über eine Favoritenfunktion in Form eines Herzsymbols. Ein Klick auf das
Herzsymbol füllt es aus und fügt das ausgewählte Hotel zur Favoritenliste hinzu. Dieses Herzsymbol
ist sowohl in der Listenansicht, der Kachelansicht als auch in der Detailansicht des Hotels zu finden.
Solange das Herz ausgefüllt ist, befindet sich der Hoteleintrag in der Favoritenliste.
Um die Favoritenliste zu öffnen, gibt es in der Kontrollsektion einen entsprechenden Button, der
ebenfalls mit einem Herzsymbol versehen ist. Dieses Herzsymbol zeigt an, ob Einträge in der
Favoritenliste vorhanden sind. Ein Klick auf den Button öffnet ein Fenster, in dem die hinzugefügten
Hoteleinträge in einer Liste angezeigt werden. Hier besteht die Möglichkeit, durch einen Klick auf den
Eintrag die Detailansicht des Hotels zu öffnen oder durch einen Klick auf den roten Button den
Eintrag aus der Favoritenliste zu entfernen.
