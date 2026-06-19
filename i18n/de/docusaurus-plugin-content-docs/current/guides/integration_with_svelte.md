---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Integration mit Svelte. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Svelte {#integration-with-svelte}

:::tip[Tipp]
Stellen Sie sicher, dass Sie mit den grundlegenden [Svelte](https://svelte.dev/)-Konzepten und -Mustern vertraut sind. Zur Auffrischung lesen Sie die [Svelte-Dokumentation](https://svelte.dev/docs).
:::

DHTMLX RichText funktioniert mit Svelte. Ein vollständiges Codebeispiel finden Sie in der [GitHub-Demo](https://github.com/DHTMLX/svelte-richtext-demo).

## Projekt erstellen {#create-a-project}

:::info[Info]
Installieren Sie [Node.js](https://nodejs.org/en/) und (optional) [Vite](https://vite.dev/), bevor Sie ein neues Projekt erstellen.
:::

Dieses Tutorial verwendet ein Vite-basiertes Svelte-Projekt. Für SvelteKit und andere Optionen lesen Sie die [Svelte-Projektanleitung](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

Starten Sie ein neues Vite-Projekt:

~~~bash
npm create vite@latest
~~~

### Abhängigkeiten installieren {#install-dependencies}

Wenn der Scaffolder nach einem Projektnamen fragt, verwenden Sie *my-svelte-richtext-app*. Wechseln Sie dann in das neue Verzeichnis:

~~~bash
cd my-svelte-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit einem Paketmanager.

Für [yarn](https://yarnpkg.com/) führen Sie aus:

~~~bash
yarn
yarn dev
~~~

Für [npm](https://www.npmjs.com/) führen Sie aus:

~~~bash
npm install
npm run dev
~~~

Die Anwendung läuft auf localhost (zum Beispiel `http://localhost:3000`).

## RichText erstellen {#create-richtext}

Stoppen Sie die Anwendung und installieren Sie das RichText-Paket.

### Schritt 1. Paket installieren {#step-1-install-the-package}

Laden Sie das [RichText-Testpaket](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testlizenz ist 30 Tage lang gültig.

### Schritt 2. Komponente erstellen {#step-2-create-the-component}

Erstellen Sie eine Svelte-Komponente, um RichText zur Anwendung hinzuzufügen. Erstellen Sie im Verzeichnis *src/* eine neue Datei namens *Richtext.svelte*.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *Richtext.svelte* und importieren Sie die RichText-Quelldateien.

Für die PRO-Version, die aus einem lokalen Ordner installiert wurde, verwenden Sie:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

Für die Testversion verwenden Sie:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

Dieses Tutorial verwendet die Testversion von RichText.

#### Container festlegen und RichText initialisieren {#set-the-container-and-initialize-richtext}

Legen Sie ein Container-Element für RichText fest und initialisieren Sie die Komponente innerhalb von `onMount()`. Rufen Sie die Methode [`destructor()`](api/methods/destructor.md) innerhalb von `onDestroy()` auf, um RichText zu entfernen:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // Container für RichText
let editor;

onMount(() => {
    // RichText-Komponente initialisieren
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

#### Stile hinzufügen {#add-styles}

Fügen Sie die Stile für RichText und seinen Container zur CSS-Hauptdatei des Projekts hinzu (zum Beispiel *src/app.css*):

~~~css title="app.css"
/* Basis-Seitenstile */
html,
body {
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

Öffnen Sie *App.svelte*, importieren Sie die Daten und übergeben Sie den Wert als Prop an die `<RichText/>`-Komponente:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Öffnen Sie *Richtext.svelte* und übergeben Sie den Prop-Wert an die RichText-Konfiguration:

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
        value
        // andere Konfigurationseigenschaften
    });
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Alternativ können Sie die Methode [`setValue()`](api/methods/set-value.md) innerhalb von `onMount()` aufrufen, um Daten in RichText zu laden:

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
        // andere Konfigurationseigenschaften
    });

    editor.setValue(value);
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Die RichText-Komponente ist einsatzbereit. Svelte rendert den Editor mit Daten, wenn das `<RichText/>`-Element eingebunden wird. Die vollständige Liste der Konfigurationsoptionen finden Sie in der [RichText-API-Übersicht](api/overview/main_overview.md).

#### Events verarbeiten {#handle-events}

RichText löst Events bei Benutzeraktionen aus. Abonnieren Sie Events mit der Methode [`api.on()`](api/internal/on.md), um auf Benutzereingaben zu reagieren. Lesen Sie die [vollständige Liste der Events](api/overview/events_overview.md).

Öffnen Sie *Richtext.svelte* und aktualisieren Sie den `onMount()`-Hook. Das folgende Beispiel protokolliert eine Meldung bei jedem [`print`](api/events/print.md)-Event:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {});

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

Starten Sie die Anwendung, um zu sehen, wie RichText mit Daten auf der Seite gerendert wird.

<div className="img_border">
![RichText-Initialisierung](../assets/trial_richtext.png)
</div>

Sie haben jetzt eine funktionierende RichText-Integration in Svelte. Passen Sie den Code an Ihre Anforderungen an. Ein vollständiges Beispiel ist auf [GitHub](https://github.com/DHTMLX/svelte-richtext-demo) verfügbar.
