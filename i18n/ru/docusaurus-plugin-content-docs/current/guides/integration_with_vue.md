---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об интеграции с Vue. Изучайте руководства разработчика и справочник АПИ, смотрите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с Vue

:::tip[Совет]
Убедитесь, что вы знакомы с базовыми концепциями и паттернами [Vue](https://vuejs.org/). Для повторения материала обратитесь к [документации Vue 3](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText работает с Vue. Полный пример кода доступен в [демо на GitHub](https://github.com/DHTMLX/vue-richtext-demo).

## Создание проекта

:::info[Информация]
Перед созданием нового проекта установите [Node.js](https://nodejs.org/en/).
:::

Создайте проект Vue с помощью официального инструмента scaffolding:

~~~bash
npm create vue@latest
~~~

Команда устанавливает и запускает `create-vue`. Когда scaffolder запросит имя проекта, введите *my-vue-richtext-app*. Подробнее см. в разделе [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

### Установка зависимостей

Перейдите в директорию приложения:

~~~bash
cd my-vue-richtext-app
~~~

Установите зависимости и запустите сервер разработки с помощью пакетного менеджера.

Для [yarn](https://yarnpkg.com/) выполните:

~~~bash
yarn
yarn dev
~~~

Для [npm](https://www.npmjs.com/) выполните:

~~~bash
npm install
npm run dev
~~~

Приложение запустится на localhost (например, `http://localhost:3000`).

## Создание RichText

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [ознакомительный пакет RichText](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в файле README. Ознакомительная лицензия действительна 30 дней.

### Шаг 2. Создание компонента

Создайте компонент Vue для добавления RichText в приложение. В директории *src/components/* создайте новый файл *Richtext.vue*.

#### Импорт исходных файлов

Откройте *Richtext.vue* и импортируйте исходные файлы RichText.

Для PRO-версии, установленной из локальной папки, используйте:

~~~html title="Richtext.vue"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

Для ознакомительной версии используйте:

~~~html title="Richtext.vue"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

В этом руководстве используется ознакомительная версия RichText.

#### Задание контейнера и инициализация RichText

Задайте элемент-контейнер для RichText и инициализируйте компонент с помощью конструктора `Richtext` внутри `mounted()`. Вызовите метод [`destructor()`](api/methods/destructor.md) внутри `unmounted()`, чтобы удалить RichText:

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

#### Добавление стилей

Добавьте стили для RichText и его контейнера в основной CSS-файл проекта:

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

#### Загрузка данных

Подготовьте данные для RichText. Создайте файл *data.js* в директории *src/*:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Откройте *App.vue*, импортируйте данные и инициализируйте их через метод `data()`. Передайте значение в компонент `<RichText/>` в виде пропа:

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

Откройте *Richtext.vue* и передайте значение пропа в конфигурацию RichText:

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

Альтернативно, вызовите метод [`setValue()`](api/methods/set-value.md) внутри `mounted()` для загрузки данных в RichText:

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

Компонент RichText готов к использованию. Vue отрисовывает редактор с данными, когда элемент `<RichText/>` монтируется. Полный список параметров конфигурации см. в [обзоре АПИ RichText](api/overview/main_overview.md).

#### Обработка событий

RichText генерирует события при действиях пользователя. Подпишитесь на события с помощью метода [`api.on()`](api/internal/on.md), чтобы реагировать на ввод пользователя. См. [полный список событий](api/overview/events_overview.md).

Откройте *Richtext.vue* и обновите хук `mounted()`. Приведённый ниже пример выводит сообщение в консоль при каждом событии [`print`](api/events/print.md):

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

Запустите приложение, чтобы увидеть RichText с данными на странице.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Теперь у вас есть рабочая интеграция RichText с Vue. Настройте код под ваши нужды. Полный пример доступен на [GitHub](https://github.com/DHTMLX/vue-richtext-demo).
