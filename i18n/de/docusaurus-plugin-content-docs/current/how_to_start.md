---
sidebar_label: Erste Schritte
title: Erste Schritte
description: Erfahren Sie, wie Sie mit DHTMLX RichText arbeiten – in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Erste Schritte

Dieses übersichtliche und umfassende Tutorial führt Sie durch alle Schritte, die erforderlich sind, um ein voll funktionsfähiges RichText auf einer Seite einzubinden.

<div className="img_border">
![DHTMLX RichText Classic Mode](./assets/richtext/classic_mode.png)
</div>

## Schritt 1. Quelldateien einbinden

Erstellen Sie zunächst eine HTML-Datei und nennen Sie sie *index.html*. Binden Sie anschließend die RichText-Quelldateien in die erstellte Datei ein.

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
        // Ihr Code kommt hier hin
        </script>
    </body>
</html>
~~~

### RichText über npm oder yarn installieren {#installing-richtext-via-npm-or-yarn}

Sie können JavaScript RichText über den Paketmanager **yarn** oder **npm** in Ihr Projekt importieren.

#### Testversion von RichText über npm oder yarn installieren

:::info
Wenn Sie die Testversion von RichText verwenden möchten, laden Sie das [**RichText-Testpaket**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) herunter und folgen Sie den Schritten in der *README*-Datei. Beachten Sie, dass die Testversion von RichText nur 30 Tage verfügbar ist.
:::

#### PRO-Version von RichText über npm oder yarn installieren

:::info
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf das private DHTMLX-**npm**-Repository zugreifen, indem Sie Ihre Login-Daten für **npm** generieren. Eine ausführliche Installationsanleitung finden Sie ebenfalls dort. Bitte beachten Sie, dass der Zugriff auf das private **npm** nur verfügbar ist, solange Ihre proprietäre RichText-Lizenz aktiv ist.
:::

## Schritt 2. RichText erstellen

Jetzt können Sie RichText zur Seite hinzufügen. Erstellen Sie zunächst den `<div>`-Container für RichText. Gehen Sie dazu wie folgt vor:

- Geben Sie einen DIV-Container in der Datei *index.html* an
- Initialisieren Sie RichText mit dem Konstruktor `richtext.Richtext`

Der Konstruktor nimmt als Parameter einen beliebigen gültigen CSS-Selektor des HTML-Containers, in den RichText eingefügt wird, sowie die entsprechenden Konfigurationsobjekte entgegen.

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

## Schritt 3. RichText konfigurieren

Im nächsten Schritt können Sie die Konfigurationseigenschaften festlegen, die die RichText-Komponente bei der Initialisierung haben soll.

Um mit RichText zu arbeiten, müssen Sie zunächst die Ausgangsdaten für den Editor über die Eigenschaft [`value`](api/config/value.md) bereitstellen. Darüber hinaus können Sie die [**Menüleiste**](api/config/menubar.md) aktivieren, die [**Toolbar**](api/config/toolbar.md) anpassen, den [**Vollbildmodus**](api/config/fullscreen-mode.md) und das [**Layout**](api/config/layout-mode.md) festlegen, ein neues [**Locale**](api/config/locale.md) sowie [**Standardstile**](api/config/default-styles.md) anwenden.

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

## Wie geht es weiter?

Das war es schon. Mit nur drei einfachen Schritten steht Ihnen ein praktisches Tool zur Inhaltsbearbeitung zur Verfügung. Jetzt können Sie mit der Bearbeitung Ihrer Inhalte beginnen oder die Möglichkeiten von JavaScript RichText weiter erkunden.
