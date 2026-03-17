---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Узнайте, как использовать DHTMLX RichText с Angular — примеры кода, руководства и справочник API.
---

# Интеграция с Angular

:::tip
Предполагается, что вы знаете основы **Angular**. Если нужно вспомнить — загляните в [**документацию Angular**](https://v17.angular.io/docs).
:::

DHTMLX RichText работает с **Angular**. Готовые примеры — в репозитории [**на GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Создание проекта {#creating-a-project}

:::info
Сначала установите [**Angular CLI**](https://v17.angular.io/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте проект **my-angular-richtext-app**:

~~~json
ng new my-angular-richtext-app
~~~

:::note
Если следуете этому гайду — при создании приложения отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering).
:::

Команда установит всё необходимое автоматически.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в папку проекта:

~~~json
cd my-angular-richtext-app
~~~

Установите зависимости и запустите dev-сервер через [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение откроется на localhost, например `http://localhost:3000`.

## Подключение RichText {#creating-richtext}

Остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет RichText**](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям в README. Пробная версия работает 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Создайте папку **richtext** в **src/app/**, добавьте в неё файл **richtext.component.ts**.

#### Импорт исходных файлов {#import-source-files}

Откройте **richtext.component.ts** и импортируйте RichText. Путь зависит от версии:

- PRO-версия из локальной папки:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- Пробная версия:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

В этом гайде используется **пробная** версия.

#### Создание контейнера и инициализация {#set-containers-and-initialize-the-richtext}

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // имя тега в "app.component.ts": <richtext />
    styleUrls: ["./richtext.component.css"], // CSS-файл компонента
    template:  `<div class = "component_container">
                    <div #richtext_container class = "widget"></div>
                </div>`
})

export class RichTextComponent implements OnInit, OnDestroy {
    // контейнер для RichText
    @ViewChild("richtext_container", { static: true }) richtext_container!: ElementRef;

    private _editor!: Richtext;

    ngOnInit() {
        // инициализация RichText
        this._editor = new Richtext(this.richtext_container.nativeElement, {});
    }

    ngOnDestroy(): void {
        this._editor.destructor(); // уничтожаем экземпляр
    }
}
~~~

#### Стили {#adding-styles}

Создайте **richtext.component.css** в **src/app/richtext/**:

~~~css title="richtext.component.css"
/* стили RichText */
@import "@dhx/trial-richtext/dist/richtext.css";

/* базовые стили страницы */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* контейнер */
.component_container {
    height: 100%;
    margin: 0 auto;
}

/* виджет */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных {#loading-data}

Создайте **data.ts** в **src/app/richtext/**:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Откройте ***richtext.component.ts***, импортируйте данные и передайте их в конфигурацию в `ngOnInit()`:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // данные
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
        const { value } = getData();
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

Можно также загрузить данные через [`setValue()`](api/methods/set-value.md) внутри `ngOnInit()`:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { getData } from "./data"; // данные
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
        const { value } = getData();
        this._editor = new Richtext(this.richtext_container.nativeElement, {
            // другие свойства конфигурации
        });

        // загружаем данные через setValue()
        this._editor.setValue({ value });
    }

    ngOnDestroy(): void {
        this._editor.destructor();
    }
}
~~~

Компонент готов. При добавлении на страницу RichText инициализируется с данными. Полный список свойств — в [документации API](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Каждое действие пользователя в RichText вызывает событие. [Полный список событий](api/overview/events_overview.md).

Откройте **richtext.component.ts** и дополните `ngOnInit()`:

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

### Шаг 3. Добавление компонента в приложение {#step-3-adding-richtext-into-the-app}

Откройте ***src/app/app.component.ts*** и замените содержимое:

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

Создайте ***app.module.ts*** в ***src/app/***:

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

Откройте ***src/main.ts*** и замените содержимое:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Запустите приложение — RichText появится на странице с данными.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Готово. Финальный расширенный пример — на [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).
