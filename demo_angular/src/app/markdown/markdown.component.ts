import { Component, OnInit } from "@angular/core";


@Component({
    selector: "markdown",
    templateUrl: "./markdown.component.html"
})
export class MarkdownComponent implements OnInit {
    text = "This is a sample text";
    headings = "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6";
    emphasis = "**bold** or __bold__\n*italic* or _italic_";
    lists = "* First\n* Second\n1. Third\n4. Fourth";
    link = "[Sample link](https://github.com/flore2003/nativescript-markdown-view)";
    quote = "> Quote\n>> Quote";
    code = "`private doSomething(): Something[]`";

    constructor() { }

    ngOnInit(): void {
    }
}
