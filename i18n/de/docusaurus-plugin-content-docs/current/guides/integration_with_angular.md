---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit Angular. Lesen Sie Entwicklerleitfäden und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX RichText herunter.
---

# Integration mit Angular {#integration-with-angular}

:::tip[Tipp]
Stellen Sie sicher, dass Sie mit den grundlegenden Angular-Konzepten und -Mustern vertraut sind. Zur Auffrischung lesen Sie die [Angular-Dokumentation](https://v17.angular.io/docs).
:::

DHTMLX RichText funktioniert mit Angular. Ein vollständiges Code-Beispiel finden Sie in der [GitHub-Demo](https://github.com/DHTMLX/angular-richtext-demo).

## Projekt erstellen {#create-a-project}

:::info[Info]
Installieren Sie [Angular CLI](https://v17.angular.io/cli) und [Node.js](https://nodejs.org/en/), bevor Sie ein neues Projekt erstellen.
:::

Erstellen Sie ein neues *my-angular-richtext-app*-Projekt mit Angular CLI:

~~~bash
ng new my-angular-richtext-app
~~~

:::note[Hinweis]
Deaktivieren Sie Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering), wenn Sie die Angular CLI während der Projekterstellung dazu auffordert.
:::

Der Befehl installiert alle notwendigen Tools. Es sind keine weiteren Befehle erforderlich.

### Abhängigkeiten installieren {#install-dependencies}

Wechseln Sie in das neue App-Verzeichnis:

~~~bash
cd my-angular-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit dem [yarn](https://yarnpkg.com/) Paketmanager:

~~~bash
yarn
yarn start
~~~

Die App läuft auf localhost (zum Beispiel `http://localhost:3000`).

## RichText erstellen {#create-richtext}

Beenden Sie die App und installieren Sie das RichText-Paket.

### Schritt 1. Paket installieren {#step-1-install-the-package}

Laden Sie das [RichText-Testpaket](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testlizenz ist 30 Tage gültig.

### Schritt 2. Komponente erstellen {#step-2-create-the-component}

Erstellen Sie eine Angular-Komponente, um RichText zur Anwendung hinzuzufügen. Erstellen Sie im Verzeichnis *src/app/* den Ordner *richtext* und fügen Sie eine neue Datei namens *richtext.component.ts* hinzu.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *richtext.component.ts* und importieren Sie die RichText-Quelldateien.

Für die PRO-Version, die aus einem lokalen Ordner installiert wurde, verwenden Sie:

~~~jsx
import { Richtext } from 'dhx-richtext-package';
~~~

Für die Testversion verwenden Sie:

~~~jsx
import { Richtext } from '@dhx/trial-richtext';
~~~

Dieses Tutorial verwendet die Testversion von RichText.

#### Container festlegen und RichText initialisieren {#set-the-container-and-initialize-richtext}

Legen Sie ein Container-Element für RichText fest und initialisieren Sie die Komponente mit dem `Richtext`-Konstruktor innerhalb von `ngOnInit()`. Rufen Sie die Methode [`destructor()`](api/methods/destructor.md) innerhalb von `ngOnDestroy()` auf, um aufzuräumen:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // den "richtext"-Selektor in app.component.ts als <richtext /> verwenden
    styleUrls: ["./richtext.component.css"], // CSS-Datei einbinden
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // Container für RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // RichText-Komponente initialisieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // RichText zerstören
    }
}
~~~

#### Styles hinzufügen {#add-styles}

Erstellen Sie die Datei *richtext.component.css* im Verzeichnis *src/app/richtext/* mit den Styles für RichText und seinen Container:

~~~css title="richtext.component.css"
/* RichText-Styles importieren */
@import "@dhx/trial-richtext/dist/richtext.css";

/* Basis-Seitenstyles */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText-Container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText-Widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden {#load-data}

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
import { getData } from "./data"; // Daten importieren
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
        const { value } = getData(); // Wert aus dem Datenmodul extrahieren
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

Alternativ können Sie die Methode [`setValue()`](api/methods/set-value.md) innerhalb von `ngOnInit()` aufrufen, um Daten in RichText zu laden:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // Daten importieren
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
        const { value } = getData(); // Wert aus dem Datenmodul extrahieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // weitere Konfigurationseigenschaften 
        });

        // Daten über die Methode setValue() anwenden
        this._editor.setValue(value); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Die RichText-Komponente ist einsatzbereit. Angular rendert den Editor mit Daten, wenn das `<richtext/>`-Element eingebunden wird. Die vollständige Liste der Konfigurationsoptionen finden Sie in der [RichText-API-Übersicht](api/overview/main_overview.md).

#### Events behandeln {#handle-events}

RichText löst Events bei Benutzeraktionen aus. Abonnieren Sie Events mit der Methode [`api.on()`](api/internal/on.md), um auf Benutzereingaben zu reagieren. Weitere Informationen finden Sie in der [vollständigen Event-Liste](api/overview/events_overview.md).

Öffnen Sie *richtext.component.ts* und aktualisieren Sie die Methode `ngOnInit()`. Das folgende Beispiel protokolliert eine Meldung bei jedem [`print`](api/events/print.md)-Event:

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

### Schritt 3. RichText zur App hinzufügen {#step-3-add-richtext-to-the-app}

Öffnen Sie *src/app/app.component.ts* und ersetzen Sie den Standardcode durch den `<richtext/>`-Selektor:

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

Erstellen Sie *src/app/app.module.ts* und deklarieren Sie die `RichTextComponent`:

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

Starten Sie die App, um zu sehen, wie RichText mit Daten auf der Seite gerendert wird.

<div className="img_border">
![RichText-Initialisierung](../assets/trial_richtext.png)
</div>

Sie haben jetzt eine funktionierende RichText-Integration in Angular. Passen Sie den Code an Ihre Bedürfnisse an. Ein vollständiges Beispiel ist auf [GitHub](https://github.com/DHTMLX/angular-richtext-demo) verfügbar.
