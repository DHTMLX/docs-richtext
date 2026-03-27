---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать об интеграции с Angular. Изучайте руководства разработчика и справочник API, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# Интеграция с Angular

:::tip[Совет]
Перед прочтением этой документации рекомендуем ознакомиться с основными концепциями и паттернами **Angular**. Для повторения материала обратитесь к [**документации Angular**](https://v17.angular.io/docs).
:::

DHTMLX RichText совместим с **Angular**. Мы подготовили примеры кода использования DHTMLX RichText с **Angular**. Подробнее см. соответствующий [**пример на GitHub**](https://github.com/DHTMLX/angular-richtext-demo).

## Создание проекта {#creating-a-project}

:::info[Информация]
Перед созданием нового проекта установите [**Angular CLI**](https://v17.angular.io/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте новый проект **my-angular-richtext-app** с помощью Angular CLI. Выполните следующую команду:

~~~json
ng new my-angular-richtext-app
~~~

:::note[Примечание]
Если вы следуете этому руководству, отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering) при создании нового Angular-приложения!
:::

Команда выше устанавливает все необходимые инструменты, поэтому дополнительных команд выполнять не требуется.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в папку созданного приложения:

~~~json
cd my-angular-richtext-app
~~~

Установите зависимости и запустите dev server. Для этого используйте менеджер пакетов [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение должно запуститься на localhost (например, `http://localhost:3000`).

## Создание RichText {#creating-richtext}

Теперь необходимо получить исходный код DHTMLX RichText. Для этого остановите приложение и установите пакет RichText.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**пробный пакет RichText**](/how_to_start/#installing-richtext-via-npm-or-yarn) и следуйте инструкциям из файла README. Обратите внимание: пробная версия RichText доступна только 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Создайте Angular-компонент для добавления RichText в приложение. Создайте папку **richtext** в директории **src/app/**, добавьте в неё новый файл и назовите его **richtext.component.ts**.

#### Импорт файлов {#import-source-files}

Откройте файл **richtext.component.ts** и импортируйте файлы RichText. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет RichText из локальной папки, путь импорта выглядит следующим образом:

~~~jsx
import { Richtext} from 'dhx-richtext-package';
~~~

- если вы используете пробную версию RichText, укажите следующий путь:

~~~jsx
import { Richtext} from '@dhx/trial-richtext';
~~~

В этом руководстве показана настройка **пробной** версии RichText.

#### Настройка контейнеров и инициализация Richtext {#set-containers-and-initialize-the-richtext}

Чтобы отобразить RichText на странице, создайте контейнер для него и инициализируйте компонент с помощью соответствующего конструктора:

~~~jsx {} title="richtext.component.ts"
import { Richtext} from '@dhx/trial-richtext';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "richtext", // имя шаблона, используемое в файле "app.component.ts" как <richtext />
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

#### Добавление стилей {#adding-styles}

Для корректного отображения RichText необходимо задать соответствующие стили. Создайте файл **richtext.component.css** в директории **src/app/richtext/** и укажите нужные стили для RichText и его контейнера:

~~~css title="richtext.component.css"
/* импорт стилей RichText */
@import "@dhx/trial-richtext/dist/richtext.css";

/* стили начальной страницы */
html,
body{
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

Чтобы добавить данные в RichText, подготовьте набор данных. Создайте файл **data.ts** в директории **src/app/richtext/** и добавьте в него данные:

~~~jsx {} title="data.ts"
export function getData() {
  const value = `
    <h2>RichText 2.0</h2>
    <p>Repository at <a href="https://git.webix.io/xbs/richtext">https://git.webix.io/xbs/richtext</a></p>
    <p><img src="https://placecats.com/500/300" style="width:500px;height:300px;"></p>`;
  return { value };
}
~~~

Затем откройте файл ***richtext.component.ts***, импортируйте файл с данными и передайте нужные свойства данных в объект конфигурации RichText внутри метода `ngOnInit()`, как показано ниже:

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

Также можно использовать метод [`setValue()`](api/methods/set-value.md) внутри метода `ngOnInit()` в Angular для загрузки данных в RichText.

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

Компонент RichText готов к использованию. После добавления элемента на страницу RichText инициализируется с данными. При необходимости можно задать дополнительные параметры конфигурации. Полный список доступных свойств см. в [документации API RichText](api/overview/main_overview.md).

#### Обработка событий {#handling-events}

Когда пользователь выполняет какое-либо действие в RichText, возникает событие. Вы можете использовать события для отслеживания действий и выполнения нужного кода. Полный список событий — в [обзоре событий](api/overview/events_overview.md).

Откройте файл **richtext.component.ts** и дополните метод `ngOnInit()` следующим образом:

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

### Шаг 3. Добавление RichText в приложение {#step-3-adding-richtext-into-the-app}

Чтобы добавить компонент ***RichTextComponent*** в приложение, откройте файл ***src/app/app.component.ts*** и замените код по умолчанию следующим:

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

Затем создайте файл ***app.module.ts*** в директории ***src/app/*** и укажите *RichTextComponent* следующим образом:

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

Последний шаг — откройте файл ***src/main.ts*** и замените существующий код следующим:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

После этого запустите приложение, чтобы увидеть RichText с загруженными данными на странице.

<div className="img_border">
![Инициализация RichText](../assets/trial_richtext.png)
</div>

Теперь вы знаете, как интегрировать DHTMLX RichText с Angular. Вы можете адаптировать код под свои требования. Финальный расширенный пример находится на [**GitHub**](https://github.com/DHTMLX/angular-richtext-demo).
