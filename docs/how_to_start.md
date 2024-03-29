---
sidebar_label: How to start
title: How to start
description: Learn how to quickly create DHTMLX Rich Text Editor on a page and set up its basic configuration in four simple steps. 
---

RichText editor will make text editing quick and comfortable due to the inbuilt set of handy formatting tools.
Follow this comprehensive and easy-to-reproduce tutorial to create RichText editor on a page and start working with it.

 <img alt="DHTMLX RichText Classic Mode" src={require('./assets/classic_mode.png').default} />

Step 1. Include source files
--------------------------

First create an HTML file with the name `index.html`. Then include the source files of DHTMLX Richtext into this file. 
[Have a look at the structure of RichText package](guides/initialization.md#including-source-files).

You need to include the following two files:

- the JS file of DHTMLX Richtext
- the CSS file of DHTMLX Richtext

~~~html title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with DHTMLX Richtext</title>
		<script type="text/javascript" src="../../codebase/richtext.js"></script>
		<link rel="stylesheet" href="../../codebase/richtext.css">
	</head>
	<body>
		<script>
		// your code will be here
		</script>
	</body>
</html>
~~~

Step 2. Create RichText
--------------------------

At this step you can add RichText on a page. There are two easy steps:

- Open the `index.html` file and create a DIV container in it.
- Initialize DHTMLX Richtext in the container with the help of the `dhx.Richtext` constructor. As parameters of the constructor function, pass the container you've created above and the configuration object of RichText:

~~~html title="index.html"
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with DHTMLX Richtext</title>
		<script type="text/javascript" src="../../codebase/richtext.js"></script>
		<link rel="stylesheet" href="../../codebase/richtext.css">
	</head>
	<body>
		<div id="richtext_container"></div>
		<script>
			var richtext = new dhx.Richtext("richtext_container", {
				// config options
			});
		</script>
	</body>
</html>
~~~

Step 3. Configure RichText 
------------------------------

Now it's time to define the desired configuration options to make RichText meet you needs.

RichText provides several options that let you adjust the toolbar appearance and behavior as well as choose the most suitable mode of work with a document. [Learn all the available settings](api/properties.md).

For example, you can specify the `"document"` mode of RichText displaying:

~~~js
var rich = new dhx.Richtext("richtext_container", {
	mode: "document"
});
~~~

There is a [detailed description of available RichText configuration settings](guides/configuration.md). 

Step 4. Set content (optional)
-------------------------

If necessary, you can parse some text in the HTML or Markdown format on the RichText initialization. Read more about this feature in the [related article](guides/loading_data.md).