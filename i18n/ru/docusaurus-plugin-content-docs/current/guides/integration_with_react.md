---
sidebar_label: Интеграция с React
title: Интеграция с React
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об интеграции с React. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с React

:::tip[Совет]
Перед прочтением этой документации рекомендуем ознакомиться с основными концепциями и паттернами [**React**](https://react.dev). Для повторения материала обратитесь к [**документации React**](https://react.dev/learn).
:::

DHTMLX RichText совместим с **React**. Мы подготовили примеры кода использования DHTMLX RichText с **React**. Подробнее см. соответствующий [**пример на GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Создание проекта {#creating-a-project}

:::info[Информация]
Перед созданием нового проекта установите [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Вы можете создать базовый проект **React** или использовать **React с Vite**. Назовём проект **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Установка зависимостей {#installation-of-dependencies}

Перейдите в папку созданного приложения:

~~~json
cd my-react-richtext-app
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

Создайте React-компонент для добавления RichText в приложение. Создайте новый файл в директории ***src/*** и назовите его ***Richtext.jsx***.

#### Импорт файлов {#importing-source-files}

Откройте файл ***Richtext.jsx*** и импортируйте файлы RichText. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет RichText из локальной папки, пути импорта выглядят следующим образом:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- если вы используете пробную версию RichText, укажите следующие пути:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

В этом руководстве показана настройка **пробной** версии RichText.

#### Настройка контейнеров и добавление Richtext {#setting-containers-and-adding-richtext}

Чтобы отобразить RichText на странице, создайте контейнер для него и инициализируйте компонент с помощью соответствующих конструкторов:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // подключение стилей RichText

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // инициализация контейнера для RichText

    useEffect(() => {
        // инициализация компонента RichText
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // уничтожение RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Добавление стилей {#adding-styles}

Для корректного отображения RichText укажите необходимые стили для RichText и его контейнера в главном CSS-файле проекта:

~~~css title="index.css"
/* стили начальной страницы */
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

Чтобы добавить данные в RichText, подготовьте набор данных. Создайте файл ***data.js*** в директории ***src/*** и добавьте в него данные:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Затем откройте файл ***App.js***, импортируйте данные и передайте их в созданный компонент `<RichText/>` в виде **props**:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Перейдите в файл ***Richtext.jsx*** и примените переданные **props** к объекту конфигурации RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // применение значения
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

Также можно использовать метод [`setValue()`](api/methods/set-value.md) внутри метода `useEffect()` в React для загрузки данных в RichText:

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

Компонент RichText готов к использованию. После добавления элемента на страницу RichText инициализируется с данными. При необходимости можно задать дополнительные параметры конфигурации. Полный список доступных свойств см. в [документации API RichText](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в RichText, возникает событие. Вы можете использовать события для отслеживания действий и выполнения нужного кода. Полный список событий — в [обзоре событий](api/overview/events_overview.md).

Откройте файл ***Richtext.jsx*** и дополните метод `useEffect()` следующим образом:

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

После этого запустите приложение, чтобы увидеть RichText с загруженными данными на странице.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Теперь вы знаете, как интегрировать DHTMLX RichText с React. Вы можете адаптировать код под свои требования. Финальный расширенный пример находится на [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).
