---
sidebar_label: Toolbar Controls
title: Toolbar Controls
description: Learn how to add custom toolbar controls and configure them to your requirements using the available API properties of DHTMLX Rich Text Editor.
---

Besides using the [default](guides/customization.md#default-controls) controls of the toolbar, you can customize the toolbar by adding the following controls:

## `Button`

A simple button that can have an icon

| Properties   | Type      | Description        |
| ------------ | --------- | -----------------------------------------|
| `type`       | `string`  | the type of a button, set it to "button"   |
| `id`         | `string`  | the id of a button, auto-generated if not set       |
| `icon`       | `string`  | the name of an icon from the used icon font       |
| `hotkey`     | `string`  | the name of the hot key for a button          |
| `value`      | `string`  | the value of a button        |
| `tooltip`    | `string`  | the tooltip of a button        |
| `count`      | `number`  | the counter of a button        |
| `countColor` | `string`  | the color of a badge with number: "danger","secondary","primary","success"       |
| `items`      | `array`   | an array of nested controls. You can find the full list of all available controls [here](https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html). If the type of a nested control is not specified, the *menuItem* type will be applied by default. |
| `group`      | `string`  | defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive.       |
| `multiClick` | `boolean` | defines the behavior of the Undo/Redo buttons: <li>*true* - all the actions are reverted/re-applied one by one when the Undo/Redo button is clicked and held</li><li>*false* - one action is reverted/re-applied on each click of the Undo/Redo button</li>  |
| `view`       | `string`  | defines the look of a button: "flat","link"         |
| `color`      | `string`  | defines the color scheme of a button: "danger","secondary","primary","success"   |
| `size`       | `string`  | defines the size of a button: "small","medium"       |
| `circle`     | `boolean` | makes the corners of a button round      |
| `loading`    | `boolean` | adds a spinner into a button        |
| `hidden`     | `boolean` | defines whether a button is hidden         |
| `disabled`   | `boolean` | defines whether a button is disabled     |


```js
richtext.toolbar.data.add({
    type: "button", 
    id: "button-id",
    value: "Some value",
    icon: "icon-name"
}, 2);
```
___

## `Custom HTML`

An item that contains any custom HTML content (for example, an image, icon or other element)

| Properties | Type              | Description                                              |
| ---------- | ----------------- | -------------------------------------------------------- |
| `type`     | `string`          | the item type, set it to "customHTML"                    |
| `id`       | `string`          | the id of a an item, auto-generated if not set           |
| `html`     | `string`          | a string with HTML that should be inserted into the item |
| `css`      | `string,string[]` | adds style classes                                       |
| `hidden`   | `boolean`         | defines whether an item is hidden                        |

```js
richtext.toolbar.data.add({
	type: "customHTML", 
    id: "htmlbutton-id",
    value: "Some value",
    icon: "icon-name"
}, 2);
```
___

## `ImageButton`

A button with an image

| Properties   | Type              | Description                                                                |
| ------------ | ----------------- | -------------------------------------------------------------------------- |
| `type`       | `string`          | the type of an item, set it to "imageButton"                               |
| `id`         | `string`          | the id of a control, auto-generated if not set                             |
| `src`        | `string`          | the path to the image                                                      |
| `css`        | `string,string[]` | adds style classes to a button                                             |
| `hotkey`     | `string`          | the name of the hot key for the button                                     |
| `tooltip`    | `string`          | a tooltip for the button                                                   |
| `count`      | `number`          | a badge with a number                                                      |
| `countColor` | `string`          | the color of a badge with number: "danger","secondary","primary","success" |
| `hidden`     | `boolean`         | defines whether a button is hidden                                         |
| `disabled`   | `boolean`         | defines whether a button is disabled                                       |


```js
richtext.toolbar.data.add({
	type: "imageButton",
    count: 10,
    src: "../img/avatar.png"
}, 3);
```

___

## `SelectButton`

A button that contains a drop-down list of options

| Properties   | Type              | Description  |
|--------------|-------------------|---------------------------|
| `type`       | `string`          | the type of an item, set it to "selectButton"      |
| `id`         | `string`          | the id of a control, auto-generated if not set           |
| `value`      | `string`          | a value of the button      |
| `css`        | `string,string[]` | adds style classes to a button         |
| `icon`       | `string`          | the name of an icon from the used icon font         |
| `items`      | `array`           | an array of nested controls. You can find the full list of all available controls [here](https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html). If the type of a nested control is not specified, the *menuItem* type will be applied by default. |
| `tooltip`    | `string`          | a tooltip for the control    |
| `count`      | `number`          | a badge with a number    |
| `countColor` | `string`          | the color of a badge with number: "danger","secondary","primary","success"    |
| `hidden`     | `boolean`         | defines whether a button is hidden     |
| `disabled`   | `boolean`         | defines whether a button is disabled      |


```js
richtext.toolbar.data.add({
	id: "select_button",
    type: "selectButton",
    value: "1",
    items: [
        {
            value: "1",
            hotkey: "alt+1"
        },
        {
            value: "2",
            hotkey: "alt+2"
        },
        {
            value: "3",
            hotkey: "alt+3"
        }
    ]
}, 3);
```

## `Separator`

A horizontal (between menu options) or vertical (between toolbar controls) line separating items/groups of items from each other


| Properties | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| `type`     | `string` | the type of an item, set it to "separator"     |
| `id`       | `string` | the id of a control, auto-generated if not set |

```js
richtext.toolbar.data.add({
	type:"separator"
}, 4);
```

## `Spacer`

The item takes space on the toolbar and is used for aligning controls


| Properties | Type     | Description                                    |
|------------|----------|------------------------------------------------|
| `type`     | `string` | the type of an item, set it to "spacer"        |
| `id`       | `string` | the id of a control, auto-generated if not set |

```js
richtext.toolbar.data.add({
	type:"spacer"
}, 4);
```

