# NativeScript Markdown View

[![npm version](https://badge.fury.io/js/nativescript-markdown-view.svg)](http://badge.fury.io/js/nativescript-markdown-view)

[![NPM](https://nodei.co/npm/nativescript-markdown-view.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-markdown-view/)


A NativeScript plugin that provides a natively rendered markdown view. 

Uses [Markwon](https://github.com/noties/Markwon) on Android and [TSMarkdownParser](https://github.com/laptobbe/TSMarkdownParser) on iOS.

## Installation

Run the following command from the root of your project:


```javascript
tns plugin add nativescript-markdown-view
```

This command automatically installs the necessary files, as well as stores nativescript-markdown-view as a dependency in your project's package.json file.

## Usage 

You need to add `xmlns:mv="nativescript-markdown-view"` to your page tag, and then simply use `<mv:MarkdownView/>` in order to add the widget to your page.

```xml
<!-- test-page.xml -->
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" xmlns:mv="nativescript-markdown-view">
    <StackLayout class="p-20">
        <mv:MarkdownView markdown="_This_ should be **bold**!" />
    </StackLayout>
</Page>
```

## API
    
| Property | Default | Description |
| --- | --- | --- |
| markdown | "" | The markdown to be rendered on screen |
    
## License

MIT License, see LICENSE file
