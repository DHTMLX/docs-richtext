---
sidebar_label: Customization
title: Customization
description: This guide explains how to customize the DHTMLX Rich Text Editor's toolbar, reconfigure controls, and replace default icons used in the editor with custom ones.
---

You can customize the appearance and structure of toolbar, change the settings of controls and use any icon pack instead of the default one.

Icons
----------

DHTMLX Richtext uses the [Material Design](https://materialdesignicons.com/)-based icons by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on 
a page and apply icons for Toolbar controls.

For example, you can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) 
after the source files of DHTMLX Richtext as follows:

~~~html
<script type="text/javascript" src="../../codebase/richtext.js"></script>
<link rel="stylesheet" href="../../codebase/richtext.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
	integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
    crossorigin="anonymous">
~~~

**Related sample:** [Custom Icons](https://snippet.dhtmlx.com/oxu04enu)

Then you can use the name of the icon as the value of the `icon` property in the object with the control parameters for toolbar. See details below.

Controls
-------------

### Types

There are the following types of controls you can add: `button`, `customHTML`, `imageButton`, `selectButton`, `separator` and `spacer`.

#### Button

The `button` object has the following properties:

- `type` - (*string*) the type of a button, set it to "button"
- `id` - (*string*) the id of a button, auto-generated if not set
- `icon` - (*string*) the name of an icon from the used icon font
- `hotkey` - (*string*) the name of the hot key for a button
- `value` - (*string*) the value of a button
- `tooltip` - (string) the tooltip of a button
- `count` - (*number*) the counter of a button
- `countColor` - (*string*) the color of a badge with number: "danger" | "secondary" | "primary" | "success"
- `items` - (*array*) an array of nested controls. You can find the full list of all available controls [here](https://docs.dhtmlx.com/suite/menu/configuring_menu_items/). If the type of a nested control is not specified, the *menuItem* type will be applied by default.
- `group` - (*string*) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive
- `multiClick` - (*boolean*) defines the behavior of the Undo/Redo buttons: 
    - *true* - all the actions are reverted/re-applied one by one when the Undo/Redo button is clicked and held
    - *false* - one action is reverted/re-applied on each click of the Undo/Redo button
- `view` - (*string*) defines the look of a button: "flat"|"link"
- `color` - (*string*) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"
- `size` - (*string*) defines the size of a button: "small"|"medium"
- `circle` - (*boolean*) makes the corners of a button round
- `loading` - (*boolean*) adds a spinner into a button
- `hidden` - (*boolean*) defines whether a button is hidden
- `disabled` - (*boolean*) defines whether a button is disabled

#### Custom HTML

The `customHTML` object has the following properties:

- `type` - (*string*) the item type, set it to "customHTML"
- `id` - (*string*) the id of a an item, auto-generated if not set
- `html` - (*string*) a string with HTML that should be inserted into the item
- `css`	- (*string|string[]*) adds style classes
- `hidden` - (*boolean*) defines whether an item is hidden

#### ImageButton

The `imageButton` object has the following properties:

- `type` - (*string*) the type of an item, set it to "imageButton"
- `id` - (*string*) the id of a control, auto-generated if not set
- `src` - (*string*) the path to the image
- `css` - (*string|string[]*) adds style classes to a button
- `hotkey` - (*string*) the name of the hot key for the button
- `tooltip` - (*string*) a tooltip for the button
- `count` - (*number*) a badge with a number
- `countColor` - (*string*) the color of a badge with number: "danger" | "secondary" | "primary" | "success"
- `hidden` - (*boolean*) defines whether a button is hidden
- `disabled` - (*boolean*) defines whether a button is disabled

#### SelectButton

The `selectButton` object has the following properties:

- `type` - (*string*) the type of a control, set it to "selectButton"
- `id` - (*string*) the id of a control, auto-generated if not set
- `value` - (*string*) a value of the button
- `css` - (*string|string[]*) adds style classes to a button
- `icon` - (*string*) the name of an icon from the used icon font
- `items` - (*array*) an array of nested controls. You can find the full list of all available controls [here](https://docs.dhtmlx.com/suite/menu/configuring_menu_items/). If the type of a nested control is not specified, the *menuItem* type will be applied by default.
- `tooltip` - (*string*) a tooltip for the control
- `count` - (*number*) a badge with a number
- `countColor` - (*string*) the color of a badge with number: "danger" | "secondary" | "primary" | "success"
- `hidden` - (*boolean*) defines whether a button is hidden
- `disabled` - (*boolean*) defines whether a button is disabled

#### Separator

The `separator` object has the following properties:

- `type` - (*string*) the item type, set it to "separator"
- `id` - (*string*) the id of a control, auto-generated if not set

#### Spacer

The `spacer` object has the following properties:

- `type` - (*string*) the item type, set it to "spacer"
- `id` - (*string*) the id of a control, auto-generated if not set

### Work with controls

The data collection API of the `toolbar` allows you to manipulate the controls, namely to add custom controls, remove the controls you don't need, or update the controls, e.g. change their icons.

#### Adding controls

To add a new control, apply the `richtext.{name}.data.add()` method. It takes the parameters below:

- `config` - (*object*) an object with the control config
- `index` - (*number*) the index of the position to place the control into
- `parent` - (*string*) the id of a parent control (for the *menuItem* type)

For a button:

~~~js
richtext.toolbar.data.add({
	type: "button", 
    id: "button-id",
    value: "Some value",
    icon: "icon-name"
}, 2);
~~~

For a custom button:

~~~js
richtext.toolbar.data.add({
	type: "customHTML", 
    id: "htmlbutton-id",
    value: "Some value",
    icon: "icon-name"
}, 2);
~~~

#### Updating controls

You can change the icon of the control and its other config options via the   
`richtext.{name}.data.update()` method. It takes two parameters:

- the id of the control
- an object with new configuration of the control

~~~js
richtext.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

#### Deleting controls

To remove a control, make use of the `richtext.{name}.data.remove()` method. Pass the id of the control that should be removed to the method:

~~~js
richtext.toolbar.data.remove("control-id");
~~~

Below you will find detailed examples.

Toolbar 
---------

### Default controls

The [default toolbar](overview.md#toolbar-structure) contains the following blocks of controls:

- the **Undo** block 
    - the *Undo* button (id:"undo")
    - the *Redo* button (id:"redo")    
- the **Style** block
    - the *Font family* button (id:"font-family")
    - the *Font size* button (id:"font-size")
    - the *Style* button (id:"style")
        - the *Base text* option (id:"style-p")
        - the *Heading 1* option (id:"style-h1")
        - the *Heading 2* option (id:"style-h2")
        - the *Heading 3* option (id:"style-h3")
        - the *Heading 4* option (id:"style-h4")
        - the *Heading 5* option (id:"style-h5")
        - the *Heading 6* option (id:"style-h6")     
    - the *Block quote* button (id:"blockquote")
- the **Decoration** block 
    - the *Bold* button (id:"bold")
    - the *Italic* button (id:"italic")
    - the *Strike* button (id:"strike")
    - the *Underline* button (id:"underline")
- the **Colors** block
    - the *Text color* button (id:"color") 
    - the *Background color* button (id:"background")
- the **Align** block
    - the *Align left* button (id: "align-left")
    - the *Align center* button (id: "align-center")
    - the *Align right* button (id: "align-right")
- the **Link** block
    - the *Link* button (id:"link")

    
It is also possible to add the blocks enumerated below to get the full toolbar:

- the **Clear format** block
	- the *Clear format* button (id:"clear-style")
- the **Full screen** block
	- the *Fullscreen* button (id:"fullscreen")
- the **Statistics** block
	- the **Statistics** button (id:"stats")
        
    
### Adding controls

In the example below a new button named **Count Characters** is added into the toolbar:

![Custom Toolbar Button](./../assets/custom_toolbar_button.png)

~~~js
richtext.toolbar.data.add({
	type: "button",
    value: "Count Characters",
    id: "calc"
}, 24);
~~~

**Related sample:** [Custom Button](https://snippet.dhtmlx.com/xlpa1tj7)


### Updating controls


In the example below the default icons of the buttons of the **Decoration** block are changed to Font Awesome ones:

![Custom Toolbar Icons](./../assets/custom_toolbar_icons.png)

~~~js
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
~~~

**Related sample:** [Custom Icons](https://snippet.dhtmlx.com/oxu04enu)

### Deleting controls

In the example below the Undo button is removed from the toolbar:

~~~js
richtext.toolbar.data.remove("undo");
~~~

