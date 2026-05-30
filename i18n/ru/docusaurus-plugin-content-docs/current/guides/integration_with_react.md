---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Узнайте об интеграции с React в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с React

:::tip[Совет]
Убедитесь, что вы знакомы с основными концепциями и паттернами [React](https://react.dev). Для повторения материала обратитесь к [документации React](https://react.dev/learn).
:::

DHTMLX RichText работает с React. Полный пример кода смотрите в [демо на GitHub](https://github.com/DHTMLX/react-richtext-demo).

## Создание проекта

:::info
Установите [Node.js](https://nodejs.org/en/) и (опционально) [Vite](https://vite.dev/) перед созданием нового проекта.
:::

Создайте новый проект *my-react-richtext-app* с помощью Create React App:

~~~bash
npx create-react-app my-react-richtext-app
~~~

### Установка зависимостей

Перейдите в директорию нового приложения:

~~~bash
cd my-react-richtext-app
~~~

Установите зависимости и запустите сервер разработки с помощью пакетного менеджера.

Для [yarn](https://yarnpkg.com/) выполните:

~~~bash
yarn
yarn start
~~~

Для [npm](https://www.npmjs.com/) выполните:

~~~bash
npm install
npm start
~~~

Приложение запускается на localhost (например, `http://localhost:3000`).

## Создание RichText

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Загрузите [ознакомительный пакет RichText](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в файле README. Ознакомительная лицензия действительна 30 дней.

### Шаг 2. Создание компонента

Создайте React-компонент для добавления RichText в приложение. В директории *src/* создайте новый файл *Richtext.jsx*.

#### Импорт исходных файлов

Откройте *Richtext.jsx* и импортируйте исходные файлы RichText.

Для PRO-версии, установленной из локальной папки, используйте:

~~~jsx title="Richtext.jsx"
import { Richtext } from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

Для ознакомительной версии используйте:

~~~jsx title="Richtext.jsx"
import { Richtext } from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

В этом руководстве используется ознакомительная версия RichText.

#### Настройка контейнера и инициализация RichText

Задайте элемент-контейнер для RichText и инициализируйте компонент с помощью конструктора `Richtext` внутри `useEffect()`. Вызовите метод [`destructor()`](api/methods/destructor.md) в функции очистки, чтобы удалить RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from '@dhx/trial-richtext';
import '@dhx/trial-richtext/dist/richtext.css'; // include RichText styles

export default function RichTextComponent(props) {
    let richtext_container = useRef(); // container for RichText

    useEffect(() => {
        // initialize the RichText component
        const editor = new Richtext(richtext_container.current, {});

        return () => {
            editor.destructor(); // destroy RichText
        };
    }, []);

    return  <div className="component_container">
                <div ref={richtext_container} className="widget"></div>
            </div>
}
~~~

#### Добавление стилей

Добавьте стили для RichText и его контейнера в главный CSS-файл проекта:

~~~css title="index.css"
/* base page styles */
html,
body,
#root {
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

Откройте *App.js* и импортируйте данные. Передайте значение в компонент `<RichText/>` как пропс:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Откройте *Richtext.jsx* и передайте `props.value` в конфигурацию RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // apply value
            // other configuration properties
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

Альтернативно, вызовите метод [`setValue()`](api/methods/set-value.md) внутри `useEffect()` для загрузки данных в RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext } from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // configuration properties
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

Компонент RichText готов к использованию. React отрисовывает редактор с данными при монтировании элемента `<RichText/>`. Полный список параметров конфигурации смотрите в [обзоре АПИ RichText](api/overview/main_overview.md).

#### Обработка событий

RichText генерирует события при действиях пользователя. Подпишитесь на события с помощью метода [`api.on()`](api/internal/on.md), чтобы реагировать на ввод пользователя. Смотрите [полный список событий](api/overview/events_overview.md).

Откройте *Richtext.jsx* и обновите хук `useEffect()`. Пример ниже выводит сообщение в консоль при каждом событии [`print`](api/events/print.md):

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

Запустите приложение, чтобы увидеть RichText с данными на странице.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Интеграция RichText с React готова к работе. Настройте код под свои нужды. Полный пример доступен на [GitHub](https://github.com/DHTMLX/react-richtext-demo).
