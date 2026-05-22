---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie, wie die Integration mit Vue funktioniert. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Vue

:::tip[Tipp]
Stellen Sie sicher, dass Sie mit den grundlegenden [Vue](https://vuejs.org/)-Konzepten und -Mustern vertraut sind. Zur Auffrischung lesen Sie die [Vue-3-Dokumentation](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText funktioniert mit Vue. Ein vollständiges Code-Beispiel finden Sie in der [GitHub-Demo](https://github.com/DHTMLX/vue-richtext-demo).

## Projekt erstellen

:::info[Info]
Installieren Sie [Node.js](https://nodejs.org/en/) vor dem Erstellen eines neuen Projekts.
:::

Erstellen Sie ein Vue-Projekt mit dem offiziellen Scaffolding-Tool:

~~~bash
npm create vue@latest
~~~

Der Befehl installiert und führt `create-vue` aus. Wenn der Scaffolder nach einem Projektnamen fragt, verwenden Sie *my-vue-richtext-app*. Weitere Details finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

### Abhängigkeiten installieren

Wechseln Sie in das App-Verzeichnis:

~~~bash
cd my-vue-richtext-app
~~~

Installieren Sie Abhängigkeiten und starten Sie den Entwicklungsserver mit einem Paketmanager.

Für [yarn](https://yarnpkg.com/), führen Sie aus:

~~~bash
yarn
yarn dev
~~~

Für [npm](https://www.npmjs.com/), führen Sie aus:

~~~bash
npm install
npm run dev
~~~

Die App läuft auf localhost (z. B. `http://localhost:3000`).

## RichText erstellen

Stoppen Sie die App und installieren Sie das RichText-Paket.

### Schritt 1. Paket installieren

Laden Sie das [RichText-Testpaket](/how_to_start/#installing-richtext-via-npm-or-yarn) herunter und folgen Sie den Schritten in der README-Datei. Die Testlizenz ist 30 Tage gültig.

### Schritt 2. Komponente erstellen

Erstellen Sie eine Vue-Komponente, um RichText zur Anwendung hinzuzufügen. Erstellen Sie im Verzeichnis *src/components/* eine neue Datei namens *Richtext.vue*.

#### Quelldateien importieren

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

#### Container festlegen und RichText initialisieren

Legen Sie ein Container-Element für RichText fest und initialisieren Sie die Komponente mit dem `Richtext`-Konstruktor innerhalb von `mounted()`. Rufen Sie die [`destructor()`](api/methods/destructor.md)-Methode innerhalb von `unmounted()` auf, um RichText zu entfernen:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // initialize the RichText component
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // destroy RichText
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### Styles hinzufügen

Fügen Sie die Styles für RichText und seinen Container zur Haupt-CSS-Datei des Projekts hinzu:

~~~css title="main.css"
/* base page styles */
html,
body,
#app { /* use the #app root container */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* RichText container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* RichText widget */
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

Öffnen Sie *App.vue*, importieren Sie die Daten und initialisieren Sie sie über die `data()`-Methode. Übergeben Sie den Wert als Prop an die `<RichText/>`-Komponente:

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
            // other configuration properties
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

Alternativ können Sie die [`setValue()`](api/methods/set-value.md)-Methode innerhalb von `mounted()` aufrufen, um Daten in RichText zu laden:

~~~html {} title="Richtext.vue"
<script>
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // other configuration properties
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

Die RichText-Komponente ist einsatzbereit. Vue rendert den Editor mit Daten, wenn das `<RichText/>`-Element eingebunden wird. Die vollständige Liste der Konfigurationsoptionen finden Sie in der [RichText-API-Übersicht](api/overview/main_overview.md).

#### Events verarbeiten

RichText löst Events bei Benutzeraktionen aus. Abonnieren Sie Events mit der [`api.on()`](api/internal/on.md)-Methode, um auf Benutzereingaben zu reagieren. Siehe die [vollständige Liste der Events](api/overview/events_overview.md).

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
![RichText initialization](../assets/trial_richtext.png)
</div>

Sie verfügen jetzt über eine funktionierende RichText-Integration in Vue. Passen Sie den Code nach Ihren Bedürfnissen an. Ein vollständiges Beispiel ist auf [GitHub](https://github.com/DHTMLX/vue-richtext-demo) verfügbar.
