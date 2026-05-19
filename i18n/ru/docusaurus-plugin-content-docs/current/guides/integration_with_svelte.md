---
sidebar_label: Интеграция со Svelte
title: Интеграция со Svelte
description: В документации библиотеки DHTMLX JavaScript RichText вы узнаете об интеграции со Svelte. Изучите руководства разработчика и справочник по API, ознакомьтесь с примерами кода и демонстрациями, а также загрузите бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# Интеграция со Svelte

:::tip[Совет]
Убедитесь, что вы знакомы с базовыми концепциями и паттернами [Svelte](https://svelte.dev/). Для повторения материала обратитесь к [документации Svelte](https://svelte.dev/docs).
:::

DHTMLX RichText работает со Svelte. Полный пример кода доступен в [демо на GitHub](https://github.com/DHTMLX/svelte-richtext-demo).

## Создание проекта

:::info[Информация]
Перед созданием нового проекта установите [Node.js](https://nodejs.org/en/) и (опционально) [Vite](https://vite.dev/).
:::

В этом руководстве используется проект Svelte на основе Vite. Для SvelteKit и других вариантов см. [руководство по проектам Svelte](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

Создайте новый проект Vite:

~~~bash
npm create vite@latest
~~~

### Установка зависимостей

Когда установщик запросит имя проекта, введите *my-svelte-richtext-app*. Затем перейдите в новый каталог:

~~~bash
cd my-svelte-richtext-app
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

Приложение запускается на localhost (например, `http://localhost:3000`).

## Создание RichText

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [пробный пакет RichText](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в файле README. Пробная лицензия действует 30 дней.

### Шаг 2. Создание компонента

Создайте компонент Svelte для добавления RichText в приложение. В каталоге *src/* создайте новый файл *Richtext.svelte*.

#### Импорт исходных файлов

Откройте *Richtext.svelte* и импортируйте исходные файлы RichText.

Для PRO-версии, установленной из локальной папки, используйте:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

Для пробной версии используйте:

~~~html title="Richtext.svelte"
<script>
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
</script>
~~~

В этом руководстве используется пробная версия RichText.

#### Задание контейнера и инициализация RichText

Задайте контейнерный элемент для RichText и инициализируйте компонент внутри `onMount()`. Вызовите метод [`destructor()`](api/methods/destructor.md) внутри `onDestroy()`, чтобы удалить RichText:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // container for RichText
let editor;

onMount(() => {
    // initialize the RichText component
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // destroy RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Добавление стилей

Добавьте стили для RichText и его контейнера в главный CSS-файл проекта (например, *src/app.css*):

~~~css title="app.css"
/* base page styles */
html,
body {
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

Подготовьте данные для RichText. Создайте файл *data.js* в каталоге *src/*:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Откройте *App.svelte*, импортируйте данные и передайте значение в компонент `<RichText/>` через проп:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Откройте *Richtext.svelte* и передайте значение пропа в конфигурацию RichText:

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
        value
        // other configuration properties
    });
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

В качестве альтернативы вызовите метод [`setValue()`](api/methods/set-value.md) внутри `onMount()`, чтобы загрузить данные в RichText:

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
        // other configuration properties
    });

    editor.setValue(value);
});

onDestroy(() => {
    editor?.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

Компонент RichText готов к использованию. Svelte отрисовывает редактор с данными при монтировании элемента `<RichText/>`. Полный список параметров конфигурации см. в [обзоре API RichText](api/overview/main_overview.md).

#### Обработка событий

RichText генерирует события при действиях пользователя. Подпишитесь на события с помощью метода [`api.on()`](api/internal/on.md), чтобы реагировать на ввод пользователя. См. [полный список событий](api/overview/events_overview.md).

Откройте *Richtext.svelte* и обновите хук `onMount()`. В приведённом ниже примере в консоль выводится сообщение при каждом событии [`print`](api/events/print.md):

~~~html {} title="Richtext.svelte"
<script>
// ...
let editor;

onMount(() => {
    editor = new Richtext(richtext_container, {});

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

Запустите приложение, чтобы увидеть RichText с данными на странице.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Теперь у вас есть рабочая интеграция RichText со Svelte. Настройте код под свои нужды. Полный пример доступен на [GitHub](https://github.com/DHTMLX/svelte-richtext-demo).
