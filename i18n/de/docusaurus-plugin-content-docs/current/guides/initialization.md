---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Initialisierung. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Initialisierung

Dieses Handbuch erklärt, wie RichText zu einer Seite hinzugefügt wird. Führen Sie die folgenden Schritte aus, um einen einsatzbereiten Editor zu erhalten:

1. [Quelldateien in die Seite einbinden](#include-the-source-files).
2. [Container für RichText erstellen](#create-a-container).
3. [RichText initialisieren](#initialize-richtext).

## Quelldateien einbinden {#include-the-source-files}

Fügen Sie die JavaScript- und CSS-Dateien von RichText zu Ihrem Projekt hinzu. [Laden Sie das Paket herunter](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) und entpacken Sie den Inhalt in Ihren Projektordner.

Um RichText zu erstellen, binden Sie zwei Quelldateien in Ihre Seite ein:

- *richtext.js*
- *richtext.css*

Verweisen Sie in Ihrem HTML auf die Dateien. Passen Sie die relativen Pfade an Ihre Ordnerstruktur an:

~~~html title="index.html"
<script type="text/javascript" src="./codebase/richtext.js"></script>  
<link rel="stylesheet" href="./codebase/richtext.css">
~~~

## Container erstellen {#create-a-container}

Fügen Sie einen Container für RichText mit einer ID wie *"root"* hinzu:

~~~jsx title="index.html"
<div id="root"></div>
~~~

## RichText initialisieren {#initialize-richtext}

Initialisieren Sie RichText mit dem Konstruktor `richtext.Richtext`. Der Konstruktor nimmt zwei Parameter entgegen:

- einen Container — einen CSS-Selektor oder ein DOM-Element
- ein Konfigurationsobjekt mit den Editor-Eigenschaften. Siehe die [vollständige Liste der Eigenschaften](#configuration-properties) unten

Das folgende Beispiel initialisiert RichText im Container `#root`:

~~~jsx title="index.html"
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften  
});
~~~

### Konfigurationseigenschaften {#configuration-properties}

Fügen Sie Konfigurationsoptionen als Schlüssel des Konfigurationsobjekts hinzu.

:::note
Die vollständige Liste der Konfigurationseigenschaften finden Sie in der [Eigenschaftsübersicht](api/overview/properties_overview.md).
:::

## RichText-Instanz zerstören

Rufen Sie die Methode [`destructor()`](api/methods/destructor.md) auf, um das RichText-HTML zu entfernen und alle zugehörigen Events zu trennen:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

editor.destructor();
~~~

## Beispiel

Das folgende Beispiel initialisiert RichText mit aktivierter Menüleiste:

<iframe src="https://snippet.dhtmlx.com/tjryzka7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
