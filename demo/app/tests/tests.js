var MarkdownView = require("nativescript-markdown-view").MarkdownView;
var markdownView = new MarkdownView();

describe("greet function", function() {
    it("exists", function() {
        expect(markdownView.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(markdownView.greet()).toEqual("Hello, NS");
    });
});