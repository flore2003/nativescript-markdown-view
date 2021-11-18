import { NgModule, Directive } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { MarkdownView } from 'nativescript-markdown-view';

registerElement('MarkdownView', () => MarkdownView);

@Directive({
    selector: 'MarkdownView'
})
export class MarkdownViewDirective { }

@NgModule({
    declarations: [MarkdownViewDirective],
    exports: [MarkdownViewDirective],
})
export class MarkdownViewModule { }