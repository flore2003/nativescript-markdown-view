import { markdownProperty, MarkdownViewBase } from './markdown-view.common';
import InputType = android.text.InputType;
import { fontSizeProperty } from 'tns-core-modules/ui/styling/style-properties';

​
declare var ru: any;
​
export class MarkdownView extends MarkdownViewBase {
​
    _android: any = null; // android.widget.TextView
​
    markwon: any;
​​
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

    [fontSizeProperty.setNative](fontSize: number) {
        this._android.setTextSize(Number(fontSize));
    }

    [markdownProperty.setNative](markdown: string) {
        this.markwon.setMarkdown(this.nativeView, markdown);
    }
​
}
