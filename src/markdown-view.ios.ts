import { markdownProperty, MarkdownViewBase } from './markdown-view.common';
import { fontSizeProperty, colorProperty } from '@nativescript/core/ui/styling/style-properties';
import { Color } from '@nativescript/core';

export class MarkdownView extends MarkdownViewBase {

    _ios: UITextView;

    mdParser: TSMarkdownParser;

    _currentMarkdown: string;

    _fontSize: number;

    _color: UIColor;

    constructor() {
        super();

        this.mdParser = TSMarkdownParser.standardParser();
    }

    public createNativeView() {
        this._ios = super.createNativeView() as UITextView;
        this._ios.editable = false;
        this._ios.selectable = true;
        this._ios.scrollEnabled = false;
        return this._ios;
    }

    [fontSizeProperty.setNative](fontSize: number) {
        this._fontSize = fontSize;
        this._updateStyling();
    }

    [colorProperty.setNative](value: Color | UIColor) {
        this._color = value instanceof Color ? value.ios : value;
        this._updateStyling();
    }

    [markdownProperty.setNative](markdown: string) {
        this._currentMarkdown = markdown;
        this._updateMarkdown();
    }

    private _updateMarkdown() {
        if (this._currentMarkdown) {
            this._ios.attributedText = this.mdParser.attributedStringFromMarkdown(this._currentMarkdown);
        } else {
            this._ios.text = '';
        }
    }

    private _updateStyling() {
        const defaultAttributes =
            NSDictionary.dictionaryWithObjectsForKeys(
                [
                    UIFont.systemFontOfSize(this._fontSize),
                    this._color
                ], [
                    NSFontAttributeName,
                    NSForegroundColorAttributeName
                ]);
        const emphasisAttributes =
            NSDictionary.dictionaryWithObjectsForKeys([UIFont.italicSystemFontOfSize(this._fontSize)], [NSFontAttributeName]);
        const strongAttributes =
            NSDictionary.dictionaryWithObjectsForKeys([UIFont.boldSystemFontOfSize(this._fontSize)], [NSFontAttributeName]);

        this.mdParser.defaultAttributes = defaultAttributes;
        this.mdParser.emphasisAttributes = emphasisAttributes;
        this.mdParser.strongAttributes = strongAttributes;
        this._updateMarkdown();
    }
}
