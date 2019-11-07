import { markdownProperty, MarkdownViewBase } from './markdown-view.common';

export class MarkdownView extends MarkdownViewBase {

    _ios: UITextView;

    constructor() {
        super();
    }

    public createNativeView() {
        this._ios = super.createNativeView() as UITextView;
        return this._ios;
    }

    [markdownProperty.setNative](markdown: string) {
        const md = TSMarkdownParser.standardParser();
        this._ios.editable = false;
        this._ios.selectable = true;

        this._ios.attributedText = md.attributedStringFromMarkdown(markdown);
    }

}
