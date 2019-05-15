import { markdownProperty, MarkdownViewBase } from './markdown-view.common';

export class MarkdownView extends MarkdownViewBase {

    _ios: UILabel;

    constructor() {
        super();
    }

    public createNativeView() {
        this._ios = super.createNativeView() as UILabel;
        return this._ios;
    }

    [markdownProperty.setNative](markdown: string) {
        const md = new SwiftyMarkdown({ string: markdown });
        this._ios.attributedText = md.attributedString();
    }

}
