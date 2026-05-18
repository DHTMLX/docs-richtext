---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit Angular. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Angular

:::tip[Tipp]
Stellen Sie sicher, dass Sie mit den grundlegenden Angular-Konzepten und -Mustern vertraut sind. Eine Auffrischung finden Sie in der [Angular-Dokumentation](https://v17.angular.io/docs).
:::

DHTMLX RichText funktioniert mit Angular. Ein vollständiges Codebeispiel finden Sie in der [GitHub-Demo](https://github.com/DHTMLX/angular-richtext-demo).

## Projekt erstellen

:::info[Info]
Installieren Sie [Angular CLI](https://v17.angular.io/cli) und [Node.js](https://nodejs.org/en/), bevor Sie ein neues Projekt erstellen.
:::

Erstellen Sie ein neues Projekt *my-angular-richtext-app* mit Angular CLI:

~~~bash
ng new my-angular-richtext-app
~~~

:::note[Hinweis]
Deaktivieren Sie Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering), wenn Angular CLI Sie während der Projekterstellung dazu auffordert.
:::

Der Befehl installiert alle notwendigen Tools. Weitere Befehle sind nicht erforderlich.

### Abhängigkeiten installieren

Wechseln Sie in das neue App-Verzeichnis:

~~~bash
cd my-angular-richtext-app
~~~

Installieren Sie Abhängigkeiten und starten Sie den Entwicklungsserver mit dem [yarn](https://yarnpkg.com/)-Paketmanager:

~~~bash
yarn
yarn start
~~~

Die App läuft auf localhost (zum Beispiel `http://localhost:3000`).

## RichText erstellen

Stoppen Sie die App und installieren Sie das RichText-Paket.

### Schritt 1. Paket installieren

Laden Sie das [RichText-Testpaket](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testlizenz ist 30 Tage gültig.

### Schritt 2. Komponente erstellen

Erstellen Sie eine Angular-Komponente, um RichText zur Anwendung hinzuzufügen. Erstellen Sie im Verzeichnis *src/app/* den Ordner *richtext* und fügen Sie eine neue Datei namens *richtext.component.ts* hinzu.

#### Quelldateien importieren

Öffnen Sie *richtext.component.ts* und importieren Sie die RichText-Quelldateien.

Verwenden Sie für die PRO-Version, die aus einem lokalen Ordner installiert wurde:

~~~jsx
import { Richtext } from 'dhx-richtext-package';
~~~

Verwenden Sie für die Testversion:

~~~jsx
import { Richtext } from '@dhx/trial-richtext';
~~~

Dieses Tutorial verwendet die Testversion von RichText.

#### Container festlegen und RichText initialisieren

Legen Sie ein Container-Element für RichText fest und initialisieren Sie die Komponente mit dem `Richtext`-Konstruktor innerhalb von `ngOnInit()`. Rufen Sie die Methode [`destructor()`](api/methods/destructor.md) innerhalb von `ngOnDestroy()` auf, um aufzuräumen:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // use the "richtext" selector in app.component.ts as <richtext />
    styleUrls: ["./richtext.component.css"], // include the css file
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // container for RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // initialize the RichText component
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // destroy RichText
    }
}
~~~

#### Stile hinzufügen

Erstellen Sie die Datei *richtext.component.css* im Verzeichnis *src/app/richtext/* mit den Stilen für RichText und seinen Container:

~~~css title="richtext.component.css"
/* import RichText styles */
@import "@dhx/trial-richtext/dist/richtext.css";

/* base page styles */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Stellen Sie Daten für RichText bereit. Erstellen Sie die Datei *data.ts* im Verzeichnis *src/app/richtext/*:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie *richtext.component.ts*. Importieren Sie die Daten und übergeben Sie die `value`-Eigenschaft an die RichText-Konfiguration innerhalb von `ngOnInit()`:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // extract the value from the data module
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Alternativ rufen Sie die Methode [`setValue()`](api/methods/set-value.md) innerhalb von `ngOnInit()` auf, um Daten in RichText zu laden:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // extract the value from the data module
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // other configuration properties 
        });

        // apply the data via the setValue() method
        this._editor.setValue(value); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Die RichText-Komponente ist einsatzbereit. Angular rendert den Editor mit Daten, wenn das Element `<richtext/>` eingebunden wird. Die vollständige Liste der Konfigurationsoptionen finden Sie in der [RichText API-Übersicht](api/overview/main_overview.md).

#### Events verarbeiten

RichText löst Events bei Benutzeraktionen aus. Abonnieren Sie Events mit der Methode [`api.on()`](api/internal/on.md), um auf Benutzereingaben zu reagieren. Siehe die [vollständige Liste der Events](api/overview/events_overview.md).

Öffnen Sie *richtext.component.ts* und aktualisieren Sie die Methode `ngOnInit()`. Das folgende Beispiel gibt bei jedem [`print`](api/events/print.md)-Event eine Meldung in der Konsole aus:

~~~jsx {} title="richtext.component.ts"
// ...
ngOnInit() {
    this._editor = new Richtext(this.richtext_container.nativeElement, {});

    this._editor.api.on("print", () => {
        console.log("The document is printing");
    });
}

ngOnDestroy(): void {
    this._editor.destructor(); 
}
~~~

### Schritt 3. RichText zur App hinzufügen

Öffnen Sie *src/app/app.component.ts* und ersetzen Sie den Standardcode durch den Selektor `<richtext/>`:

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

Erstellen Sie *src/app/app.module.ts* und deklarieren Sie `RichTextComponent`:

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

Öffnen Sie *src/main.ts* und ersetzen Sie den Inhalt durch den Bootstrap-Code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Starten Sie die App, um RichText mit Daten auf der Seite zu rendern.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Sie verfügen nun über eine funktionierende RichText-Integration in Angular. Passen Sie den Code an Ihre Anforderungen an. Ein vollständiges Beispiel ist auf [GitHub](https://github.com/DHTMLX/angular-richtext-demo) verfügbar.
