import { markdownProperty, MarkdownViewBase } from './markdown-view.common';

declare var ru: any;

export class MarkdownView extends MarkdownViewBase {

    _android: any = null; // android.widget.TextView

    markwon: any;

    constructor() {
        super();
    }

    get android(): android.widget.TextView {
        return this._android;
    }

    public createNativeView() {
        this.markwon = ru.noties.markwon.Markwon.create(this._context);
        this._android = new android.widget.TextView(this._context);
        return this._android;
    }

    [markdownProperty.setNative](markdown: string) {
        this.markwon.setMarkdown(this.nativeView, markdown);
    }

}
