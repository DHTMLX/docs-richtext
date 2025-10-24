---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit Svelte. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX RichText herunter.
---

# Integration mit Svelte

:::tip
Es ist hilfreich, bereits Grundkenntnisse in **Svelte** zu haben, um diesem Leitfaden zu folgen. Falls Sie eine kurze Auffrischung benötigen, schauen Sie in die [**Svelte-Dokumentation**](https://svelte.dev/).
:::

DHTMLX RichText funktioniert problemlos mit **Svelte**. Es gibt einige praktische Codebeispiele, die zeigen, wie DHTMLX RichText in Svelte-Anwendungen verwendet werden kann. Weitere Details und Beispiele finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Ein Projekt erstellen

:::info
Bevor Sie ein neues Projekt starten, stellen Sie sicher, dass [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/) installiert sind.
:::

Es gibt mehrere Möglichkeiten, ein **Svelte**-Projekt einzurichten:

- Verwenden Sie [**SvelteKit**](https://kit.svelte.dev/)

oder

- Nutzen Sie **Svelte und Vite** (ohne SvelteKit):

~~~json
npm create vite@latest
~~~

Weitere Informationen finden Sie in diesem [verwandten Artikel](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation der Abhängigkeiten

Nennen wir das Projekt **my-svelte-richtext-app** und wechseln in dessen Verzeichnis:

~~~json
cd my-svelte-richtext-app
~~~

Installieren Sie anschließend die Abhängigkeiten und starten Sie den Entwicklungsserver mit dem Paketmanager Ihrer Wahl:

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

Die App sollte nun lokal laufen (zum Beispiel unter `http://localhost:3000`).

## RichText erstellen

Sie benötigen den Quellcode von DHTMLX RichText. Bevor Sie fortfahren, stoppen Sie die App und installieren Sie das RichText-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Testpaket von RichText**](how_to_start.md#installation-von-richtext-via-npm-oder-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testversion ist 30 Tage lang nutzbar.

### Schritt 2. Komponentenerstellung

Nun ist es Zeit, eine Svelte-Komponente für RichText zu erstellen. Legen Sie im Verzeichnis ***src/*** eine neue Datei mit dem Namen ***Richtext.svelte*** an.

#### Quellcode importieren

Importieren Sie in ***Richtext.svelte*** die RichText-Quellcodedateien. Je nach verwendeter Version sehen die Importe so aus:

- Für die lokal installierte PRO-Version verwenden Sie diese Pfade:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Für die Testversion verwenden Sie diese Importe:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

In diesem Leitfaden wird die **Testversion** als Beispiel verwendet.

#### Container festlegen und RichText hinzufügen

Um RichText in Ihrer App anzuzeigen, richten Sie einen Container ein und initialisieren Sie die Komponente mit deren Konstruktor:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // Container für RichText
let editor;

onMount(() => {
    // Initialisierung der RichText-Komponente
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // RichText aufräumen
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Daten laden

Um Daten in RichText zu laden, benötigen Sie einen Datensatz. Erstellen Sie eine Datei ***data.js*** im Verzeichnis ***src/*** und fügen Sie Beispieldaten hinzu:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Importieren Sie dann in ***App.svelte*** die Daten und übergeben Sie sie als Prop an Ihre `<RichText/>`-Komponente:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Aktualisieren Sie nun ***Richtext.svelte***, um die übergebenen **props** in der RichText-Konfiguration zu verwenden:

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

Alternativ können Sie die Methode [`setValue()`](api/methods/set-value.md) innerhalb von Sveltes `onMount()` verwenden, um die Daten zu laden:

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

An diesem Punkt ist die RichText-Komponente eingerichtet und lädt Ihre Daten beim Hinzufügen zur Seite. Sie können die Konfiguration nach Bedarf anpassen. Weitere Optionen finden Sie in der [RichText API-Dokumentation](api/overview/main_overview.md).

#### Ereignisse verarbeiten

RichText löst Ereignisse aus, wenn Aktionen stattfinden. Sie können diese abfangen, um eigenen Code auszuführen. Die [vollständige Liste der Ereignisse](api/overview/events_overview.md) steht als Referenz zur Verfügung.

Um Ereignisse zu verarbeiten, aktualisieren Sie ***Richtext.svelte*** wie folgt in der `onMount()`-Methode:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {})

    editor.api.on("print", () => {
        console.log("Das Dokument wird gedruckt");
    });
});

onDestroy(() => {
    editor?.destructor();
});
</script>

// ...
~~~

### Schritt 3. RichText zur App hinzufügen

Um die Komponente in Ihrer App zu verwenden, öffnen Sie **App.svelte** und ersetzen Sie den Standardinhalt durch:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";
    
    const { value } = getData();
</script>

<RichText value={value}  />
~~~

Starten Sie nun die App, und Sie sehen RichText mit Ihren Daten auf der Seite geladen.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

Das ist alles, was für die Integration von DHTMLX RichText mit Svelte nötig ist. Sie können den Code gerne an Ihre Anforderungen anpassen. Wenn Sie ein fortgeschritteneres Beispiel sehen möchten, finden Sie dieses auf [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).
