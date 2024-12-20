---
sidebar_label: What's new
title: What's new
description: "Get a full picture of the DHTMLX Rich Text Editor versioning: its updates and patch versions, providing the information on implemented functionalities, improvements, and bug fixes."
---

## Version 1.2.3

Released on December 5, 2024

### Fixes

- The issue with the local trial package during import to frameworks

## Version 1.2

Released on July 10, 2024

### New functionality

- The [`defaultStyles`](api/properties.md#defaultstyles) property allows you to change the default values of the toolbar selection controls

### Fixes

- Add cross widget localization
- Incorrect HTML parsing
- Retyping the text that contains a link invokes an error
- When changing the font, the previous character appears before the text

## Version 1.1.8

Released on February 1, 2024

### Fixes

- The appearance of the "link" control settings
- The conversion of color formats. Now colors are converted from HEX to RGB during HTML serialization

## Version 1.1.7

Released on August 31, 2023

### Fixes

- Now you can select several text fragments with different fonts and sizes and set the desired font and size for them

## Version 1.1.6

Released on February 13, 2022

### Fixes

- Fix the issue with special characters

## Version 1.1.5

Released on February 13, 2022

### Fixes

- Fix the issue with the [`fullScreen()`](api/methods.md#fullscreen) method

## Version 1.1.4

Released on January 17, 2022

### Fixes

- Fix links to documentation in the [RichText samples](https://snippet.dhtmlx.com/pdh5buvg?tag=richtext)

## Version 1.1.3

Released on October 11, 2021

### Fixes

- Fix the issue with serialization of the content which is in the "Markdown" format. Now the spaces are removed before and after the stylized string.
- Fix the issue with styles of Richtext when using it together with Suite
- Now it is possible to localize the *text* and *link* input labels of the **Link** button of the toolbar

## Version 1.1.2

Released on February 13, 2020

### Fixes

- Issues with interaction between the HTML form and controls of Toolbar

## Version 1.1.1

Released on March 6, 2019

### Fixes

- Fix the bug with Toolbar items
- Fix z-index for the full screen mode

## Version 1.1

Released on February 27, 2019

### New functionality

- [API for working with text in the editor](guides/working_with_richtext.md#editor-api) 
- [Advanced statistics](guides/working_with_richtext.md#statistics)
- Ability to show [custom statistics](guides/working_with_richtext.md#custom-statistics)
- Block quote and Statistics [toolbar controls](guides/configuration.md#toolbar) 

### Updates

- Ability to [return content in the plain "text" format](api/methods.md#getvalue) 

### Fixes

- Redo functionality
- Spellchecking is disabled
- Support for Asian languages

## Version 1.0.1

Released on December 19, 2018

### Fixes

- Incorrect undo behavior with the setValue method
- Issue with the link background on switching between links 
- Issue with toolbar modifiers after removing a letter

## Version 1.0

Released on December 13, 2018

### Initial functionality

- Basic operations for real-time text editing 
- Two [working modes](guides/configuration.md#working-modes): "classic" and "document"
- Data [parsing](guides/loading_data.md) and [serialization](guides/working_with_richtext.md#getting-content-from-editor) in HTML and Markdown formats
- [Full screen mode](guides/working_with_richtext.md#full-screen-mode)
- Cross browser compatibility
- IE11+ support
