---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit Angular. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX RichText herunter.
---

# Integration mit Angular

:::tip
Es ist hilfreich, mit den grundlegenden Konzepten und Mustern von **Angular** vertraut zu sein, bevor Sie hier einsteigen. Für eine schnelle Auffrischung schauen Sie in die [**Angular-Dokumentation**](https://v17.angular.io/docs).
:::

DHTMLX RichText funktioniert problemlos mit **Angular**. Es stehen Codebeispiele zur Verfügung, die zeigen, wie DHTMLX RichText in einem **Angular**-Projekt verwendet wird. Weitere Informationen finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Projekt erstellen

:::info
Bevor Sie ein neues Projekt starten, stellen Sie sicher, dass [**Angular CLI**](https://v17.angular.io/cli) und [**Node.js**](https://nodejs.org/en/) installiert sind.
:::

Um ein neues **my-angular-richtext-app**-Projekt mit Angular CLI einzurichten, führen Sie einfach folgenden Befehl aus:

~~~json
ng new my-angular-richtext-app
~~~

:::note
Um es während dieser Anleitung einfach zu halten, deaktivieren Sie Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering) bei der Erstellung Ihrer Angular-App!
:::

Dieser Befehl richtet alles Notwendige ein, sodass keine weiteren Installationsschritte erforderlich sind.

### Installation der Abhängigkeiten

Wechseln Sie in das Verzeichnis Ihrer neuen App:

~~~json
cd my-angular-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Die App läuft dann lokal (zum Beispiel unter `http://localhost:3000`).

## RichText erstellen

Als nächstes laden Sie den Quellcode von DHTMLX RichText herunter. Stoppen Sie die App kurz und installieren Sie das RichText-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Testpaket von RichText**](how_to_start.md#installation-von-richtext-via-npm-oder-yarn) herunter und folgen Sie den Schritten in der README-Datei. Hinweis: Die Testversion ist 30 Tage lang gültig.

### Schritt 2. Komponente erstellen

Um RichText zu Ihrer App hinzuzufügen, erstellen Sie eine neue Angular-Komponente. Legen Sie einen **richtext**-Ordner in **src/app/** an und fügen Sie eine neue Datei mit dem Namen **richtext.component.ts** hinzu.

#### Quelldateien importieren

Öffnen Sie **richtext.component.ts** und importieren Sie die RichText-Quelldateien. Der Importpfad sieht wie folgt aus:

- Für die PRO-Version, die aus einem lokalen Ordner installiert wurde:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- Für die Testversion:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

Diese Anleitung zeigt die Einrichtung der **Testversion**.

#### Container definieren und Richtext initialisieren

Um RichText auf der Seite anzuzeigen, richten Sie einen Container ein und initialisieren Sie die Komponente mit dem Konstruktor:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // ein Template-Name, der in der Datei "app.component.ts" als <richtext /> verwendet wird
    styleUrls: ["./richtext.component.css"], // CSS-Datei einbinden
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // Container für RichText initialisieren
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // Die RichText-Komponente initialisieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // RichText zerstören
    }
}
~~~

#### Styles hinzufügen

Damit RichText korrekt dargestellt wird, fügen Sie die benötigten Styles hinzu. Erstellen Sie eine **richtext.component.css**-Datei in **src/app/richtext/** und fügen Sie folgende Styles für RichText und dessen Container ein:

~~~css title="richtext.component.css"
/* RichText-Styles importieren */
@import "@dhx/trial-richtext/dist/richtext.css";

/* Styles für die Startseite */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für den RichText-Container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Styles für das RichText-Widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Daten in RichText zu laden, geben Sie einfach einen Datensatz an. Erstellen Sie eine **data.ts**-Datei in **src/app/richtext/** und fügen Sie Beispieldaten hinzu:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie anschließend ***richtext.component.ts***. Importieren Sie die Datei mit den Daten und setzen Sie die Daten-Eigenschaften in der RichText-Konfiguration innerhalb der `ngOnInit()`-Methode wie folgt:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // Daten importieren
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // Daten-Eigenschaft initialisieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // weitere Konfigurationseigenschaften 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Alternativ können Sie die [`setValue()`](api/methods/set-value.md)-Methode in `ngOnInit()` verwenden, um Daten in RichText zu laden.

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // Daten importieren
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // Daten-Eigenschaft initialisieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // weitere Konfigurationseigenschaften 
        });

        // Daten über die setValue()-Methode anwenden
        this._editor.setValue({ value }); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Damit ist die RichText-Komponente eingerichtet und einsatzbereit. Sobald sie auf der Seite eingebunden wird, initialisiert sich RichText mit den bereitgestellten Daten. Sie können außerdem beliebige Konfigurationsoptionen hinzufügen. Die vollständige Liste der Eigenschaften finden Sie in der [RichText API-Dokumentation](api/overview/main_overview.md).

#### Ereignisse behandeln

Immer wenn in RichText etwas passiert, wird ein Ereignis ausgelöst. Sie können auf diese Ereignisse reagieren, um eigenen Code auszuführen. Die [vollständige Liste der Ereignisse](api/overview/events_overview.md) ist verfügbar.

Bearbeiten Sie die Datei **richtext.component.ts** und aktualisieren Sie die `ngOnInit()`-Methode wie folgt:

~~~jsx {} title="richtext.component.ts"
// ...
ngOnInit() {
    this._editor = new Richtext(this.richtext_container.nativeElement, {});

    this._editor.api.on("print", () => {
        console.log("Das Dokument wird gedruckt");
    });
}

ngOnDestroy(): void {
    this._editor.destructor(); 
}
~~~

### Schritt 3. RichText in die App einbinden

Um die ***RichTextComponent*** in Ihrer App zu verwenden, öffnen Sie ***src/app/app.component.ts*** und ersetzen Sie den Standardcode durch:

~~~jsx {} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<richtext/>`
})
export class AppComponent {
    name = "";
}
~~~

Erstellen Sie nun ***app.module.ts*** in ***src/app/*** und fügen Sie *RichTextComponent* wie unten gezeigt hinzu:

~~~jsx {} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RichTextComponent } from "./richtext/richtext.component";

@NgModule({
    declarations: [AppComponent, RichTextComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Als letzten Schritt aktualisieren Sie ***src/main.ts*** mit folgendem Code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Jetzt können Sie die App starten und sehen, wie RichText mit Daten auf der Seite geladen wird.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

Das ist alles, was nötig ist, um DHTMLX RichText mit Angular zu verwenden. Sie können den Code gerne an Ihre eigenen Bedürfnisse anpassen. Ein vollständiges Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).
