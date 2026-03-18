---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: Узнайте, как использовать DHTMLX RichText с Vue — примеры кода, руководства и справочник API.
---

# Интеграция с Vue

:::tip[Совет]
Предполагается, что вы знаете основы [**Vue**](https://vuejs.org/). Если нужно вспомнить — загляните в [**документацию Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText работает с **Vue**. Готовые примеры — в репозитории [**на GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Создание проекта {#creating-a-project}

:::info[Информация]
Сначала установите [**Node.js**](https://nodejs.org/en/).
:::

Создайте проект **Vue**:

~~~json
npm create vue@latest
~~~

Эта команда устанавливает и запускает `create-vue` — официальный инструмент для создания Vue-проектов. Подробнее — в [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Назовём проект **my-vue-richtext-app**.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в папку проекта:

~~~json
cd my-vue-richtext-app
~~~

Установите зависимости и запустите dev-сервер. Через [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // или yarn dev
~~~

Или через [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение откроется на localhost, например `http://localhost:3000`.

## Подключение RichText {#creating-richtext}

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет RichText**](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в README. Пробная версия работает 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Создайте файл ***Richtext.vue*** в папке ***src/components/***.

#### Импорт исходных файлов {#import-source-files}

Откройте ***Richtext.vue*** и импортируйте RichText. Путь зависит от версии:

- PRO-версия из локальной папки:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Пробная версия:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

В этом гайде используется **пробная** версия.

#### Создание контейнера и инициализация {#setting-containers-and-adding-richtext}

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    mounted() {
        // инициализируем компонент RichText
        this.editor = new Richtext(this.$refs.richtext_container, {});
    },

    unmounted() {
        this.editor.destructor(); // уничтожаем экземпляр RichText
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="richtext_container" class="widget"></div>
    </div>
</template>
~~~

#### Стили {#adding-styles}

Добавьте стили в главный CSS-файл проекта:

~~~css title="main.css"
/* стили для начальной страницы */
html,
body,
#app { /* убедитесь, что используете корневой контейнер #app */
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

Создайте ***data.js*** в папке ***src/***:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Откройте ***App.vue***, импортируйте данные и передайте их в `<RichText/>` через **props**:

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

Перейдите в ***Richtext.vue*** и передайте **props** в конфигурацию RichText:

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

Можно также загрузить данные через [`setValue()`](api/methods/set-value.md) внутри `mounted()`:

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

Компонент готов. При добавлении на страницу RichText инициализируется с данными. Полный список свойств — в [документации API](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Каждое действие пользователя в RichText вызывает событие. [Полный список событий](api/overview/events_overview.md).

Откройте ***Richtext.vue*** и дополните `mounted()`:

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

После этого можно запустить приложение и увидеть RichText с данными на странице.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Готово. Финальный расширенный пример — на [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).
