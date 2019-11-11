import { fontSizeProperty, markdownProperty, MarkdownViewBase } from './markdown-view.common';
import InputType = android.text.InputType;

​
declare var ru: any;
​
export class MarkdownView extends MarkdownViewBase {
​
    _android: any = null; // android.widget.TextView
​
    markwon: any;
​
    private _fontSize = 18;
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
        this._android.setInputType(InputType.TYPE_NULL);
        return this._android;
    }
​
    [fontSizeProperty.setNative](size: number) {
        this._fontSize = size;
        this._android.setTextSize(Number(this._fontSize));
    }
​
    [markdownProperty.setNative](markdown: string) {
        this._android.setTextSize(Number(this._fontSize));
        this.markwon.setMarkdown(this.nativeView, markdown);
    }
​
}
