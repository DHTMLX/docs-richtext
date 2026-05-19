---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции с Angular в документации JavaScript-библиотеки DHTMLX RichText. Изучите руководства разработчика и справочник АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с Angular

:::tip[Совет]
Убедитесь, что вы знакомы с основными концепциями и паттернами Angular. Для повторения материала обратитесь к [документации Angular](https://v17.angular.io/docs).
:::

DHTMLX RichText работает с Angular. Полный пример кода доступен в [демо на GitHub](https://github.com/DHTMLX/angular-richtext-demo).

## Создание проекта

:::info[Информация]
Перед созданием нового проекта установите [Angular CLI](https://v17.angular.io/cli) и [Node.js](https://nodejs.org/en/).
:::

Создайте новый проект *my-angular-richtext-app* с помощью Angular CLI:

~~~bash
ng new my-angular-richtext-app
~~~

:::note[Примечание]
При создании проекта Angular CLI спросит о Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering) — отключите их.
:::

Команда устанавливает все необходимые инструменты. Дополнительных команд не требуется.

### Установка зависимостей

Перейдите в директорию нового приложения:

~~~bash
cd my-angular-richtext-app
~~~

Установите зависимости и запустите сервер разработки с помощью менеджера пакетов [yarn](https://yarnpkg.com/):

~~~bash
yarn
yarn start
~~~

Приложение запускается на localhost (например, `http://localhost:3000`).

## Создание RichText

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета

Скачайте [ознакомительный пакет RichText](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в файле README. Ознакомительная лицензия действительна в течение 30 дней.

### Шаг 2. Создание компонента

Создайте компонент Angular для добавления RichText в приложение. В директории *src/app/* создайте папку *richtext* и добавьте новый файл *richtext.component.ts*.

#### Импорт исходных файлов

Откройте *richtext.component.ts* и импортируйте исходные файлы RichText.

Для PRO-версии, установленной из локальной папки:

~~~jsx
import { Richtext } from 'dhx-richtext-package';
~~~

Для ознакомительной версии:

~~~jsx
import { Richtext } from '@dhx/trial-richtext';
~~~

В этом руководстве используется ознакомительная версия RichText.

#### Настройка контейнера и инициализация RichText

Задайте контейнер для RichText и инициализируйте компонент с помощью конструктора `Richtext` внутри `ngOnInit()`. Вызовите метод [`destructor()`](api/methods/destructor.md) внутри `ngOnDestroy()` для очистки:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // use the "richtext" selector in app.component.ts as <richtext />
    styleUrls: ["./richtext.component.css"], // include the css file
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // container for RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // initialize the RichText component
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // destroy RichText
    }
}
~~~

#### Добавление стилей

Создайте файл *richtext.component.css* в директории *src/app/richtext/* со стилями для RichText и его контейнера:

~~~css title="richtext.component.css"
/* import RichText styles */
@import "@dhx/trial-richtext/dist/richtext.css";

/* base page styles */
html,
body{
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

Подготовьте данные для RichText. Создайте файл *data.ts* в директории *src/app/richtext/*:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Откройте *richtext.component.ts*. Импортируйте данные и передайте свойство `value` в конфигурацию RichText внутри `ngOnInit()`:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // extract the value from the data module
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Также можно вызвать метод [`setValue()`](api/methods/set-value.md) внутри `ngOnInit()` для загрузки данных в RichText:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

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

    private _editor!: Richtext;

    ngOnInit() {
        const { value } = getData(); // extract the value from the data module
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // other configuration properties 
        });

        // apply the data via the setValue() method
        this._editor.setValue(value); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Компонент RichText готов к использованию. Angular отрисовывает редактор с данными при монтировании элемента `<richtext/>`. Полный список параметров конфигурации см. в [обзоре АПИ RichText](api/overview/main_overview.md).

#### Обработка событий

RichText генерирует события при действиях пользователя. Подпишитесь на события с помощью метода [`api.on()`](api/internal/on.md) для реакции на действия пользователя. См. [полный список событий](api/overview/events_overview.md).

Откройте *richtext.component.ts* и обновите метод `ngOnInit()`. Пример ниже выводит сообщение в консоль при каждом событии [`print`](api/events/print.md):

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

Откройте *src/app/app.component.ts* и замените код по умолчанию на селектор `<richtext/>`:

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

Создайте *src/app/app.module.ts* и объявите `RichTextComponent`:

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

Откройте *src/main.ts* и замените содержимое кодом начальной загрузки:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Запустите приложение, чтобы увидеть RichText с данными на странице.

<div className="img_border">
![RichText initialization](../assets/trial_richtext.png)
</div>

Теперь у вас есть рабочая интеграция RichText с Angular. Настройте код под свои нужды. Полный пример доступен на [GitHub](https://github.com/DHTMLX/angular-richtext-demo).
