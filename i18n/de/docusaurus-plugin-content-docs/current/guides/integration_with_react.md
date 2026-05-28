---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit React. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Integration mit React

:::tip
Stellen Sie sicher, dass Sie mit den grundlegenden [React](https://react.dev)-Konzepten und -Mustern vertraut sind. Zur Auffrischung lesen Sie die [React-Dokumentation](https://react.dev/learn).
:::

DHTMLX RichText funktioniert mit React. Ein vollständiges Codebeispiel finden Sie in der [GitHub-Demo](https://github.com/DHTMLX/react-richtext-demo).

## Projekt erstellen

:::info
Installieren Sie [Node.js](https://nodejs.org/en/) und (optional) [Vite](https://vite.dev/), bevor Sie ein neues Projekt erstellen.
:::

Erstellen Sie ein neues *my-react-richtext-app*-Projekt mit Create React App:

~~~bash
npx create-react-app my-react-richtext-app
~~~

### Abhängigkeiten installieren

Wechseln Sie in das neue App-Verzeichnis:

~~~bash
cd my-react-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit einem Paketmanager.

Für [yarn](https://yarnpkg.com/) führen Sie aus:

~~~bash
yarn
yarn start
~~~

Für [npm](https://www.npmjs.com/) führen Sie aus:

~~~bash
npm install
npm start
~~~

Die App läuft auf localhost (zum Beispiel `http://localhost:3000`).

## RichText erstellen

Stoppen Sie die App und installieren Sie das RichText-Paket.

### Schritt 1. Paket installieren

Laden Sie das [RichText-Testpaket](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testlizenz ist 30 Tage gültig.

### Schritt 2. Komponente erstellen

Erstellen Sie eine React-Komponente, um RichText zur Anwendung hinzuzufügen. Erstellen Sie im Verzeichnis *src/* eine neue Datei mit dem Namen *Richtext.jsx*.

#### Quelldateien importieren

Öffnen Sie *Richtext.jsx* und importieren Sie die RichText-Quelldateien.

Für die PRO-Version, die aus einem lokalen Ordner installiert wurde, verwenden Sie:

~~~jsx title="Richtext.jsx"
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

Für die Testversion verwenden Sie:

~~~jsx title="Richtext.jsx"
import { Richtext } from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

Dieses Tutorial verwendet die Testversion von RichText.

#### Container festlegen und RichText initialisieren

Legen Sie ein Container-Element für RichText fest und initialisieren Sie die Komponente mit dem `Richtext`-Konstruktor innerhalb von `useEffect()`. Rufen Sie die Methode [`destructor()`](api/methods/destructor.md) in der Cleanup-Funktion auf, um RichText zu entfernen:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // RichText-Styles einbinden

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // Container für RichText

    useEffect(() => {
        // RichText-Komponente initialisieren
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // RichText zerstören
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Styles hinzufügen

Fügen Sie die Styles für RichText und seinen Container zur Haupt-CSS-Datei des Projekts hinzu:

~~~css title="index.css"
/* Basis-Seitenstile */
html,
body,
#root {
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

#### Daten laden

Stellen Sie Daten für RichText bereit. Erstellen Sie die Datei *data.js* im Verzeichnis *src/*:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie *App.js* und importieren Sie die Daten. Übergeben Sie den Wert als Prop an die `<RichText/>`-Komponente:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Öffnen Sie *Richtext.jsx* und übergeben Sie `props.value` an die RichText-Konfiguration:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // Wert anwenden
            // weitere Konfigurationseigenschaften
        });

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

Alternativ können Sie die Methode [`setValue()`](api/methods/set-value.md) innerhalb von `useEffect()` aufrufen, um Daten in RichText zu laden:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // Konfigurationseigenschaften
        });
    
        editor.setValue(value);

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

Die RichText-Komponente ist einsatzbereit. React rendert den Editor mit Daten, wenn das `<RichText/>`-Element eingebunden wird. Eine vollständige Liste der Konfigurationsoptionen finden Sie in der [RichText API-Übersicht](api/overview/main_overview.md).

#### Events verarbeiten

RichText löst Events bei Benutzeraktionen aus. Abonnieren Sie Events mit der Methode [`api.on()`](api/internal/on.md), um auf Benutzereingaben zu reagieren. Weitere Informationen finden Sie in der [vollständigen Liste der Events](api/overview/events_overview.md).

Öffnen Sie *Richtext.jsx* und aktualisieren Sie den `useEffect()`-Hook. Das folgende Beispiel protokolliert eine Nachricht bei jedem [`print`](api/events/print.md)-Event:

~~~jsx {} title="Richtext.jsx"
// ...
useEffect(() => {
    const editor = new Richtext(richtext_container.current, {});

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
    
    return () => {
        editor.destructor();
    };
}, []);
// ...
~~~

Starten Sie die App, um zu sehen, wie RichText mit Daten auf der Seite gerendert wird.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Sie verfügen nun über eine funktionierende RichText-Integration in React. Passen Sie den Code an Ihre Anforderungen an. Ein vollständiges Beispiel ist auf [GitHub](https://github.com/DHTMLX/react-richtext-demo) verfügbar.
