---
sidebar_label: Erste Schritte
title: Erste Schritte
description: Erfahren Sie, wie Sie mit DHTMLX RichText arbeiten können – in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX RichText herunter.
---

# Erste Schritte

Dieses übersichtliche und umfassende Tutorial führt Sie durch die Schritte, die erforderlich sind, um RichText vollständig funktionsfähig auf einer Seite einzurichten.

<div className="img_border">
![DHTMLX RichText Classic Mode](./assets/richtext/classic_mode.png)
</div>

## Schritt 1. Quelldateien einbinden

Erstellen Sie zunächst eine HTML-Datei mit dem Namen *index.html*. Binden Sie anschließend die RichText-Quelldateien in diese Datei ein.

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
        // your code will be here
        </script>
    </body>
</html>
~~~

### RichText via npm oder yarn installieren

Sie können JavaScript RichText mithilfe des **yarn**- oder **npm**-Paketmanagers in Ihr Projekt importieren.

#### Testversion von RichText via npm oder yarn installieren

:::info
Wenn Sie die Testversion von RichText verwenden möchten, laden Sie das [**RichText-Testpaket**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) herunter und folgen Sie den Anweisungen in der *README*-Datei. Beachten Sie, dass die Testversion von RichText nur 30 Tage lang verfügbar ist.
:::

#### PRO-Version von RichText via npm oder yarn installieren

:::info
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf das private DHTMLX **npm** zugreifen, indem Sie Ihre Anmeldedaten für **npm** generieren. Eine detaillierte Installationsanleitung finden Sie ebenfalls dort. Bitte beachten Sie, dass der Zugriff auf das private **npm** nur während einer aktiven proprietären RichText-Lizenz möglich ist.
:::

## Schritt 2. RichText erstellen

Jetzt können Sie RichText zur Seite hinzufügen. Erstellen Sie zunächst den `<div>`-Container für RichText. Gehen Sie dazu folgendermaßen vor:

- Definieren Sie einen DIV-Container in der Datei *index.html*
- Initialisieren Sie RichText mithilfe des Konstruktors `richtext.Richtext`

Als Parameter akzeptiert der Konstruktor einen gültigen CSS-Selektor des HTML-Containers, in den RichText eingefügt wird, sowie entsprechende Konfigurationsobjekte.

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
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## Schritt 3. RichText konfigurieren

Im nächsten Schritt können Sie die Konfigurationseigenschaften festlegen, die die RichText-Komponente bei der Initialisierung haben soll.

Um mit RichText zu arbeiten, müssen Sie zunächst die Ausgangsdaten für den Editor über die Eigenschaft [`value`](api/config/value.md) bereitstellen. Darüber hinaus können Sie die [**Menüleiste**](api/config/menubar.md) aktivieren, die [**Toolbar**](api/config/toolbar.md) anpassen, den [**Vollbild**](api/config/fullscreen-mode.md)- und den [**Layout**](api/config/layout-mode.md)-Modus festlegen, eine neue [**Locale**](api/config/locale.md) sowie [**Standardstile**](api/config/default-styles.md) anwenden.

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
        // other settings
    }
});
~~~

## Nächste Schritte

Das war es. Nur drei einfache Schritte, und Sie haben ein praktisches Werkzeug zur Inhaltsbearbeitung. Jetzt können Sie mit Ihren Inhalten arbeiten oder die Möglichkeiten von JavaScript RichText weiter erkunden.
