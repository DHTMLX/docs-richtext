---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit Vue. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# Integration mit Vue {#integration-with-vue}

:::tip[Tipp]
Stellen Sie sicher, dass Sie mit den grundlegenden [Vue](https://vuejs.org/)-Konzepten und -Mustern vertraut sind. Zur Auffrischung lesen Sie die [Vue 3-Dokumentation](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText funktioniert mit Vue. Ein vollständiges Codebeispiel finden Sie in der [GitHub-Demo](https://github.com/DHTMLX/vue-richtext-demo).

## Projekt erstellen {#create-a-project}

:::info[Info]
Installieren Sie [Node.js](https://nodejs.org/en/) vor dem Erstellen eines neuen Projekts.
:::

Erstellen Sie ein Vue-Projekt mit dem offiziellen Scaffolding-Tool:

~~~bash
npm create vue@latest
~~~

Der Befehl installiert und startet `create-vue`. Wenn der Scaffolder nach einem Projektnamen fragt, verwenden Sie *my-vue-richtext-app*. Weitere Informationen finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

### Abhängigkeiten installieren {#install-dependencies}

Wechseln Sie in das App-Verzeichnis:

~~~bash
cd my-vue-richtext-app
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

Die App läuft auf localhost (zum Beispiel `http://localhost:3000`).

## RichText erstellen {#create-richtext}

Stoppen Sie die App und installieren Sie das RichText-Paket.

### Schritt 1. Paket installieren {#step-1-install-the-package}

Laden Sie das [RichText-Testpaket](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und befolgen Sie die Schritte in der README-Datei. Die Testlizenz ist 30 Tage gültig.

### Schritt 2. Komponente erstellen {#step-2-create-the-component}

Erstellen Sie eine Vue-Komponente, um RichText zur Anwendung hinzuzufügen. Erstellen Sie im Verzeichnis *src/components/* eine neue Datei namens *Richtext.vue*.

#### Quelldateien importieren {#import-source-files}

Öffnen Sie *Richtext.vue* und importieren Sie die RichText-Quelldateien.

Für die PRO-Version, die aus einem lokalen Ordner installiert wurde, verwenden Sie:

~~~html title="Richtext.vue"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

Für die Testversion verwenden Sie:

~~~html title="Richtext.vue"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

Dieses Tutorial verwendet die Testversion von RichText.

#### Container festlegen und RichText initialisieren {#set-the-container-and-initialize-richtext}

Legen Sie ein Container-Element für RichText fest und initialisieren Sie die Komponente mit dem `Richtext`-Konstruktor in `mounted()`. Rufen Sie die Methode [`destructor()`](api/methods/destructor.md) in `unmounted()` auf, um RichText zu entfernen:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // RichText-Komponente initialisieren
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

#### Stile hinzufügen {#add-styles}

Fügen Sie die Stile für RichText und seinen Container zur Haupt-CSS-Datei des Projekts hinzu:

~~~css title="main.css"
/* Basis-Seitenstile */
html,
body,
#app { /* den #app-Root-Container verwenden */
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

Öffnen Sie *App.vue*, importieren Sie die Daten und initialisieren Sie sie über die Methode `data()`. Übergeben Sie den Wert als Prop an die `<RichText/>`-Komponente:

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

Öffnen Sie *Richtext.vue* und übergeben Sie den Prop-Wert an die RichText-Konfiguration:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
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

Alternativ können Sie die Methode [`setValue()`](api/methods/set-value.md) in `mounted()` aufrufen, um Daten in RichText zu laden:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
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

Die RichText-Komponente ist einsatzbereit. Vue rendert den Editor mit Daten, wenn das `<RichText/>`-Element eingebunden wird. Die vollständige Liste der Konfigurationsoptionen finden Sie in der [RichText API-Übersicht](api/overview/main_overview.md).

#### Events verarbeiten {#handle-events}

RichText löst Events bei Benutzeraktionen aus. Abonnieren Sie Events mit der Methode [`api.on()`](api/internal/on.md), um auf Benutzereingaben zu reagieren. Weitere Informationen finden Sie in der [vollständigen Event-Liste](api/overview/events_overview.md).

Öffnen Sie *Richtext.vue* und aktualisieren Sie den `mounted()`-Hook. Das folgende Beispiel protokolliert bei jedem [`print`](api/events/print.md)-Event eine Meldung:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {});

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

Starten Sie die App, um zu sehen, wie RichText mit Daten auf der Seite gerendert wird.

<div className="img_border">
![In einer Vue-Anwendung gerendertes DHTMLX RichText mit Beispielinhalt](/img/trial_richtext.png)
</div>

Sie verfügen nun über eine funktionierende RichText-Integration in Vue. Passen Sie den Code an Ihre Bedürfnisse an. Ein vollständiges Beispiel ist auf [GitHub](https://github.com/DHTMLX/vue-richtext-demo) verfügbar.
