import { Property } from 'tns-core-modules/ui/core/view';
import {TextView} from "tns-core-modules/ui/text-view";

export class MarkdownViewBase extends TextView {

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

export const fontSizeProperty = new Property<MarkdownViewBase, number>({
    name: "fontSize",
    defaultValue: 18,
    affectsLayout: true
});

markdownProperty.register(MarkdownViewBase);
fontSizeProperty.register(MarkdownViewBase);