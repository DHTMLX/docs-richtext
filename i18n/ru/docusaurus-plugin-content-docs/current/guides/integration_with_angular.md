---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции с Angular в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с Angular {#integration-with-angular}

:::tip[Совет]
Убедитесь, что вы знакомы с основными концепциями и паттернами Angular. Для повторения см. [документацию Angular](https://v17.angular.io/docs).
:::

DHTMLX RichText работает с Angular. Полный пример кода доступен в [демо на GitHub](https://github.com/DHTMLX/angular-richtext-demo).

## Создание проекта {#create-a-project}

:::info[Информация]
Перед созданием нового проекта установите [Angular CLI](https://v17.angular.io/cli) и [Node.js](https://nodejs.org/en/).
:::

Создайте новый проект *my-angular-richtext-app* с помощью Angular CLI:

~~~bash
ng new my-angular-richtext-app
~~~

:::note[Примечание]
Отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering), когда Angular CLI запросит выбор в процессе создания проекта.
:::

Команда устанавливает все необходимые инструменты. Никаких дополнительных команд не требуется.

### Установка зависимостей {#install-dependencies}

Перейдите в директорию нового приложения:

~~~bash
cd my-angular-richtext-app
~~~

Установите зависимости и запустите сервер разработки с помощью пакетного менеджера [yarn](https://yarnpkg.com/):

~~~bash
yarn
yarn start
~~~

Приложение запускается на localhost (например, `http://localhost:3000`).

## Создание RichText {#create-richtext}

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета {#step-1-install-the-package}

Загрузите [ознакомительный пакет RichText](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в файле README. Ознакомительная лицензия действительна 30 дней.

### Шаг 2. Создание компонента {#step-2-create-the-component}

Создайте Angular-компонент для добавления RichText в приложение. В директории *src/app/* создайте папку *richtext* и добавьте новый файл *richtext.component.ts*.

#### Импорт исходных файлов {#import-source-files}

Откройте *richtext.component.ts* и импортируйте исходные файлы RichText.

Для PRO-версии, установленной из локальной папки, используйте:

~~~jsx
import { Richtext } from 'dhx-richtext-package';
~~~

Для ознакомительной версии используйте:

~~~jsx
import { Richtext } from '@dhx/trial-richtext';
~~~

В этом руководстве используется ознакомительная версия RichText.

#### Задание контейнера и инициализация RichText {#set-the-container-and-initialize-richtext}

Задайте контейнерный элемент для RichText и инициализируйте компонент с помощью конструктора `Richtext` внутри `ngOnInit()`. Вызовите метод [`destructor()`](api/methods/destructor.md) внутри `ngOnDestroy()` для освобождения ресурсов:

~~~jsx {} title="richtext.component.ts"
import { Richtext } from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // использовать селектор "richtext" в app.component.ts как <richtext />
    styleUrls: ["./richtext.component.css"], // подключить css-файл
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // контейнер для RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // инициализировать компонент RichText
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // уничтожить RichText
    }
}
~~~

#### Добавление стилей {#add-styles}

Создайте файл *richtext.component.css* в директории *src/app/richtext/* со стилями для RichText и его контейнера:

~~~css title="richtext.component.css"
/* импортировать стили RichText */
@import "@dhx/trial-richtext/dist/richtext.css";

/* базовые стили страницы */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* контейнер RichText */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* виджет RichText */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных {#load-data}

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
import { getData } from "./data"; // импортировать данные
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
        const { value } = getData(); // извлечь значение из модуля данных
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            value
            // другие параметры конфигурации 
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
import { getData } from "./data"; // импортировать данные
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
        const { value } = getData(); // извлечь значение из модуля данных
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // другие параметры конфигурации 
        });

        // применить данные через метод setValue()
        this._editor.setValue(value); 
    }

    ngOnDestroy(): void {
        this._editor.destructor(); 
    }
}
~~~

Компонент RichText готов к использованию. Angular отображает редактор с данными при монтировании элемента `<richtext/>`. Полный список параметров конфигурации см. в [обзоре АПИ RichText](api/overview/main_overview.md).

#### Обработка событий {#handle-events}

RichText генерирует события при действиях пользователя. Подпишитесь на события с помощью метода [`api.on()`](api/internal/on.md), чтобы реагировать на ввод пользователя. См. [полный список событий](api/overview/events_overview.md).

Откройте *richtext.component.ts* и обновите метод `ngOnInit()`. В приведённом примере в консоль выводится сообщение при каждом событии [`print`](api/events/print.md):

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

### Шаг 3. Добавление RichText в приложение {#step-3-add-richtext-to-the-app}

Откройте *src/app/app.component.ts* и замените код по умолчанию селектором `<richtext/>`:

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
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Теперь у вас есть работающая интеграция RichText с Angular. Настройте код под свои нужды. Полный пример доступен на [GitHub](https://github.com/DHTMLX/angular-richtext-demo).
