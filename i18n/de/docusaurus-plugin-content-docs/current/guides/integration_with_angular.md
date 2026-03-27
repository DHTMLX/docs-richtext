---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Integration mit Angular. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Angular

:::tip[Tipp]
Sie sollten mit den grundlegenden Konzepten und Mustern von **Angular** vertraut sein, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie bitte die [**Angular-Dokumentation**](https://v17.angular.io/docs).
:::

DHTMLX RichText ist mit **Angular** kompatibel. Wir haben Code-Beispiele vorbereitet, wie Sie DHTMLX RichText mit **Angular** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Projekt erstellen {#creating-a-project}

:::info[Info]
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Angular CLI**](https://v17.angular.io/cli) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie ein neues **my-angular-richtext-app**-Projekt mit Angular CLI. Führen Sie dazu den folgenden Befehl aus:

~~~json
ng new my-angular-richtext-app
~~~

:::note[Hinweis]
Wenn Sie dieser Anleitung folgen möchten, deaktivieren Sie beim Erstellen der neuen Angular-App Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering)!
:::

Der obige Befehl installiert alle erforderlichen Werkzeuge, sodass Sie keine weiteren Befehle ausführen müssen.

### Abhängigkeiten installieren {#installation-of-dependencies}

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-angular-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den dev server. Verwenden Sie dazu den Paketmanager [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Die App sollte auf einem localhost laufen (z. B. `http://localhost:3000`).

## RichText erstellen {#creating-richtext}

Jetzt müssen Sie den DHTMLX RichText-Quellcode besorgen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des RichText-Pakets fort.

### Schritt 1. Paket installieren {#step-1-package-installation}

Laden Sie das [**RichText-Testpaket**](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den im README-File beschriebenen Schritten. Beachten Sie, dass das Test-RichText nur 30 Tage lang verfügbar ist.

### Schritt 2. Komponente erstellen {#step-2-component-creation}

Jetzt müssen Sie eine Angular-Komponente erstellen, um RichText in die Anwendung einzubinden. Erstellen Sie den Ordner **richtext** im Verzeichnis **src/app/**, fügen Sie eine neue Datei hinzu und benennen Sie sie **richtext.component.ts**.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie die Datei **richtext.component.ts** und importieren Sie die RichText-Quelldateien. Beachten Sie:

- Wenn Sie die PRO-Version verwenden und das RichText-Paket aus einem lokalen Ordner installieren, sieht der Importpfad wie folgt aus:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- Wenn Sie die Testversion von RichText verwenden, geben Sie folgenden Pfad an:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

In diesem Tutorial sehen Sie, wie Sie die **Testversion** von RichText konfigurieren.

#### Container festlegen und RichText initialisieren {#set-containers-and-initialize-the-richtext}

Um RichText auf der Seite anzuzeigen, müssen Sie einen Container für RichText festlegen und die Komponente mit dem entsprechenden Konstruktor initialisieren:

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
        // die RichText-Komponente initialisieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // RichText zerstören
    }
}
~~~

#### Stile hinzufügen {#adding-styles}

Um RichText korrekt anzuzeigen, müssen Sie die entsprechenden Stile bereitstellen. Erstellen Sie dazu die Datei **richtext.component.css** im Verzeichnis **src/app/richtext/** und legen Sie die wichtigen Stile für RichText und seinen Container fest:

~~~css title="richtext.component.css"
/* RichText-Stile importieren */
@import "@dhx/trial-richtext/dist/richtext.css";

/* Stile für die initiale Seite festlegen */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Stile für den RichText-Container festlegen */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* Stile für das RichText-Widget festlegen */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden {#loading-data}

Um Daten in RichText einzufügen, müssen Sie einen Datensatz bereitstellen. Sie können die Datei **data.ts** im Verzeichnis **src/app/richtext/** erstellen und einige Daten hinzufügen:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie dann die Datei ***richtext.component.ts***. Importieren Sie die Datei mit den Daten und geben Sie die entsprechenden Dateneigenschaften im Konfigurationsobjekt von RichText innerhalb der Methode `ngOnInit()` an, wie unten gezeigt:

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
        const { value } = getData(); // Dateneigenschaft initialisieren
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

Sie können auch die Methode [`setValue()`](api/methods/set-value.md) innerhalb der Methode `ngOnInit()` von Angular verwenden, um Daten in RichText zu laden.

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
        const { value } = getData(); // Dateneigenschaft initialisieren
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // weitere Konfigurationseigenschaften
        });

        // Daten über die Methode setValue() anwenden
        this._editor.setValue({ value });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

Die RichText-Komponente ist nun einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es RichText mit Daten. Sie können auch die erforderlichen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [RichText-API-Dokumentation](api/overview/main_overview.md), um die vollständige Liste der verfügbaren Eigenschaften zu prüfen.

#### Ereignisse verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in RichText ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Ereignisliste](api/overview/events_overview.md).

Öffnen Sie die Datei **richtext.component.ts** und ergänzen Sie die Methode `ngOnInit()` wie folgt:

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

### Schritt 3. RichText zur App hinzufügen {#step-3-adding-richtext-into-the-app}

Um die Komponente ***RichTextComponent*** zu Ihrer App hinzuzufügen, öffnen Sie die Datei ***src/app/app.component.ts*** und ersetzen Sie den Standardcode durch folgenden:

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

Erstellen Sie dann die Datei ***app.module.ts*** im Verzeichnis ***src/app/*** und geben Sie *RichTextComponent* wie folgt an:

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

Der letzte Schritt besteht darin, die Datei ***src/main.ts*** zu öffnen und den vorhandenen Code durch folgenden zu ersetzen:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Danach können Sie die App starten, um RichText mit Daten auf einer Seite geladen zu sehen.

<div className="img_border">
![RichText-Initialisierung](../assets/trial_richtext.png)
</div>

Sie wissen jetzt, wie Sie DHTMLX RichText mit Angular integrieren. Sie können den Code gemäß Ihren spezifischen Anforderungen anpassen. Das endgültige erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).
