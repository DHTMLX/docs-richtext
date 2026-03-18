---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: Узнайте, как использовать DHTMLX RichText с Svelte — примеры кода, руководства и справочник API.
---

# Интеграция с Svelte

:::tip[Совет]
Предполагается, что вы знаете основы **Svelte**. Если нужно вспомнить — загляните в [**документацию Svelte**](https://svelte.dev/).
:::

DHTMLX RichText работает с **Svelte**. Готовые примеры — в репозитории [**на GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Создание проекта {#creating-a-project}

:::info[Информация]
Сначала установите [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Создать проект **Svelte** можно несколькими способами:

- через [**SvelteKit**](https://kit.svelte.dev/)

или

- через **Svelte + Vite** (без SvelteKit):

~~~json
npm create vite@latest
~~~

Подробнее — в [документации Svelte](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Установка зависимостей {#installation-of-dependencies}

Назовём проект **my-svelte-richtext-app** и перейдём в папку:

~~~json
cd my-svelte-richtext-app
~~~

Установите зависимости и запустите dev-сервер. Через [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
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

Создайте файл ***Richtext.svelte*** в папке ***src/***.

#### Импорт исходных файлов {#importing-source-files}

Откройте ***Richtext.svelte*** и импортируйте RichText. Путь зависит от версии:

- PRO-версия из локальной папки:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Пробная версия:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

В этом гайде используется **пробная** версия.

#### Создание контейнера и инициализация {#setting-containers-and-adding-richtext}

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // инициализируем контейнер для RichText
let editor;

onMount(() => {
    // инициализируем компонент RichText
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // уничтожаем экземпляр RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
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

Откройте ***App.svelte***, импортируйте данные и передайте их в `<RichText/>` через **props**:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Перейдите в ***Richtext.svelte*** и передайте **props** в конфигурацию RichText:

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
        // другие свойства конфигурации
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

Можно также загрузить данные через [`setValue()`](/api/methods/set-value.md) внутри `onMount()`:

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
        // другие свойства конфигурации
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

Компонент готов. При добавлении на страницу RichText инициализируется с данными. Полный список свойств — в [документации API](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Каждое действие пользователя в RichText вызывает событие. [Полный список событий](api/overview/events_overview.md).

Откройте ***Richtext.svelte*** и дополните `onMount()`:

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {})

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

### Шаг 3. Добавление компонента в приложение {#step-3-adding-richtext-into-the-app}

Откройте ***App.svelte*** и замените содержимое:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";

    const { value } = getData();
</script>

<RichText value={value}  />
~~~

Запустите приложение — RichText появится на странице с данными.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Готово. Финальный расширенный пример — на [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).
