---
sidebar_label: Erste Schritte
title: Erste Schritte
description: Erfahren Sie, wie Sie mit DHTMLX RichText arbeiten – in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Erste Schritte {#how-to-start}

Dieses klare und umfassende Tutorial führt Sie durch die Schritte, die erforderlich sind, um einen voll funktionsfähigen RichText auf einer Seite einzurichten.

<div className="img_border">
![DHTMLX RichText Klassischer Modus](/img/richtext/classic_mode.png)
</div>

## Schritt 1. Quelldateien einbinden {#step-1-including-source-files}

Erstellen Sie zunächst eine HTML-Datei und nennen Sie sie *index.html*. Binden Sie dann die RichText-Quelldateien in die erstellte Datei ein.

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

Sie können JavaScript RichText mithilfe des Paketmanagers **yarn** oder **npm** in Ihr Projekt importieren.

#### Testversion von RichText über npm oder yarn installieren {#installing-trial-richtext-via-npm-or-yarn}

:::info[Info]
Wenn Sie die Testversion von RichText verwenden möchten, laden Sie das [**RichText-Testpaket**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) herunter und befolgen Sie die im *README*-File beschriebenen Schritte. Beachten Sie, dass die Testversion von RichText nur 30 Tage lang verfügbar ist.
:::

#### PRO-Version von RichText über npm oder yarn installieren {#installing-pro-richtext-via-npm-or-yarn}

:::info[Info]
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf das private DHTMLX-**npm** zugreifen, indem Sie Ihren Login und Ihr Passwort für **npm** generieren. Eine detaillierte Installationsanleitung ist ebenfalls dort verfügbar. Bitte beachten Sie, dass der Zugang zum privaten **npm** nur aktiv ist, solange Ihre proprietäre RichText-Lizenz gültig ist.
:::

## Schritt 2. RichText erstellen {#step-2-creating-richtext}

Jetzt können Sie RichText zur Seite hinzufügen. Erstellen Sie zunächst den `<div>`-Container für RichText. Gehen Sie dazu wie folgt vor:

- Definieren Sie einen DIV-Container in der Datei *index.html*
- Initialisieren Sie RichText mithilfe des Konstruktors `richtext.Richtext`

Der Konstruktor nimmt als Parameter einen gültigen CSS-Selektor des HTML-Containers, in den RichText eingefügt wird, sowie die entsprechenden Konfigurationsobjekte entgegen.

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

Als Nächstes können Sie Konfigurationseigenschaften festlegen, die die RichText-Komponente bei der Initialisierung haben soll.

Um mit RichText arbeiten zu können, müssen Sie zunächst die initialen Daten für den Editor über die Eigenschaft [`value`](api/config/value.md) bereitstellen. Darüber hinaus können Sie die [**Menüleiste**](api/config/menubar.md) aktivieren, die [**Toolbar**](api/config/toolbar.md) anpassen, den [**Vollbildmodus**](api/config/fullscreen-mode.md) und den [**Layout-Modus**](api/config/layout-mode.md) festlegen, eine neue [**Locale**](api/config/locale.md) sowie [**Standardstile**](api/config/default-styles.md) anwenden.

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

Das war es schon. Nur drei einfache Schritte, und Sie verfügen über ein praktisches Werkzeug zur Bearbeitung von Inhalten. Jetzt können Sie mit Ihren Inhalten arbeiten oder die Welt von JavaScript RichText weiter erkunden.
