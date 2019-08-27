export function ToJSON(obj) { return JSON.stringify(obj); }
export function FromJSON(json) { return JSON.parse(json); }

export function RemoveDuplicates(items: any) {
	var result = [];
	for (let item of items) {
		if (result.indexOf(item) == -1) {
			result.push(item);
		}
	}
	return result;
}

export function Assert(condition, messageOrMessageFunc?: string | Function) {
	if (condition) return;

	var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

	//console.log(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
	console.error("Assert failed) " + message);
	debugger;
	throw new Error("Assert failed) " + message);
}
export function AssertWarn(condition, messageOrMessageFunc?: string | Function) {
	if (condition) return;

	var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;

	console.warn(`Assert-warn failed) ${message}\n\nStackTrace)`); // ${GetStackTraceStr()}`);
}

function IsArrayOfStrings(obj): obj is string[] { return obj instanceof Array && obj.every(a=>IsString(a)); }
function IsString(obj): obj is string { return typeof obj == "string"; }
export function ReactChildrenAsText(children: React.ReactNode, valueIfFailed: string) {
	if (IsString(children)) return children;
	if (IsArrayOfStrings(children)) return children.join("");
	return valueIfFailed;
}

export function Clone(obj, keepPrototype: boolean = false) {
	if (obj == null) return obj;
	
	let result = FromJSON(ToJSON(obj));
	if (keepPrototype == true) {
		Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
	}
	return result;
}

export function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
export function IsNumber(obj, allowNumberObj = false, allowNaN = false): obj is number {
	if (!allowNaN && IsNaN(obj)) return false;
	return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
export function ToNumber(stringOrFloatVal: string | number, valIfConversionFails = NaN) {
	if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal)) return valIfConversionFails;
	if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0) return valIfConversionFails;
	return Number(stringOrFloatVal);
}

/*export function Math_Truncate(value: number) {
	if (value >= 0) return Math.floor(value);
	return Math.ceil(value);
}*/