---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Initialisierung. Durchstöbern Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Initialisierung

Hier finden Sie eine einfache Anleitung, wie Sie RichText auf Ihrer Seite einrichten, damit Sie den RichText-Editor in Ihrer Anwendung nutzen können. Befolgen Sie einfach diese Schritte, um loszulegen:

1. [Binden Sie die RichText-Quelldateien auf Ihrer Seite ein](#einbinden-der-quelldateien).
2. [Erstellen Sie einen Container für RichText](#erstellen-eines-containers).
3. [Initialisieren Sie RichText mit dem Objektkonstruktor](#initialisieren-von-richtext).

## Einbinden der Quelldateien

Laden Sie zunächst das [Paket herunter](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) und entpacken Sie es in einen Ordner Ihres Projekts.

Um RichText zu verwenden, fügen Sie diese beiden Dateien zu Ihrer Seite hinzu:

- *richtext.js*
- *richtext.css*

Achten Sie darauf, die korrekten Pfade zu den abgelegten Dateien zu verwenden:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Erstellen eines Containers

Richten Sie als Nächstes einen Container für RichText ein. Geben Sie ihm eine ID, zum Beispiel *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## Initialisieren von RichText

Nun verwenden Sie den Konstruktor `richtext.Richtext`, um RichText zu erstellen. Dieser Konstruktor benötigt zwei Dinge:

- den HTML-Container (verwenden Sie die vergebene ID)
- ein Objekt mit Konfigurationsoptionen. [Hier finden Sie die vollständige Liste](#konfigurationseigenschaften)

~~~jsx title="index.html"
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties  
});
~~~

### Konfigurationseigenschaften

:::note
Alle verfügbaren Eigenschaften für **RichText** finden Sie [**hier**](api/overview/properties_overview.md).
:::

## Beispiel

Hier sehen Sie ein kurzes Beispiel, wie Sie **RichText** mit einigen Anfangsdaten einrichten können:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
