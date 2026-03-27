---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об интеграции с Vue. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с Vue

:::tip[Совет]
Перед прочтением этой документации рекомендуем ознакомиться с основными концепциями и паттернами [**Vue**](https://vuejs.org/). Для повторения материала обратитесь к [**документации Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText совместим с **Vue**. Мы подготовили примеры кода использования DHTMLX RichText с **Vue 3**. Подробнее см. соответствующий [**пример на GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Создание проекта {#creating-a-project}

:::info[Информация]
Перед созданием нового проекта установите [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать проект на **Vue**, выполните следующую команду:

~~~json
npm create vue@latest
~~~

Эта команда устанавливает и запускает `create-vue` — официальный инструмент scaffolding для **Vue**. Подробности — в [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Назовём проект **my-vue-richtext-app**.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в папку приложения:

~~~json
cd my-vue-richtext-app
~~~

Установите зависимости и запустите dev server. Используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~jsx
yarn
yarn start // или yarn dev
~~~

- если вы используете [**npm**](https://www.npmjs.com/), выполните следующие команды:

~~~json
npm install
npm run dev
~~~

Приложение должно запуститься на localhost (например, `http://localhost:3000`).

## Создание RichText {#creating-richtext}

Теперь необходимо получить исходный код DHTMLX RichText. Для этого остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет RichText**](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям из файла README. Обратите внимание: пробная версия RichText доступна только 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Создайте Vue-компонент для добавления RichText в приложение. Создайте новый файл в директории ***src/components/*** и назовите его ***Richtext.vue***.

#### Импорт файлов {#import-source-files}

Откройте файл ***Richtext.vue*** и импортируйте файлы RichText. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет RichText из локальной папки, пути импорта выглядят следующим образом:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- если вы используете пробную версию RichText, укажите следующие пути:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

В этом руководстве показана настройка **пробной** версии RichText.

#### Настройка контейнеров и добавление Richtext {#setting-containers-and-adding-richtext}

Чтобы отобразить Richtext на странице, создайте контейнер для RichText и инициализируйте компонент с помощью соответствующего конструктора:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // инициализация компонента RichText
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // уничтожение RichText
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### Добавление стилей {#adding-styles}

Для корректного отображения RichText укажите необходимые стили для RichText и его контейнера в главном CSS-файле проекта:

~~~css title="main.css"
/* стили начальной страницы */
html,
body,
#app { /* убедитесь, что используется корневой контейнер #app */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили контейнера RichText */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* стили виджета RichText */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в RichText, подготовьте набор данных. Создайте файл ***data.js*** в директории ***src/*** и добавьте в него данные:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Затем откройте файл ***App.vue***, импортируйте данные и инициализируйте их через внутренний метод `data()`. После этого передайте данные в созданный компонент `<RichText/>` в виде **props**:

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

Перейдите в файл ***Richtext.vue*** и примените переданные **props** к объекту конфигурации RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // другие свойства конфигурации
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

Также можно использовать метод [`setValue()`](api/methods/set-value.md) внутри метода `mounted()` в Vue для загрузки данных в RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // другие свойства конфигурации
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

Компонент RichText готов к использованию. После добавления элемента на страницу RichText инициализируется с данными. При необходимости можно задать дополнительные параметры конфигурации. Полный список доступных свойств см. в [документации API RichText](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в RichText, возникает событие. Вы можете использовать события для отслеживания действий и выполнения нужного кода. Полный список событий — в [обзоре событий](api/overview/events_overview.md).

Откройте файл ***Richtext.vue*** и дополните метод `mounted()`:

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

После этого запустите приложение, чтобы увидеть RichText с загруженными данными на странице.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Теперь вы знаете, как интегрировать DHTMLX RichText с Vue. Вы можете адаптировать код под свои требования. Финальный расширенный пример находится на [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).
