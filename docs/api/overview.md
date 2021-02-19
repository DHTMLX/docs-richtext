---
sidebar_label: API Overview
title: API Overview
---


### Constructor


~~~js
var richtext = new dhx.Richtext("richtext_container", {
	mode:"document"
});
~~~

**Parameters**:

- an HTML container (or the ID of an HTML container)
- an object with configuration properties (check below)

### Methods


| Name                                            | Description                                        |
| ----------------------------------------------- | -------------------------------------------------- |
| [destructor](api/methods.md#destructor)         | releases occupied resources                        |
| [exitFullScreen](api/methods.md#exitfullscreen) | exits the full screen mode                         |
| [fullScreen](api/methods.md#fullscreen)         | enters the full screen mode                        |
| [getEditorAPI](api/methods.md#geteditorapi)     | returns the full list of the editor API            |
| [getValue](api/methods.md#getvalue)             | gets the content entered into the RichText editor  |
| [getStats](api/methods.md#getstats)             | returns statistics on the entered content          |
| [paint](api/methods.md#paint)                   | repaints RichText                                  |
| [setValue](api/methods.md#setvalue)             | sets the provided content into the RichText editor |
                                 

### Events Bus Methods

| Name                               | Description                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| [detach](api/events_bus.md#detach) | detaches a handler from an event (which was attached before by the `on()` method) |
| [fire](api/events_bus.md#fire)     | triggers an inner event                                                           |
| [on](api/events_bus.md#on)         | attaches a handler to an inner event of Vault                                     |


### Events

| Name                                               | Description                                            |
| -------------------------------------------------- | ------------------------------------------------------ |
| [Action](api/events.md#action)                     | fires on any action in the editor                      |
| [Change](api/events.md#change)                     | fires on any change in the editor                      |
| [selectionChange](api/events.md#selectionchange)   | fires on change of selection by a user                 |
| [selectionRefresh](api/events.md#selectionrefresh) | fires on automatic returning of cursor into the editor |



### Properties

| Name                                             | Description                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| [customStats](api/properties.md#customstats)     | defines the logic of displaying custom statistics                      |
| [mode](api/properties.md#mode)                   | the working mode of the RichText editor                                |
| [toolbarBlocks](api/properties.md#toolbarblocks) | specifies blocks of buttons that will be shown in the Richtext toolbar |


### Editor API Methods

```
var EditorAPI = richtext.getEditorAPI();
```

| Name                                                   | Description                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| [add](api/editor_api_methods.md#add)                   | adds a new text into the editor                                          |
| [getModel](api/editor_api_methods.md#getmodel)         | returns the data model of the entered text in the JSON format            |
| [getPosition](api/editor_api_methods.md#getposition)   | returns the position of text selection relative to the browser window    |
| [getSelection](api/editor_api_methods.md#getselection) | returns the position of text selection relative to all other text        |
| [remove](api/editor_api_methods.md#remove)             | removes a selected text                                                  |
| [setModel](api/editor_api_methods.md#setmodel)         | sets a structured text with styles (a data model as JSON) for the editor |
| [setSelection](api/editor_api_methods.md#setselection) | applies selection to the specified text position                         |
| [update](api/editor_api_methods.md#update)             | modifies the entered text                                                |