export type n = null | undefined;
export type FixHTMLProps<T> = Omit<T, "title"> & {title?: string|n};
//export type HTMLProps_Fixed<T> = FixHTMLProps<React.HTMLProps<T>>;

/*
There are three types of interest, when we want to get an element-type's native attributes (we'll use button as example):
- All attributes that are on any html element: React.AllHTMLAttributes<HTMLButtonElement>
- Exact native attributes for div-elements (long version): DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
- Exact native attributes for div-elements (shortcut): JSX.IntrinsicElements["button"]

The last one is the easiest to make a type-helper for, so we use it below.
*/
export type HTMLProps_Fixed<T extends keyof JSX.IntrinsicElements> =
	Omit<
		FixHTMLProps<JSX.IntrinsicElements[T]>,
		// omit these; they are only present during instance creation, and are not part of the actual html-props set (without removal, causes TS errors on using "...rest" for comp-props)
		"ref"
	>;