---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Integration mit Vue. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# Integration mit Vue

:::tip
Es ist hilfreich, ein grundlegendes Verständnis von [**Vue**](https://vuejs.org/) zu haben, bevor Sie mit dieser Dokumentation beginnen. Falls Sie eine Auffrischung benötigen, schauen Sie in die [**Vue 3 Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText funktioniert problemlos mit **Vue**. Es stehen Codebeispiele zur Verfügung, die zeigen, wie DHTMLX RichText mit **Vue 3** verwendet wird. Weitere Details finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Erstellen eines Projekts

:::info
Stellen Sie sicher, dass [**Node.js**](https://nodejs.org/en/) installiert ist, bevor Sie ein neues Projekt starten.
:::

Um ein **Vue**-Projekt einzurichten, verwenden Sie folgenden Befehl:

~~~json
npm create vue@latest
~~~

Damit wird `create-vue` ausgeführt, das offizielle Tool zum Generieren von **Vue**-Projekten. Weitere Informationen finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Für diese Anleitung wird das Projekt **my-vue-richtext-app** genannt.

### Installation der Abhängigkeiten

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-vue-richtext-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit Ihrem bevorzugten Paketmanager:

- Für [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // oder yarn dev
~~~

- Für [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Die App sollte nun auf Ihrem localhost verfügbar sein (zum Beispiel `http://localhost:3000`).

## RichText erstellen

Als Nächstes benötigen Sie den DHTMLX RichText-Quellcode. Stoppen Sie die App vorerst und installieren Sie das RichText-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Testpaket von RichText**](how_to_start.md#installation-von-richtext-via-npm-oder-yarn) herunter und folgen Sie den Anweisungen in der README-Datei. Die Testversion ist für 30 Tage verfügbar.

### Schritt 2. Komponentenerstellung

Erstellen Sie eine Vue-Komponente, um RichText zu Ihrer App hinzuzufügen. Legen Sie eine neue Datei im Verzeichnis ***src/components/*** an und nennen Sie sie ***Richtext.vue***.

#### Quell-Dateien importieren

Öffnen Sie ***Richtext.vue*** und importieren Sie die RichText-Quelldateien. Beachten Sie dabei:

- Wenn Sie die PRO-Version verwenden und RichText aus einem lokalen Ordner installiert haben, sollten Ihre Importe wie folgt aussehen:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Für die Testversion lauten die Importe:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

Dieses Tutorial zeigt, wie Sie die **Testversion** von RichText einrichten.

#### Container einrichten und Richtext hinzufügen

Um RichText auf der Seite anzuzeigen, richten Sie einen Container ein und initialisieren Sie die Komponente mit deren Konstruktor:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // Initialisieren der RichText-Komponente
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

#### Styles hinzufügen

Damit RichText korrekt angezeigt wird, fügen Sie einige wichtige Styles für RichText und dessen Container in Ihre Haupt-CSS-Datei ein:

~~~css title="main.css"
/* Styles für die Startseite */
html,
body,
#app { /* Stellen Sie sicher, dass Sie den #app Root-Container verwenden */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für den RichText-Container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Styles für das RichText-Widget */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Daten in RichText zu laden, erstellen Sie einen Datensatz. Sie können zum Beispiel eine Datei ***data.js*** im Verzeichnis ***src/*** anlegen mit folgendem Inhalt:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Importieren Sie dann in ***App.vue*** die Daten und initialisieren Sie diese mit der Methode `data()`. Übergeben Sie die Daten als **props** an die `<RichText/>`-Komponente:

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

Gehen Sie nun zurück zu ***Richtext.vue*** und verwenden Sie die **props** in der RichText-Konfiguration:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // andere Konfigurationseigenschaften
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

Alternativ können Sie die [`setValue()`](api/methods/set-value.md)-Methode im `mounted()`-Hook verwenden, um Daten in RichText zu laden:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // andere Konfigurationseigenschaften
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

An diesem Punkt ist die RichText-Komponente eingerichtet und einsatzbereit. Wenn sie zur Seite hinzugefügt wird, initialisiert sie RichText mit Ihren Daten. Sie können die Konfiguration nach Bedarf anpassen. Die vollständige Liste der verfügbaren Eigenschaften finden Sie in der [RichText API-Dokumentation](api/overview/main_overview.md).

#### Ereignisse behandeln

Wenn Aktionen in RichText ausgeführt werden, werden Ereignisse ausgelöst. Diese sind nützlich, um eigenen Code als Reaktion darauf auszuführen. Die [vollständige Liste der Ereignisse](api/overview/events_overview.md) enthält weitere Details.

In ***Richtext.vue*** können Sie die Methode `mounted()` aktualisieren, um Ereignisse zu behandeln:

~~~html {} title="Richtext.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.editor = new Richtext(this.$refs.cont, {});

        this.editor.api.on("print", () => {
            console.log("Das Dokument wird gedruckt");
        });
    },

    unmounted() {
        this.editor.destructor();
    }
}
</script>

// ...
~~~

Starten Sie nun die App, und Sie sehen RichText mit Ihren Daten auf der Seite.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

So kann DHTMLX RichText in Vue integriert werden. Passen Sie den Code gerne an Ihre Bedürfnisse an. Für ein fortgeschritteneres Beispiel schauen Sie auf [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo) vorbei.
