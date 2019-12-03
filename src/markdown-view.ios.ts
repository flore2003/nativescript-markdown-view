import { markdownProperty, fontSizeProperty, MarkdownViewBase } from './markdown-view.common';

export class MarkdownView extends MarkdownViewBase {

    _ios: UITextView;

    private _fontSize = 18;

    constructor() {
        super();
    }

    public createNativeView() {
        this._ios = super.createNativeView() as UITextView;
        return this._ios;
    }

    [fontSizeProperty.setNative](size: number) {
        this._fontSize = size;
    }

    [markdownProperty.setNative](markdown: string) {
        const md = TSMarkdownParser.standardParser();
        this._ios.editable = false;
        this._ios.selectable = true;
        this._ios.scrollEnabled = false;

        const defaultAttributes =
            NSDictionary.dictionaryWithObjectForKey(UIFont.systemFontOfSize(this._fontSize), NSFontAttributeName);
        const emphasisAttributes =
            NSDictionary.dictionaryWithObjectForKey(UIFont.italicSystemFontOfSize(this._fontSize), NSFontAttributeName);
        const strongAttributes =
            NSDictionary.dictionaryWithObjectForKey(UIFont.boldSystemFontOfSize(this._fontSize), NSFontAttributeName);

        md.defaultAttributes = defaultAttributes;
        md.emphasisAttributes = emphasisAttributes;
        md.strongAttributes = strongAttributes;

        this._ios.attributedText = md.attributedStringFromMarkdown(markdown);
    }

}
