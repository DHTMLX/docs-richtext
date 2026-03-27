---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Integration mit React. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit React

:::tip[Tipp]
Sie sollten mit den grundlegenden Konzepten und Mustern von [**React**](https://react.dev) vertraut sein, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie bitte die [**React-Dokumentation**](https://react.dev/learn).
:::

DHTMLX RichText ist mit **React** kompatibel. Wir haben Code-Beispiele vorbereitet, wie Sie DHTMLX RichText mit **React** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Projekt erstellen {#creating-a-project}

:::info[Info]
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Sie können ein einfaches **React**-Projekt erstellen oder **React mit Vite** verwenden. Nennen wir das Projekt **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Abhängigkeiten installieren {#installation-of-dependencies}

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-react-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den dev server. Verwenden Sie dazu einen Paketmanager:

- Wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie folgende Befehle aus:

~~~json
yarn
yarn start
~~~

- Wenn Sie [**npm**](https://www.npmjs.com/) verwenden, führen Sie folgende Befehle aus:

~~~json
npm install
npm run dev
~~~

Die App sollte auf einem localhost laufen (z. B. `http://localhost:3000`).

## RichText erstellen {#creating-richtext}

Jetzt müssen Sie den DHTMLX RichText-Quellcode besorgen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des RichText-Pakets fort.

### Schritt 1. Paket installieren {#step-1-package-installation}

Laden Sie das [**RichText-Testpaket**](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den im README-File beschriebenen Schritten. Beachten Sie, dass das Test-RichText nur 30 Tage lang verfügbar ist.

### Schritt 2. Komponente erstellen {#step-2-component-creation}

Jetzt müssen Sie eine React-Komponente erstellen, um RichText in die Anwendung einzubinden. Erstellen Sie eine neue Datei im Verzeichnis ***src/*** und benennen Sie sie ***Richtext.jsx***.

#### Quelldateien importieren {#importing-source-files}

Öffnen Sie die Datei ***Richtext.jsx*** und importieren Sie die RichText-Quelldateien. Beachten Sie:

- Wenn Sie die PRO-Version verwenden und das RichText-Paket aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- Wenn Sie die Testversion von RichText verwenden, geben Sie folgende Pfade an:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

In diesem Tutorial sehen Sie, wie Sie die **Testversion** von RichText konfigurieren.

#### Container festlegen und RichText hinzufügen {#setting-containers-and-adding-richtext}

Um RichText auf der Seite anzuzeigen, müssen Sie einen Container für RichText erstellen und die Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // RichText-Stile einbinden

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // Container für RichText initialisieren

    useEffect(() => {
        // die RichText-Komponente initialisieren
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

#### Stile hinzufügen {#adding-styles}

Um RichText korrekt anzuzeigen, müssen Sie in der CSS-Hauptdatei des Projekts wichtige Stile für RichText und seinen Container festlegen:

~~~css title="index.css"
/* Stile für die initiale Seite festlegen */
html,
body,
#root {
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

Um Daten in RichText einzufügen, müssen Sie einen Datensatz bereitstellen. Sie können die Datei ***data.js*** im Verzeichnis ***src/*** erstellen und einige Daten hinzufügen:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie dann die Datei ***App.js*** und importieren Sie die Daten. Anschließend können Sie die Daten als **props** an die neu erstellten `<RichText/>`-Komponenten übergeben:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Wechseln Sie zur Datei ***Richtext.jsx*** und wenden Sie die übergebenen **props** auf das RichText-Konfigurationsobjekt an:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
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

Sie können auch die Methode [`setValue()`](api/methods/set-value.md) innerhalb der Methode `useEffect()` von React verwenden, um Daten in RichText zu laden:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
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

Die RichText-Komponente ist nun bereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es RichText mit Daten. Sie können auch die erforderlichen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [RichText-API-Dokumentation](api/overview/main_overview.md), um die vollständige Liste der verfügbaren Eigenschaften zu prüfen.

#### Ereignisse verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in RichText ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Ereignisliste](api/overview/events_overview.md).

Öffnen Sie ***Richtext.jsx*** und ergänzen Sie die Methode `useEffect()` wie folgt:

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

Danach können Sie die App starten, um RichText mit Daten auf einer Seite geladen zu sehen.

<div className="img_border">
![RichText-Initialisierung](../assets/trial_richtext.png)
</div>

Sie wissen jetzt, wie Sie DHTMLX RichText mit React integrieren. Sie können den Code gemäß Ihren spezifischen Anforderungen anpassen. Das endgültige erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).
