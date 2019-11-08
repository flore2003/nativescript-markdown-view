import { fontSizeProperty, markdownProperty, MarkdownViewBase } from './markdown-view.common';
​
declare var ru: any;
​
export class MarkdownView extends MarkdownViewBase {
​
    _android: any = null; // android.widget.TextView
​
    markwon: any;
​
    private _fontSize = 14;
​
    constructor() {
        super();
    }
​
    get android(): android.widget.TextView {
        return this._android;
    }
​
    public createNativeView() {
        this.markwon = ru.noties.markwon.Markwon.create(this._context);
        this._android = new android.widget.TextView(this._context);
        return this._android;
    }
​
    [fontSizeProperty.setNative](size: number) {
        this._fontSize = size;
    }
​
    [markdownProperty.setNative](markdown: string) {
        this._android.setTextSize(Number(this._fontSize));
        this.markwon.setMarkdown(this.nativeView, markdown);
    }
​
}