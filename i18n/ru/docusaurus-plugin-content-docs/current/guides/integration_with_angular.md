---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции с Angular в документации по DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# Интеграция с Angular

:::tip
Перед началом работы рекомендуется ознакомиться с основными идеями и паттернами **Angular**. Для быстрого ознакомления воспользуйтесь [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX RichText отлично работает с **Angular**. Доступны примеры кода, показывающие, как использовать DHTMLX RichText в проекте на **Angular**. Для подробностей посмотрите [**Example on GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Создание проекта

:::info
Перед началом нового проекта убедитесь, что установлены [**Angular CLI**](https://v17.angular.io/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать новый проект **my-angular-richtext-app** с помощью Angular CLI, выполните команду:

~~~json
ng new my-angular-richtext-app
~~~

:::note
Для простоты отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering) при создании приложения Angular!
:::

Эта команда подготовит всё необходимое, никаких дополнительных шагов по установке не требуется.

### Установка зависимостей

Перейдите в директорию нового приложения:

~~~json
cd my-angular-richtext-app
~~~

Установите зависимости и запустите сервер разработки с помощью [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение будет доступно локально (например, по адресу `http://localhost:3000`).

## Создание RichText

Далее получите исходный код DHTMLX RichText. Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [**пробную версию пакета RichText**](/how_to_start/#установка-richtext-через-npm-или-yarn) и следуйте инструкциям в файле README. Обратите внимание: пробная версия действует 30 дней.

### Шаг 2. Создание компонента

Чтобы добавить RichText в приложение, создайте новый компонент Angular. Создайте папку **richtext** в **src/app/** и добавьте новый файл **richtext.component.ts**.

#### Импорт исходных файлов

Откройте **richtext.component.ts** и импортируйте исходные файлы RichText. Пример пути импорта:

- Для PRO-версии, установленной из локальной папки:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- Для пробной версии:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

В этом руководстве показана настройка **trial** версии.

#### Задание контейнеров и инициализация Richtext

Чтобы отобразить RichText на странице, создайте контейнер и инициализируйте компонент через конструктор:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // имя шаблона, используемое в "app.component.ts" как <richtext />
    styleUrls: ["./richtext.component.css"], // подключение css-файла
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // инициализация контейнера для RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // инициализация компонента RichText
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // уничтожение RichText
    }
}
~~~

#### Добавление стилей

Чтобы RichText отображался корректно, добавьте необходимые стили. Создайте файл **richtext.component.css** в **src/app/richtext/** и добавьте следующие стили для RichText и его контейнера:

~~~css title="richtext.component.css"
/* импорт стилей RichText */
@import "@dhx/trial-richtext/dist/richtext.css";

/* стили для начальной страницы */
html,
body{
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

Чтобы загрузить данные в RichText, просто передайте набор данных. Создайте файл **data.ts** в **src/app/richtext/** и добавьте пример данных:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Далее откройте ***richtext.component.ts***. Импортируйте файл с данными и задайте свойства данных в конфигурации RichText в методе `ngOnInit()` следующим образом:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // импорт данных
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // инициализация свойства данных
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // другие свойства конфигурации 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

В качестве альтернативы можно использовать метод [`setValue()`](api/methods/set-value.md) в `ngOnInit()` для загрузки данных в RichText.

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // импорт данных
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", 
    styleUrls: ["./richtext.component.css"],
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: RichText;

    ngOnInit() {
        const { value } = getData(); // инициализация свойства данных
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // другие свойства конфигурации 
        });

        // передача данных через метод setValue()
        this._editor.setValue({ value }); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

На этом этапе компонент RichText готов. При добавлении на страницу RichText будет инициализирован с переданными данными. Вы также можете добавить любые необходимые параметры конфигурации. Полный список свойств смотрите в [RichText API docs](api/overview/main_overview.md).

#### Обработка событий

Когда в RichText происходит какое-либо действие, срабатывает событие. Вы можете подписаться на эти события и выполнять свой код. [Полный список событий](api/overview/events_overview.md) доступен в документации.

Отредактируйте файл **richtext.component.ts** и обновите метод `ngOnInit()` следующим образом:

~~~jsx {} title="richtext.component.ts"
// ...
ngOnInit() {
    this._editor = new Richtext(this.richtext_container.nativeElement, {});

    this._editor.api.on("print", () => {
        console.log("The document is printing");
    });
}

ngOnDestroy(): void {
    this._editor.destructor(); 
}
~~~

### Шаг 3. Добавление RichText в приложение

Чтобы использовать ***RichTextComponent*** в вашем приложении, откройте ***src/app/app.component.ts*** и замените стандартный код на следующий:

~~~jsx {} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<richtext/>`
})
export class AppComponent {
    name = "";
}
~~~

Теперь создайте ***app.module.ts*** в ***src/app/*** и добавьте *RichTextComponent* следующим образом:

~~~jsx {} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RichTextComponent } from "./richtext/richtext.component";

@NgModule({
    declarations: [AppComponent, RichTextComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Последнее, что нужно сделать - обновить ***src/main.ts*** следующим кодом:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Теперь вы можете запустить приложение и увидеть RichText с загруженными данными на странице.

import trial_richtext from '@site/static/img/trial_richtext.png';

<img
  src={trial_richtext}
  alt="Trial richtext"
  className="img_border"
/>

Вот и всё, что требуется для работы DHTMLX RichText с Angular. Вы можете адаптировать код под свои задачи. Полный пример доступен на [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).
