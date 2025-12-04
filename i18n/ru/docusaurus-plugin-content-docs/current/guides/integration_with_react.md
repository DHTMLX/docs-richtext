---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Ознакомьтесь с интеграцией с React в документации по JavaScript-библиотеке DHTMLX RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# Интеграция с React

:::tip
Перед началом работы с этим руководством рекомендуется иметь некоторый опыт работы с [**React**](https://react.dev). Если вам нужно быстро освежить знания, ознакомьтесь с [**документацией React**](https://react.dev/learn).
:::

DHTMLX RichText отлично работает с **React**. В документации представлены примеры кода, демонстрирующие использование DHTMLX RichText в приложениях на React. Более подробную информацию вы найдете в [**примере на GitHub**](https://github.com/DHTMLX/react-richtext-demo).

## Создание проекта

:::info
Перед созданием нового проекта убедитесь, что у вас установлены [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Вы можете создать базовый проект на **React** или использовать **React с Vite**. В этом примере проект называется **my-react-richtext-app**:

~~~json
npx create-react-app my-react-richtext-app
~~~

### Установка зависимостей

Перейдите в папку с новым приложением:

~~~json
cd my-react-richtext-app
~~~

Далее установите зависимости и запустите сервер разработки, используя предпочитаемый пакетный менеджер:

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

Приложение будет доступно по адресу localhost (например, `http://localhost:3000`).

## Создание RichText

Теперь пришло время добавить код DHTMLX RichText. Сначала остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [**пробную версию пакета RichText**](/how_to_start/#установка-richtext-через-npm-или-yarn) и следуйте инструкциям в файле README. Пробная версия RichText доступна в течение 30 дней.

### Шаг 2. Создание компонента

Далее создайте React-компонент для добавления RichText в ваше приложение. В директории ***src/*** создайте новый файл с именем ***Richtext.jsx***.

#### Импорт исходных файлов

Откройте ***Richtext.jsx*** и импортируйте файлы RichText. Обратите внимание:

- Если у вас PRO-версия и вы устанавливаете RichText из локальной папки, ваши импорты должны выглядеть так:

~~~jsx title="Richtext.jsx"
import { Richtext} from 'dhx-richtext-package';
import 'dhx-richtext-package/dist/richtext.css';
~~~

- Для пробной версии используйте такие импорты:

~~~jsx title="Richtext.jsx"
import { Richtext} from '@dhx/trial-richtext';
import "@dhx/trial-richtext/dist/richtext.css";
~~~

В данном руководстве для демонстрации используется **пробная** версия.

#### Настройка контейнера и добавление Richtext

Чтобы вывести RichText на страницу, создайте контейнер и инициализируйте компонент с помощью его конструктора:

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

#### Добавление стилей

Для корректного отображения RichText потребуется добавить немного CSS. Обновите основной CSS-файл следующими стилями:

~~~css title="index.css"
/* стили для начальной страницы */
html,
body,
#root {
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

Чтобы загрузить данные в RichText, подготовьте набор данных. Создайте файл ***data.js*** в папке ***src/*** и добавьте следующий контент:

~~~jsx {} title="data.js"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Далее откройте ***App.js*** и импортируйте данные. Передайте их вашему компоненту `<RichText/>` как **prop**:

~~~jsx {2,5-6} title="App.js"
import RichText from "./Richtext";
import { getData } from "./data";

function App() {
    const { value } = getData();
    return <RichText value={value} />;
}

export default App;
~~~

Теперь в ***Richtext.jsx*** используйте полученный **prop** в конфигурации RichText:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            value: props.value, // установка значения
            // другие параметры конфигурации
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

Если нужно, вы также можете использовать метод [`setValue()`](api/methods/set-value.md) внутри `useEffect()` для загрузки данных:

~~~jsx {} title="Richtext.jsx"
import { useEffect, useRef } from "react";
import { Richtext} from "@dhx/trial-richtext";
import "@dhx/trial-richtext/dist/richtext.css";

export default function RichTextComponent(props) {
    let richtext_container = useRef();

    let value = props.value;

    useEffect(() => {
        const editor = new Richtext(richtext_container.current, {
            // параметры конфигурации
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

На этом этапе компонент RichText готов. При рендеринге будет отображаться редактор RichText с вашими данными. Вы можете изменить конфигурацию по своему усмотрению. Полный список доступных опций смотрите в [документации по API RichText](api/overview/main_overview.md).

#### Обработка событий

RichText генерирует события при взаимодействии пользователя. Вы можете использовать эти события для запуска собственного кода. [Полный список событий](api/overview/events_overview.md) доступен в документации.

Чтобы обработать событие, обновите ***Richtext.jsx*** следующим образом:

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

Теперь вы можете запустить приложение и увидеть RichText с вашими данными на странице.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

На этом интеграция DHTMLX RichText с React завершена. Вы можете адаптировать код под свои задачи. Для более продвинутого примера обратитесь к [**GitHub**](https://github.com/DHTMLX/react-richtext-demo).
