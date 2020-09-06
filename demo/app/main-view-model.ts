import { Observable } from '@nativescript/core/data/observable';

export class HelloWorldModel extends Observable {

    text: string;
    headings: string;
    emphasis: string;
    lists: string;
    link: string;
    quote: string;
    code: string;
    img;
    constructor() {
        super();
        this.text = "This is a sample text";
        this.headings = "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6";
        this.emphasis = "**bold** or __bold__\n*italic* or _italic_";
        this.lists = "* First\n* Second\n1. Third\n4. Fourth";
        this.link = "[Sample link](https://github.com/flore2003/nativescript-markdown-view)";
        this.quote = "> Quote\n>> Quote";
        this.code = "`private doSomething(): Something[]`";
        this.img = '![](https://raw.githubusercontent.com/dudipsh/nativescript-ngx-date-range/master/screenshots/calendar_he.png)'

    }
}
