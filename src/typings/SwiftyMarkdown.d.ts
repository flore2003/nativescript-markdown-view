
declare class BasicStyles extends NSObject implements FontProperties {

	static alloc(): BasicStyles; // inherited from NSObject

	static new(): BasicStyles; // inherited from NSObject

	color: UIColor; // inherited from FontProperties

	fontName: string; // inherited from FontProperties

	fontSize: number; // inherited from FontProperties
}

interface FontProperties {

	color: UIColor;

	fontName: string;

	fontSize: number;
}
declare var FontProperties: {

	prototype: FontProperties;
};

declare class SwiftyMarkdown extends NSObject {

	static alloc(): SwiftyMarkdown; // inherited from NSObject

	static new(): SwiftyMarkdown; // inherited from NSObject

	body: BasicStyles;

	bold: BasicStyles;

	code: BasicStyles;

	h1: BasicStyles;

	h2: BasicStyles;

	h3: BasicStyles;

	h4: BasicStyles;

	h5: BasicStyles;

	h6: BasicStyles;

	italic: BasicStyles;

	link: BasicStyles;

	constructor(o: { string: string; });

	constructor(o: { url: NSURL; });

	attributedString(): NSAttributedString;

	initWithString(string: string): this;

	initWithUrl(url: NSURL): this;

	setFontColorForAllStylesWith(color: UIColor): void;

	setFontNameForAllStylesWith(name: string): void;

	setFontSizeForAllStylesWith(size: number): void;
}

declare var SwiftyMarkdownVersionNumber: number;

declare var SwiftyMarkdownVersionNumberVar: number;

declare var SwiftyMarkdownVersionString: interop.Reference<number>;

declare var SwiftyMarkdownVersionStringVar: interop.Reference<number>;
