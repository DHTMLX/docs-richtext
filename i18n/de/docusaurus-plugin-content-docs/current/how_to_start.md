---
sidebar_label: Erste Schritte
title: Erste Schritte
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie, wie Sie mit DHTMLX RichText arbeiten. Durchstöbern Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX RichText herunter.
---

# Erste Schritte

Hier finden Sie eine einfache Anleitung, wie Sie RichText auf einer Seite einbinden und nutzen können.

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Klassischer Modus"
  className="img_border"
/>

## Schritt 1. Einbinden der Quelldateien

Erstellen Sie zunächst eine HTML-Datei mit dem Namen *index.html*. Fügen Sie die RichText-Quelldateien in diese Datei ein.

Sie benötigen zwei Dateien:

- die JS-Datei für RichText
- die CSS-Datei für RichText

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

### Installation von RichText via npm oder yarn

RichText kann Ihrem Projekt mit **yarn** oder **npm** hinzugefügt werden.

#### Installation der Testversion von RichText via npm oder yarn

:::info
Um die Testversion von RichText zu nutzen, laden Sie das [**trial RichText package**](https://dhtmlx.com/docs/products/dhtmlxRichtext/download.shtml) herunter und folgen Sie den Schritten in der *README*-Datei. Hinweis: Die Testversion ist 30 Tage lang gültig.
:::

#### Installation der PRO-Version von RichText via npm oder yarn

:::info
Für die PRO-Version besuchen Sie den [Client's Area](https://dhtmlx.com/clients/) und generieren Sie Ihr Login sowie Passwort für das private DHTMLX-**npm**. Dort finden Sie auch eine ausführliche Installationsanleitung. Der Zugriff auf das private **npm** ist solange möglich, wie Ihre proprietäre RichText-Lizenz aktiv ist.
:::

## Schritt 2. RichText erstellen

Jetzt können Sie RichText auf der Seite hinzufügen. Beginnen Sie damit, einen `<div>`-Container für RichText zu erstellen. Gehen Sie wie folgt vor:

- Fügen Sie einen DIV-Container in die *index.html*-Datei ein
- Initialisieren Sie RichText mit dem `richtext.Richtext`-Konstruktor

Der Konstruktor akzeptiert jeden gültigen CSS-Selektor für den HTML-Container, in dem RichText angezeigt werden soll, sowie beliebige Konfigurationsobjekte.

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

Jetzt können Sie die gewünschten Konfigurationsoptionen einstellen, die RichText beim Start verwenden soll.

Um zu beginnen, setzen Sie die Anfangsdaten für den Editor mit der [`value`](api/config/value.md)-Eigenschaft. Sie können außerdem die [**menubar**](api/config/menubar.md) aktivieren, die [**toolbar**](api/config/toolbar.md) anpassen, [**fullscreen**](api/config/fullscreen-mode.md)- und [**layout**](api/config/layout-mode.md)-Modi einstellen, eine andere [**locale**](api/config/locale.md) wählen und [**default styles**](api/config/default-styles.md) anwenden.

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

## Was kommt als Nächstes?

Das war's! Mit diesen drei Schritten ist RichText bereit, Inhalte zu bearbeiten. Sie können direkt loslegen oder sich weiter umsehen, um zu entdecken, was JavaScript RichText noch alles kann.
