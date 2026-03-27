---
sidebar_label: Erste Schritte
title: Erste Schritte
description: In der Dokumentation der DHTMLX JavaScript-Bibliothek RichText erfahren Sie, wie Sie mit DHTMLX RichText beginnen können. Durchsuchen Sie Entwicklerleitfäden und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Erste Schritte

Dieses klare und umfassende Tutorial führt Sie durch die Schritte, die Sie ausführen müssen, um einen voll funktionsfähigen RichText auf einer Seite einzurichten.

<div className="img_border">
![DHTMLX RichText Classic-Modus](./assets/richtext/classic_mode.png)
</div>

## Schritt 1. Quelldateien einbinden {#step-1-including-source-files}

Beginnen Sie mit der Erstellung einer HTML-Datei und nennen Sie sie *index.html*. Binden Sie anschließend die RichText-Quelldateien in die erstellte Datei ein.

Es werden zwei Dateien benötigt:

- die JS-Datei von RichText
- die CSS-Datei von RichText

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // Ihr Code kommt hierher
        </script>
    </body>
</html>
~~~

### RichText über npm oder yarn installieren {#installing-richtext-via-npm-or-yarn}

Sie können JavaScript RichText mit dem Paketmanager **yarn** oder **npm** in Ihr Projekt importieren.

#### Test-Version von RichText über npm oder yarn installieren {#installing-trial-richtext-via-npm-or-yarn}

:::info[Info]
Wenn Sie die Testversion von RichText verwenden möchten, laden Sie das [**RichText-Testpaket**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) herunter und folgen Sie den Schritten in der *README*-Datei. Beachten Sie, dass die Testversion von RichText nur 30 Tage lang verfügbar ist.
:::

#### PRO-Version von RichText über npm oder yarn installieren {#installing-pro-richtext-via-npm-or-yarn}

:::info[Info]
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf den privaten DHTMLX-**npm** zugreifen, indem Sie Ihren Login und Ihr Passwort für **npm** generieren. Eine detaillierte Installationsanleitung ist dort ebenfalls verfügbar. Bitte beachten Sie, dass der Zugriff auf den privaten **npm** nur während der Laufzeit Ihrer proprietären RichText-Lizenz möglich ist.
:::

## Schritt 2. RichText erstellen {#step-2-creating-richtext}

Jetzt können Sie RichText zur Seite hinzufügen. Erstellen Sie zunächst den `<div>`-Container für RichText. Führen Sie dazu folgende Schritte aus:

- Geben Sie einen DIV-Container in der Datei *index.html* an
- Initialisieren Sie RichText mithilfe des Konstruktors `richtext.Richtext`

Als Parameter akzeptiert der Konstruktor einen beliebigen gültigen CSS-Selektor des HTML-Containers, in den RichText platziert werden soll, sowie die entsprechenden Konfigurationsobjekte.

~~~html {9,12-14} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with RichText</title>
        <script src="./codebase/richtext.js"></script>
        <link href="./codebase/richtext.css" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>

        <script>
            const editor = new richtext.Richtext("#root", {
                // Konfigurationseigenschaften
            });
        </script>
    </body>
</html>
~~~

## Schritt 3. RichText konfigurieren {#step-3-configuring-richtext}

Als Nächstes können Sie die Konfigurationseigenschaften angeben, die die RichText-Komponente bei der Initialisierung haben soll.

Um mit RichText zu beginnen, müssen Sie zunächst die Ausgangsdaten für den Editor über die Eigenschaft [`value`](api/config/value.md) bereitstellen. Darüber hinaus können Sie die [**Menüleiste**](api/config/menubar.md) aktivieren, die [**Toolbar**](api/config/toolbar.md) anpassen, den [**Vollbild**](api/config/fullscreen-mode.md)- und [**Layout**](api/config/layout-mode.md)-Modus festlegen sowie eine neue [**Locale**](api/config/locale.md) und [**Standard-Styles**](api/config/default-styles.md) anwenden.

~~~jsx {2-12}
const editor = new richtext.Richtext("#root", {
    menubar: true,
    toolbar: false,
    fullscreenMode: true,
    layoutMode: "document",
    locale: richtext.locales.cn
    defaultStyles: {
        h4: {
            "font-family": "Roboto"
        },
        // weitere Einstellungen
    }
});
~~~

## Wie geht es weiter {#whats-next}

Das war es schon. Mit nur drei einfachen Schritten haben Sie ein praktisches Tool zur Inhaltsbearbeitung. Jetzt können Sie mit Ihrem Inhalt arbeiten oder die innere Welt von JavaScript RichText weiter erkunden.
