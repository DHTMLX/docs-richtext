---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Узнайте, как использовать DHTMLX RichText с React — примеры кода, руководства и справочник API.
---

# Интеграция с React

:::tip
Предполагается, что вы знаете основы [**React**](https://react.dev). Если нужно вспомнить — загляните в [**документацию React**](https://react.dev/learn).
:::

DHTMLX RichText работает с **React**. Готовые примеры — в репозитории [**на GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Создание проекта {#creating-a-project}

:::info
Сначала установите [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте проект **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Установка зависимостей {#installation-of-dependencies}

Перейдите в папку проекта:

~~~json
cd my-react-richtext-app
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

Создайте файл ***Richtext.jsx*** в папке ***src/***.

#### Импорт исходных файлов {#importing-source-files}

Откройте ***Richtext.jsx*** и импортируйте RichText. Путь зависит от версии:

- PRO-версия из локальной папки:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- Пробная версия:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

В этом гайде используется **пробная** версия.

#### Создание контейнера и инициализация {#setting-containers-and-adding-richtext}

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // подключаем стили RichText

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // инициализируем контейнер для RichText

    useEffect(() => {
        // инициализируем компонент RichText
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // уничтожаем экземпляр RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Стили {#adding-styles}

Добавьте стили в главный CSS-файл проекта:

~~~css title="index.css"
/* стили для начальной страницы */
html,
body,
#root {
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

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Откройте ***App.js***, импортируйте данные и передайте их в `<RichText/>` через **props**:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Перейдите в ***Richtext.jsx*** и передайте **props** в конфигурацию RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // передаём значение
            // другие свойства конфигурации
        });

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

Можно также загрузить данные через [`setValue()`](api/methods/set-value.md) внутри `useEffect()`:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // свойства конфигурации
        });

        editor.setValue(value);

        return () => {
            editor.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

Компонент готов. При добавлении на страницу RichText инициализируется с данными. Полный список свойств — в [документации API](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Каждое действие пользователя в RichText вызывает событие. [Полный список событий](api/overview/events_overview.md).

Откройте ***Richtext.jsx*** и дополните `useEffect()`:

~~~jsx {} title="Richtext.jsx"
// ...
useEffect(() => {
    const editor = new Richtext(richtext_container.current, {});

    editor.api.on("print", () => {
        console.log("The document is printing");
    });

    return () => {
        editor.destructor();
    };
}, []);
// ...
~~~

После этого можно запустить приложение и увидеть RichText с данными на странице.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Готово. Финальный расширенный пример — на [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).
