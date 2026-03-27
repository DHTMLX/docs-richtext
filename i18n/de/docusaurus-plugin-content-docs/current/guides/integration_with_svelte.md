---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Integration mit Svelte. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Svelte

:::tip[Tipp]
Sie sollten mit den grundlegenden Konzepten und Mustern von **Svelte** vertraut sein, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie bitte die [**Svelte-Dokumentation**](https://svelte.dev/).
:::

DHTMLX RichText ist mit **Svelte** kompatibel. Wir haben Code-Beispiele vorbereitet, wie Sie DHTMLX RichText mit **Svelte** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Projekt erstellen {#creating-a-project}

:::info[Info]
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Es gibt mehrere Möglichkeiten, ein **Svelte**-Projekt zu erstellen:

- Sie können [**SvelteKit**](https://kit.svelte.dev/) verwenden

oder

- Sie können auch **Svelte mit Vite** verwenden (aber ohne SvelteKit):

~~~json
npm create vite@latest
~~~

Weitere Details finden Sie im [entsprechenden Artikel](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Abhängigkeiten installieren {#installation-of-dependencies}

Nennen wir das Projekt **my-svelte-richtext-app** und wechseln in das App-Verzeichnis:

~~~json
cd my-svelte-richtext-app
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

Jetzt müssen Sie eine Svelte-Komponente erstellen, um RichText in die Anwendung einzubinden. Erstellen Sie eine neue Datei im Verzeichnis ***src/*** und benennen Sie sie ***Richtext.svelte***.

#### Quelldateien importieren {#importing-source-files}

Öffnen Sie die Datei ***Richtext.svelte*** und importieren Sie die RichText-Quelldateien. Beachten Sie:

- Wenn Sie die PRO-Version verwenden und das RichText-Paket aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Wenn Sie die Testversion von RichText verwenden, geben Sie folgende Pfade an:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

In diesem Tutorial sehen Sie, wie Sie die **Testversion** von RichText konfigurieren.

#### Container festlegen und RichText hinzufügen {#setting-containers-and-adding-richtext}

Um RichText auf der Seite anzuzeigen, müssen Sie einen Container für RichText erstellen und die Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // Container für RichText initialisieren
let editor;

onMount(() => {
    // die RichText-Komponente initialisieren
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // RichText zerstören
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Daten laden {#loading-data}

Um Daten in RichText einzufügen, müssen wir einen Datensatz bereitstellen. Sie können die Datei ***data.js*** im Verzeichnis ***src/*** erstellen und einige Daten hinzufügen:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie dann die Datei ***App.svelte***, importieren Sie die Daten und übergeben Sie sie als **props** an die neu erstellten `<RichText/>`-Komponenten:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Wechseln Sie zur Datei ***Richtext.svelte*** und wenden Sie die übergebenen **props** auf das RichText-Konfigurationsobjekt an:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        value
        // weitere Konfigurationseigenschaften
    })
});

onDestroy(() => {
    editor.destructor();
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Sie können auch die Methode [`setValue()`](/api/methods/set-value.md) innerhalb der Methode `onMount()` von Svelte verwenden, um Daten in RichText zu laden:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export let value;

let richtext_container;
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {
        // weitere Konfigurationseigenschaften
    })

    editor.setValue(value);
});

onDestroy(() => {
    editor.destructor();
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Die RichText-Komponente ist nun einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es RichText mit Daten. Sie können auch die erforderlichen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [RichText-API-Dokumentation](api/overview/main_overview.md), um die vollständige Liste der verfügbaren Eigenschaften zu prüfen.

#### Ereignisse verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in RichText ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Ereignisliste](api/overview/events_overview.md).

Öffnen Sie ***Richtext.svelte*** und ergänzen Sie die Methode `onMount()` wie folgt:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {})

    editor.api.on("print", () => {
        console.log("The document is printing");
    });
});

onDestroy(() => {
    editor?.destructor();
});
</script>

// ...
~~~

### Schritt 3. RichText zur App hinzufügen {#step-3-adding-richtext-into-the-app}

Um die Komponente zur App hinzuzufügen, öffnen Sie die Datei **App.svelte** und ersetzen Sie den Standardcode durch folgenden:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";

    const { value } = getData();
</script>

<RichText value={value}  />
~~~

Danach können Sie die App starten, um RichText mit Daten auf einer Seite geladen zu sehen.

<div className="img_border">
![RichText-Initialisierung](../assets/trial_richtext.png)
</div>

Sie wissen jetzt, wie Sie DHTMLX RichText mit Svelte integrieren. Sie können den Code gemäß Ihren spezifischen Anforderungen anpassen. Das endgültige erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).
