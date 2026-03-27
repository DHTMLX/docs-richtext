---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об интеграции с Svelte. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с Svelte

:::tip[Совет]
Перед прочтением этой документации рекомендуем ознакомиться с основными концепциями и паттернами **Svelte**. Для повторения материала обратитесь к [**документации Svelte**](https://svelte.dev/).
:::

DHTMLX RichText совместим с **Svelte**. Мы подготовили примеры кода использования DHTMLX RichText с **Svelte**. Подробнее см. соответствующий [**пример на GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Создание проекта {#creating-a-project}

:::info[Информация]
Перед созданием нового проекта установите [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Существует несколько способов создать проект на **Svelte**:

- можно использовать [**SvelteKit**](https://kit.svelte.dev/)

или

- можно использовать **Svelte с Vite** (без SvelteKit):

~~~json
npm create vite@latest
~~~

Подробности — в [соответствующей статье](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Установка зависимостей {#installation-of-dependencies}

Назовём проект **my-svelte-richtext-app** и перейдём в папку приложения:

~~~json
cd my-svelte-richtext-app
~~~

Установите зависимости и запустите dev server. Используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~json
yarn
yarn start
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

Создайте Svelte-компонент для добавления RichText в приложение. Создайте новый файл в директории ***src/*** и назовите его ***Richtext.svelte***.

#### Импорт файлов {#importing-source-files}

Откройте файл ***Richtext.svelte*** и импортируйте файлы RichText. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет RichText из локальной папки, пути импорта выглядят следующим образом:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- если вы используете пробную версию RichText, укажите следующие пути:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

В этом руководстве показана настройка **пробной** версии RichText.

#### Настройка контейнеров и добавление RichText {#setting-containers-and-adding-richtext}

Чтобы отобразить RichText на странице, создайте контейнер для него и инициализируйте компонент с помощью соответствующего конструктора:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // инициализация контейнера для RichText
let editor;

onMount(() => {
    // инициализация компонента RichText
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // уничтожение RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
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

Затем откройте файл ***App.svelte***, импортируйте данные и передайте их в созданный компонент `<RichText/>` в виде **props**:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Перейдите в файл ***Richtext.svelte*** и примените переданные **props** к объекту конфигурации RichText:

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

Также можно использовать метод [`setValue()`](/api/methods/set-value.md) внутри метода `onMount()` в Svelte для загрузки данных в RichText:

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

Компонент RichText готов к использованию. После добавления элемента на страницу RichText инициализируется с данными. При необходимости можно задать дополнительные параметры конфигурации. Полный список доступных свойств см. в [документации API RichText](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в RichText, возникает событие. Вы можете использовать события для отслеживания действий и выполнения нужного кода. Полный список событий — в [обзоре событий](api/overview/events_overview.md).

Откройте файл ***Richtext.svelte*** и дополните метод `onMount()` следующим образом:

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

### Шаг 3. Добавление RichText в приложение {#step-3-adding-richtext-into-the-app}

Чтобы добавить компонент в приложение, откройте файл **App.svelte** и замените код по умолчанию следующим:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";

    const { value } = getData();
</script>

<RichText value={value}  />
~~~

После этого запустите приложение, чтобы увидеть RichText с загруженными данными на странице.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Теперь вы знаете, как интегрировать DHTMLX RichText с Svelte. Вы можете адаптировать код под свои требования. Финальный расширенный пример находится на [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).
