---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit React. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit React

:::tip
Es ist hilfreich, bereits etwas Erfahrung mit [**React**](https://react.dev) zu haben, bevor Sie mit dieser Anleitung beginnen. Falls Sie eine kurze Auffrischung benötigen, schauen Sie in die [**React-Dokumentation**](https://react.dev/learn).
:::

DHTMLX RichText funktioniert problemlos mit **React**. Es gibt Codebeispiele, die zeigen, wie DHTMLX RichText in React-Anwendungen verwendet wird. Im [**Beispiel auf GitHub**](https://github.com/DHTMLX/react-richtext-demo) finden Sie weitere Details.

## Projekt erstellen

:::info
Bevor Sie ein neues Projekt starten, stellen Sie sicher, dass [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/) installiert sind.
:::

Sie können ein einfaches **React**-Projekt einrichten oder **React mit Vite** nutzen. In diesem Beispiel heißt das Projekt **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Installation der Abhängigkeiten

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-react-richtext-app
~~~

Installieren Sie anschließend die Abhängigkeiten und starten Sie den Entwicklungsserver mit Ihrem bevorzugten Paketmanager:

- Für [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- Für [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Die App ist dann lokal erreichbar (z. B. unter `http://localhost:3000`).

## RichText erstellen

Nun können Sie den DHTMLX RichText-Code hinzufügen. Stoppen Sie zunächst die App und installieren Sie das RichText-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Test-RichText-Paket**](how_to_start.md#installation-von-richtext-via-npm-oder-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testversion von RichText ist 30 Tage lang verfügbar.

### Schritt 2. Komponentenerstellung

Erstellen Sie nun eine React-Komponente, um RichText zu Ihrer App hinzuzufügen. Legen Sie im Verzeichnis ***src/*** eine neue Datei namens ***Richtext.jsx*** an.

#### Importieren der Quelldateien

Öffnen Sie ***Richtext.jsx*** und importieren Sie die RichText-Dateien. Beachten Sie dabei:

- Wenn Sie die PRO-Version besitzen und RichText aus einem lokalen Ordner installieren, sollten Ihre Imports folgendermaßen aussehen:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- Für die Testversion verwenden Sie diese Imports:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

In dieser Anleitung wird die **Testversion** verwendet.

#### Container setzen und Richtext hinzufügen

Um RichText auf der Seite anzuzeigen, richten Sie einen Container ein und initialisieren Sie die Komponente mit ihrem Konstruktor:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // RichText-Styles einbinden

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // Container für RichText initialisieren

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

Sie müssen etwas CSS hinzufügen, damit RichText korrekt angezeigt wird. Ergänzen Sie die Haupt-CSS-Datei mit diesen Styles:

~~~css title="index.css"
/* Styles für die Startseite */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für RichText-Container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Styles für RichText-Widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Daten in RichText zu laden, bereiten Sie einen Datensatz vor. Erstellen Sie eine Datei namens ***data.js*** im ***src/***-Verzeichnis und fügen Sie etwas Inhalt hinzu:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie danach ***App.js*** und importieren Sie die Daten. Übergeben Sie sie als **Prop** an Ihre `<RichText/>`-Komponente:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Nutzen Sie nun in ***Richtext.jsx*** die übergebene **Prop** in der RichText-Konfiguration:

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

Falls gewünscht, können Sie auch die [`setValue()`](api/methods/set-value.md)-Methode innerhalb von `useEffect()` nutzen, um Daten zu laden:

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

Damit ist die RichText-Komponente eingerichtet. Beim Rendern wird der RichText-Editor mit Ihren Daten angezeigt. Sie können die Konfiguration nach Bedarf anpassen. Die [RichText API-Dokumentation](api/overview/main_overview.md) enthält die vollständige Liste aller Optionen.

#### Ereignisse behandeln

RichText löst Ereignisse aus, wenn Benutzer mit dem Editor interagieren. Sie können diese Ereignisse nutzen, um eigenen Code auszuführen. Die [vollständige Liste der Ereignisse](api/overview/events_overview.md) finden Sie in der Dokumentation.

Um ein Ereignis zu behandeln, passen Sie ***Richtext.jsx*** wie folgt an:

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

Jetzt können Sie die App starten, um RichText mit Ihren Daten auf der Seite zu sehen.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

Das war's zur Integration von DHTMLX RichText mit React. Sie können den Code an Ihre Anforderungen anpassen. Ein fortgeschritteneres Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).
