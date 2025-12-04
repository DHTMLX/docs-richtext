---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: Подробнее об интеграции с Svelte вы можете узнать в документации JavaScript-библиотеки DHTMLX RichText. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# Интеграция с Svelte

:::tip
Для этого руководства полезно знать основы **Svelte**. Если вам нужно быстро освежить знания, ознакомьтесь с [**документацией Svelte**](https://svelte.dev/).
:::

DHTMLX RichText отлично работает с **Svelte**. Существуют удобные примеры кода, показывающие, как использовать DHTMLX RichText в приложениях на Svelte. Подробнее и с примерами вы можете ознакомиться в [**примере на GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).

## Создание проекта

:::info
Перед началом убедитесь, что у вас установлены [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Есть несколько способов создать проект на **Svelte**:

- Использовать [**SvelteKit**](https://kit.svelte.dev/)

или

- Использовать **Svelte и Vite** (без SvelteKit):

~~~json
npm create vite@latest
~~~

Подробнее о способах создания проекта читайте в [этой статье](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Установка зависимостей

Назовём проект **my-svelte-richtext-app** и перейдём в его директорию:

~~~json
cd my-svelte-richtext-app
~~~

Далее установите зависимости и запустите сервер разработки с помощью вашего пакетного менеджера:

- Для [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- Для [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение теперь должно работать локально (например, по адресу `http://localhost:3000`).

## Создание RichText

Вам понадобится исходный код DHTMLX RichText. Перед следующим шагом остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [**пробную версию пакета RichText**](/how_to_start/#установка-richtext-через-npm-или-yarn) и следуйте шагам из файла README. Пробная версия работает 30 дней.

### Шаг 2. Создание компонента

Теперь создадим Svelte-компонент для RichText. В каталоге ***src/*** создайте новый файл с именем ***Richtext.svelte***.

#### Импорт исходных файлов

В ***Richtext.svelte*** импортируйте исходные файлы RichText. В зависимости от вашей версии это будет выглядеть так:

- Для локально установленной PRO-версии используйте такие пути:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
</script>
~~~

- Для пробной версии используйте такие импорты:

~~~html title="Richtext.svelte"
<script>
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css';
<script>
~~~

В этом руководстве используется **пробная** версия.

#### Настройка контейнера и добавление RichText

Чтобы отобразить RichText в вашем приложении, создайте контейнер и инициализируйте компонент с помощью конструктора:

~~~html {} title="Richtext.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

let richtext_container; // контейнер для RichText
let editor;

onMount(() => {
    // инициализация компонента RichText
    editor = new Richtext(richtext_container, {});
});

onDestroy(() => {
    editor?.destructor(); // очистка RichText
});
</script>

<div class="component_container">
    <div bind:this={richtext_container} class="widget"></div>
</div>
~~~

#### Загрузка данных

Чтобы загрузить данные в RichText, потребуется набор данных. Создайте файл ***data.js*** в каталоге ***src/*** и добавьте туда пример данных:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Затем в ***App.svelte*** импортируйте данные и передайте их в ваш компонент `<RichText/>` через пропс:

~~~html {} title="App.svelte"
<script>
import RichText from "./Richtext.svelte";
import { getData } from "./data.js";

const { value } = getData();
</script>

<RichText value={value} />
~~~

Теперь обновите ***Richtext.svelte***, чтобы использовать переданные **props** в конфигурации RichText:

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
        // другие параметры конфигурации
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

Также вы можете воспользоваться методом [`setValue()`](api/methods/set-value.md) внутри Svelte `onMount()` для загрузки данных:

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
        // другие параметры конфигурации
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

Теперь компонент RichText настроен и загрузит ваши данные при добавлении на страницу. Вы можете настроить параметры конфигурации по своему усмотрению. Для получения дополнительной информации ознакомьтесь с [документацией по API RichText](api/overview/main_overview.md).

#### Обработка событий

RichText генерирует события при различных действиях, и вы можете подписаться на них для выполнения своего кода. [Полный список событий](api/overview/events_overview.md) доступен для ознакомления.

Чтобы обрабатывать события, обновите ***Richtext.svelte*** следующим образом в методе `onMount()`:

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

### Шаг 3. Добавление RichText в приложение

Чтобы использовать компонент в вашем приложении, откройте **App.svelte** и замените содержимое на следующее:

~~~html title="App.svelte"
<script>
    import RichText from "./Richtext.svelte";
    import { getData } from "./data.js";
    
    const { value } = getData();
</script>

<RichText value={value}  />
~~~

Теперь запустите приложение, и вы увидите RichText с вашими данными на странице.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

На этом интеграция DHTMLX RichText с Svelte завершена. Вы можете адаптировать код под свои задачи. Если хотите ознакомиться с более продвинутым примером, он доступен на [**GitHub**](https://github.com/DHTMLX/svelte-richtext-demo).
