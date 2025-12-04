---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: Вы можете узнать об интеграции с Vue в документации по DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# Интеграция с Vue

:::tip
Перед тем как приступить к работе с этой документацией, полезно иметь базовые знания о [**Vue**](https://vuejs.org/). Если вам нужно освежить знания, ознакомьтесь с [**документацией по Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX RichText отлично работает с **Vue**. Доступны примеры кода, демонстрирующие, как использовать DHTMLX RichText с **Vue 3**. Подробнее смотрите в [**примере на GitHub**](https://github.com/DHTMLX/vue-richtext-demo).

## Создание проекта

:::info
Перед началом работы убедитесь, что установлен [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать проект на **Vue**, выполните следующую команду:

~~~json
npm create vue@latest
~~~

Эта команда запускает `create-vue`, официальный инструмент для создания проектов на **Vue**. Подробнее читайте в [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

В этом руководстве проект будет называться **my-vue-richtext-app**.

### Установка зависимостей

Перейдите в директорию приложения:

~~~json
cd my-vue-richtext-app
~~~

Установите зависимости и запустите сервер разработки с помощью вашего любимого пакетного менеджера:

- Для [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // или yarn dev
~~~

- Для [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение будет доступно на вашем localhost (например, `http://localhost:3000`).

## Создание RichText

Далее потребуется исходный код DHTMLX RichText. Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [**пробную версию пакета RichText**](/how_to_start/#установка-richtext-через-npm-или-yarn) и следуйте инструкциям в файле README. Пробная версия доступна на 30 дней.

### Шаг 2. Создание компонента

Создайте компонент Vue для добавления RichText в ваше приложение. Создайте новый файл в директории ***src/components/*** и назовите его ***Richtext.vue***.

#### Импорт исходных файлов

Откройте ***Richtext.vue*** и импортируйте исходные файлы RichText. Обратите внимание:

- Если вы используете PRO-версию и устанавливали RichText из локальной папки, ваши импорты будут выглядеть так:

~~~html title="Richtext.vue"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Для пробной версии импорты такие:

~~~html title="Richtext.vue"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

В этом руководстве показана настройка **пробной** версии RichText.

#### Настройка контейнера и добавление Richtext

Чтобы отобразить RichText на странице, создайте контейнер и инициализируйте компонент через его конструктор:

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

#### Добавление стилей

Чтобы RichText отображался корректно, добавьте основные стили для RichText и его контейнера в основной CSS-файл:

~~~css title="main.css"
/* стили для начальной страницы */
html,
body,
#app { /* убедитесь, что используете #app как корневой контейнер */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнера RichText */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* стили для виджета RichText */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных

Чтобы загрузить данные в RichText, создайте набор данных. Например, добавьте файл ***data.js*** в директорию ***src/*** со следующим содержимым:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Затем в ***App.vue*** импортируйте данные и инициализируйте их с помощью метода `data()`. Передайте данные в компонент `<RichText/>` через **props**:

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

Теперь вернитесь в ***Richtext.vue*** и используйте **props** в конфигурации RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            value: this.value,
            // другие параметры конфигурации
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

В качестве альтернативы, вы можете использовать метод [`setValue()`](api/methods/set-value.md) внутри хука `mounted()` для загрузки данных в RichText:

~~~html {} title="Richtext.vue"
<script>
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default {
    props: ["value"],

    mounted() {
        this.editor = new Richtext(this.$refs.richtext_container, {
            // другие параметры конфигурации
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

На этом этапе компонент RichText готов к использованию. При добавлении на страницу он инициализирует RichText с вашими данными. Вы можете гибко настраивать параметры. Полный список доступных свойств смотрите в [документации по API RichText](api/overview/main_overview.md).

#### Обработка событий

При действиях в RichText срабатывают события. Это полезно для запуска пользовательского кода в ответ на действия. [Полный список событий](api/overview/events_overview.md) доступен в документации.

В ***Richtext.vue*** вы можете обновить метод `mounted()` для обработки событий:

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

Теперь запустите приложение, и вы увидите RichText с вашими данными на странице.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

Вот так DHTMLX RichText можно интегрировать с Vue. Не стесняйтесь адаптировать код под свои задачи. Для более продвинутого примера посмотрите [**GitHub**](https://github.com/DHTMLX/vue-richtext-demo).
