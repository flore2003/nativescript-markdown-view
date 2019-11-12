import { markdownProperty, MarkdownViewBase } from './markdown-view.common';
import { fontSizeProperty } from '@nativescript/core/ui/styling/style-properties';

export class MarkdownView extends MarkdownViewBase {

    _ios: UITextView;

    mdParser: TSMarkdownParser;

    _currentMarkdown: string;

    constructor() {
        super();

        this.mdParser = TSMarkdownParser.standardParser();
    }

    public createNativeView() {
        this._ios = super.createNativeView() as UITextView;
        this._ios.editable = false;
        this._ios.selectable = true;
        return this._ios;
    }

    [fontSizeProperty.setNative](fontSize: number) {
        const defaultAttributes =
            NSDictionary.dictionaryWithObjectForKey(UIFont.systemFontOfSize(fontSize), NSFontAttributeName);
        const emphasisAttributes =
            NSDictionary.dictionaryWithObjectForKey(UIFont.italicSystemFontOfSize(fontSize), NSFontAttributeName);
        const strongAttributes =
            NSDictionary.dictionaryWithObjectForKey(UIFont.boldSystemFontOfSize(fontSize), NSFontAttributeName);

        this.mdParser.defaultAttributes = defaultAttributes;
        this.mdParser.emphasisAttributes = emphasisAttributes;
        this.mdParser.strongAttributes = strongAttributes;
        this._updateMarkdown();
    }

    [markdownProperty.setNative](markdown: string) {
        this._currentMarkdown = markdown;
        this._updateMarkdown();
    }

    private _updateMarkdown() {
        this._ios.attributedText = this.mdParser.attributedStringFromMarkdown(this._currentMarkdown);
    }
}
