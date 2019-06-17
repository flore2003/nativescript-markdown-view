import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
    headings: string;
    emphasis: string;
    lists: string;
    link: string;
    quote: string;
    code: string;

    constructor() {
        super();
        this.headings = "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6";
        this.emphasis = "**bold** or __bold__\n*italic* or _italic_";
        this.lists = "- First\n* Second\n3.Third\n4.Fourth";
        this.link = "[Sample link](https://github.com/flore2003/nativescript-markdown-view)"
        this.quote = "> Quote\n>> Quote"
        this.code = "`private doSomething(): Something[]`";
    }
}
