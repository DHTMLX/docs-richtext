---
sidebar_label: Toolbar Methods
title: Toolbar Methods
description: Check the list of API methods of DHTMLX Rich Text Editor enabling you to add and remove toolbar controls as well as update their configuration.
---


## `add`

Adds a new control to the toolbar

`void add(object config, number index, string parent);`


| Parameter | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| `config`  | `object` | an object with the control config                    |
| `index`   | `number` | the index of the position to place the control into  |
| `parent`  | `string` | the id of a parent control (for the *menuItem* type) |


```js 
richtext.toolbar.data.add({
    type: "button",
    value: "Count Characters",
    id: "calc"
}, 24);
```

**Related samples:** [Custom Button](https://snippet.dhtmlx.com/xlpa1tj7)

___

## `remove`

Removes a control from the toolbar

`void remove(string id);`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| `id`      | `string` | the id of the control                           |

```js 
richtext.toolbar.data.remove("undo");
```
___

## `update`

Updates configuration options of the control

`void update(string id, object new_config);`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| `id`      | `string` | the id of the control                           |
| `config`  | `object` | an object with new configuration of the control |



```js 
var icons = [
    ["bold", "fas fa-bold"],
    ["underline", "fas fa-underline"],
    ["italic", "fas fa-italic"],
    ["strike", "fas fa-strikethrough"]
];

for (var i=0; i<icons.length; i++) {
   var toolbarId = icons[i][0];
   var iconName = icons[i][1];
   richtext.toolbar.data.update(toolbarId, {icon: iconName});
}
```

**Related samples:** [Custom Icons](https://snippet.dhtmlx.com/oxu04enu)

