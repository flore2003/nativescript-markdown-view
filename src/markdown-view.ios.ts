import { markdownProperty, MarkdownViewBase } from './markdown-view.common';

declare class MarkDownTextView {

    text: string;

}

export class MarkdownView extends MarkdownViewBase {

    _ios: MarkDownTextView;

    constructor() {
        super();
    }

    get ios(): MarkDownTextView {
        return this._ios;
    }

    public createNativeView() {
        this._ios = new MarkDownTextView();
        return this._ios;
    }

    [markdownProperty.setNative](markdown: string) {
        this._ios.text = markdown;
    }

}
