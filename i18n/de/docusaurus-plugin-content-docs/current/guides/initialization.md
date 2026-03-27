---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Initialisierung. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Initialisierung

Diese Anleitung enthält detaillierte Anweisungen, wie Sie RichText auf einer Seite einbinden, um Ihre Anwendung mit den Funktionen des RichText-Editors zu erweitern. Führen Sie die folgenden Schritte aus, um eine einsatzbereite Komponente zu erhalten:

1. [RichText-Quelldateien auf einer Seite einbinden](#including-source-files).
2. [Einen Container für RichText erstellen](#creating-container).
3. [RichText mit dem Objekt-Konstruktor initialisieren](#initializing-richtext).

## Quelldateien einbinden {#including-source-files}

[Laden Sie das Paket herunter](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) und entpacken Sie es in einen Ordner Ihres Projekts.

Um RichText zu erstellen, müssen Sie 2 Quelldateien auf Ihrer Seite einbinden:

- *richtext.js*
- *richtext.css*

Stellen Sie sicher, dass Sie korrekte relative Pfade zu den Quelldateien setzen:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Container erstellen {#creating-container}

Fügen Sie einen Container für RichText hinzu und geben Sie ihm eine ID, zum Beispiel *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## RichText initialisieren {#initializing-richtext}

Initialisieren Sie RichText mit dem Konstruktor `richtext.Richtext`. Der Konstruktor nimmt zwei Parameter entgegen:

- einen HTML-Container (die ID des HTML-Containers)
- ein Objekt mit Konfigurationseigenschaften. [Vollständige Liste hier](#configuration-properties)

~~~jsx title="index.html"
// RichText erstellen
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
~~~

### Konfigurationseigenschaften {#configuration-properties}

:::note[Hinweis]
Die vollständige Liste der Eigenschaften zur Konfiguration von **RichText** finden Sie [**hier**](api/overview/properties_overview.md).
:::

## Beispiel {#example}

In diesem Snippet sehen Sie, wie **RichText** mit Anfangsdaten initialisiert wird:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
