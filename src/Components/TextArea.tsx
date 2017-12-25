import {BaseComponent} from "react-vextensions";
import TextAreaAutoSize from "react-textarea-autosize";

var styles = {
	root: {
		margin: 0,
		/*border: "1px solid #A9A9A9",*/
		padding: "3 5",
		border: "none",
		//background: "url(/Main/Packages/Images/Tiling/Menu/Menu.png)",
		//color: "#888",
		cursor: "text",
		resize: "none",

		display: "inline-block",
		boxSizing: "border-box",
		whiteSpace: "pre",
		wordWrap: "normal",
		width: "100%",
		//height: "100%",
		/*overflow: "auto",*/
	},
	root_disabled: {
		/*background: "white",*/
		opacity: .7,
		cursor: "default",
	}
};

export class TextArea extends BaseComponent
		<{
			value?, defaultValue?, editable?, className?, style?, onChange?: (newVal, event)=>void,
			delayChangeTillDefocus?: boolean,
		} & React.HTMLProps<HTMLTextAreaElement>,
		{editedValue: string}> {
	static defaultProps = {
		editable: true
	};
	
	render() {
		var {value, defaultValue, editable, className, style, onChange, delayChangeTillDefocus, ...rest} = this.props;
		var {editedValue} = this.state;

		// if defaultValue is not specified, assume we're using value; then, if we see value is null, set to "" instead, so it clears any stale content
		if (defaultValue === undefined && value == null) value = "";

		return <textarea {...rest} ref="root" readOnly={!editable} className={"simpleText selectable " + className} style={E(styles.root, style)}
			value={editedValue != null ? editedValue : value} defaultValue={defaultValue} 
			onChange={e=> {
				var newVal = e.target.value;
				if (delayChangeTillDefocus) {
					this.SetState({editedValue: newVal});
				} else {
					onChange(newVal, e);
					this.SetState({editedValue: null});
				}
			}}
			onBlur={e=> {
				var newVal = e.target["value"];
				if (delayChangeTillDefocus && onChange) {
					onChange(newVal, e);
					this.SetState({editedValue: null});
				}
			}}/>;
	}
}

export class TextArea_AutoSize extends BaseComponent<{enabled?: boolean, style?, onChange?} & React.HTMLProps<HTMLTextAreaElement>, {}> {
	render() {
		var {enabled, style, onChange, ...rest} = this.props;
		return (
			<TextAreaAutoSize {...rest} ref="root" disabled={enabled == false} style={E({resize: "none"}, style)}
				onChange={e=>onChange(this.refs.root.value)}/>
		);
	}
}