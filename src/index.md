---
title: "Teamentwicklung - Inhaltsverzeichnis"
layout: layout.njk
---

# Teamentwicklung

Jede\*r kennt es: Man betritt einen neuen Raum, setzt sich an einen unbekannten Tisch, umgeben von Menschen mit unterschiedlichen Hintergründen, Ideen und Erwartungen. Noch ist es kein Team, nur eine Gruppe.

Erst mit der Zeit entsteht etwas Gemeinsames: ein Ziel, ein Verständnis füreinander, ein Gefühl von Zusammenhalt. Man beginnt, sich abzustimmen, Konflikte auszuhalten, Verantwortung zu teilen und manchmal auch gemeinsam zu scheitern, um daraus zu lernen.

Teamentwicklung ist genau dieser Weg: ein Prozess, der Menschen verbindet, Unterschiede produktiv macht und Vertrauen wachsen lässt. Er verlangt Geduld, Aufmerksamkeit und Bereitschaft, nicht nur auf Ergebnisse, sondern auch auf Beziehungen zu achten.

In diesem Skript geht es darum, wie Teams entstehen, wachsen und wie wir diesen Prozess bewusst gestalten können.

## Kapitelübersicht

<ul class="chapter-list">
  {% for page in collections.kapitel %}
    <li><a href="{{ page.url }}">{{ page.data.title }}</a></li>
  {% endfor %}
</ul>
