import { CSSType, Property } from '@nativescript/core/ui/core/view';
import { Label } from '@nativescript/core/ui/label';

@CSSType('MarkdownView')
export class MarkdownViewBase extends Label {

    /**
     * Gets the native [android widget](http://developer.android.com/reference/android/widget/TextView.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.widget.TextView */;

    /**
     * Gets the native MarkDownTextView that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* MarkDownTextView */;

}

export const markdownProperty = new Property<MarkdownViewBase, string>({
    name: "markdown",
    defaultValue: "",
    affectsLayout: true
});

markdownProperty.register(MarkdownViewBase);
