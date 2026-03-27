---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über die Integration mit Vue. Lesen Sie Entwickleranleitungen und API-Referenz, sehen Sie sich Code-Beispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Vue

:::tip[Tipp]
Sie sollten mit den grundlegenden Konzepten und Mustern von [**Vue**](https://vuejs.org/) vertraut sein, bevor Sie diese Dokumentation lesen. Zur Auffrischung Ihres Wissens lesen Sie bitte die [**Vue 3-Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText ist mit **Vue** kompatibel. Wir haben Code-Beispiele vorbereitet, wie Sie DHTMLX RichText mit **Vue 3** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Projekt erstellen {#creating-a-project}

:::info[Info]
Bevor Sie ein neues Projekt erstellen, installieren Sie [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Vue**-Projekt zu erstellen, führen Sie folgenden Befehl aus:

~~~json
npm create vue@latest
~~~

Dieser Befehl installiert und führt `create-vue` aus, das offizielle **Vue**-Projekt-Scaffolding-Werkzeug. Weitere Details finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Nennen wir das Projekt **my-vue-richtext-app**.

### Abhängigkeiten installieren {#installation-of-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-vue-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den dev server. Verwenden Sie dazu einen Paketmanager:

- Wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie folgende Befehle aus:

~~~jsx
yarn
yarn start // oder yarn dev
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

Jetzt müssen Sie eine Vue-Komponente erstellen, um RichText in die Anwendung einzubinden. Erstellen Sie eine neue Datei im Verzeichnis ***src/components/*** und benennen Sie sie ***Richtext.vue***.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie die Datei ***Richtext.vue*** und importieren Sie die RichText-Quelldateien. Beachten Sie:

- Wenn Sie die PRO-Version verwenden und das RichText-Paket aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Wenn Sie die Testversion von RichText verwenden, geben Sie folgende Pfade an:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

In diesem Tutorial sehen Sie, wie Sie die **Testversion** von RichText konfigurieren.

#### Container festlegen und RichText hinzufügen {#setting-containers-and-adding-richtext}

Um RichText auf der Seite anzuzeigen, müssen Sie einen Container für RichText erstellen und die Komponente mit dem entsprechenden Konstruktor initialisieren:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // die RichText-Komponente initialisieren
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // RichText zerstören
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### Stile hinzufügen {#adding-styles}

Um RichText korrekt anzuzeigen, müssen Sie in der CSS-Hauptdatei des Projekts wichtige Stile für RichText und seinen Container festlegen:

~~~css title="main.css"
/* Stile für die initiale Seite festlegen */
html,
body,
#app { /* stellen Sie sicher, dass Sie den Root-Container #app verwenden */
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

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Öffnen Sie dann die Datei ***App.vue***, importieren Sie die Daten und initialisieren Sie sie über die interne Methode `data()`. Anschließend können Sie die Daten als **props** an die neu erstellte `<RichText/>`-Komponente übergeben:

~~~html {} title="App.vue"
<script>
import RichText from "./components/Richtext.vue";
import { getData } from "./data";

export default {
    components: { RichText },
    data() {
        const { value } = getData();
        return { value };
    }
};
</script>

<template>
    <RichText :value="value" />
</template>
~~~

Wechseln Sie zur Datei ***Richtext.vue*** und wenden Sie die übergebenen **props** auf das RichText-Konfigurationsobjekt an:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // weitere Konfigurationseigenschaften
        });
    },

    unmounted() {
        this.editor.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

Sie können auch die Methode [`setValue()`](api/methods/set-value.md) innerhalb der Methode `mounted()` von Vue verwenden, um Daten in RichText zu laden:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // weitere Konfigurationseigenschaften
        });

        this.editor.setValue(this.value);
    },

    unmounted() {
        this.editor.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

Die RichText-Komponente ist nun einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, initialisiert es RichText mit Daten. Sie können auch die erforderlichen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [RichText-API-Dokumentation](api/overview/main_overview.md), um die vollständige Liste der verfügbaren Eigenschaften zu prüfen.

#### Ereignisse verarbeiten {#handling-events}

Wenn ein Benutzer eine Aktion in RichText ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code dafür auszuführen. Siehe die [vollständige Ereignisliste](api/overview/events_overview.md).

Öffnen Sie ***Richtext.vue*** und ergänzen Sie die Methode `mounted()`:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

        this.editor.api.on("print", () => {
            console.log("The document is printing");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

Danach können Sie die App starten, um RichText mit Daten auf einer Seite geladen zu sehen.

<div className="img_border">
![RichText-Initialisierung](../assets/trial_richtext.png)
</div>

Sie wissen jetzt, wie Sie DHTMLX RichText mit Vue integrieren. Sie können den Code gemäß Ihren spezifischen Anforderungen anpassen. Das endgültige erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).
