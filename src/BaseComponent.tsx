import React from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import ShallowCompare from "react/lib/shallowCompare";
import classNames from "classnames";
export {ShallowCompare};
import {HasSealedProps, BaseProps, FindDOM, Sealed} from "./General";

function ToJSON(obj) { return JSON.stringify(obj); }
function FromJSON(json) { return JSON.parse(json); }

function RemoveDuplicates(items: any) {
	var result = [];
	for (let item of items) {
		if (result.indexOf(item) == -1) {
			result.push(item);
		}
	}
	return result;
}

export enum RenderSource {
	Mount, // first render, after creation
	PropChange, // from prop-change, and ancestor re-renders (e.g. ancestor.forceUpdate(), ancestor.setState())
	SetState, // from this.SetState()
	Update, // from this.Update()
}
@HasSealedProps
export class BaseComponent<P, S> extends Component<P & BaseProps, S> {
	constructor(props) {
		super(props);
		autoBind(this);
		// if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
		//		so reach in to original class, and set up auto-binding for its prototype members as well
		if (this.constructor.name == "RadiumEnhancer")
			autoBind(Object.getPrototypeOf(this));
		//this.state = this.state || this.defaultState || {} as any;
		this.state = this.constructor["defaultState"] || {} as any;
		
		// if using PreRender, wrap render func
		if (this.PreRender != BaseComponent.prototype.PreRender) {
			let oldRender = this.render;
			this.render = function() {
				this.PreRender();
				return oldRender.apply(this, arguments);
			};
		}

		// you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
		/*let oldRender = this.render;
		this.render = function() {
			try {
				this.PreRender();
				return oldRender.apply(this, arguments);
			} catch (ex) {
				debugger;
				throw ex;
			}
		};*/
	}

	defaultState: Partial<S>;

	refs;
	//timers = [] as Timer[];

	get DOM() { return this.mounted ? FindDOM(this) : null; }
	//get DOM_() { return this.mounted ? $(this.DOM) : null; }
	// needed for wrapper-components that don't provide way of accessing inner-component
	//get InnerComp() { return FindReact(this.DOM); }

	// make all these optional, so fits Component type definition/shape
	get FlattenedChildren() {
	    var children = children instanceof Array ? this.props.children : [this.props.children];
	    return React.Children.map((children as any).filter(a=>a), a=>a);
	}

	// helper for debugging
	private GetPropsChanged_lastProps = {};
	GetPropsChanged() {
		let keys = RemoveDuplicates(Object.keys(this.props).concat(Object.keys(this.GetPropsChanged_lastProps)));
		let result = keys.filter(key=>!Object.is(this.props[key], this.GetPropsChanged_lastProps[key]));
		this.GetPropsChanged_lastProps = {...this.props as any};
		return result;
	}
	GetPropsChanged_Data() {
		return ToJSON(this.GetPropsChanged().reduce((result, key)=>result[key] = this.props[key], {}));
	}
	private GetStateChanged_lastState = {};
	GetStateChanged() {
		let keys = RemoveDuplicates(Object.keys(this.state).concat(Object.keys(this.GetStateChanged_lastState)));
		let result = keys.filter(key=>!Object.is((this.state as any)[key], this.GetStateChanged_lastState[key]));
		this.GetStateChanged_lastState = {...this.state as any};
		return result;
	}
	GetStateChanged_Data() {
		return ToJSON(this.GetStateChanged().reduce((result, key)=>result[key] = this.state[key], {}));
	}

	forceUpdate(_: ()=>"Do not call this. Call Update() instead.") {
		//throw new Error("Do not call this. Call Update() instead.");
	}
	Update(postUpdate?) {
		//if (!this.Mounted) return;
		this.lastRender_source = RenderSource.Update;
		//this.forceUpdate(postUpdate);
		Component.prototype.forceUpdate.call(this, postUpdate);
	}
	Clear(postClear?) {
		var oldRender = this.render;
		this.render = function() {
			this.render = oldRender;
			//WaitXThenRun(0, this.Update);
			setTimeout(()=>this.Update());
			return <div/>;
		};
		postClear();
	}
	ClearThenUpdate() {
		//this.Clear(this.Update);
		this.Clear(()=>this.Update());
	}
	/** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */
	UpdateAndReceive(props) {
		return ()=> {
			//if (!this.Mounted) return;
			//this.forceUpdate();
			Component.prototype.forceUpdate.apply(this, arguments);
			if (this.autoRemoveChangeListeners)
				this.RemoveChangeListeners();
			this.ComponentWillMountOrReceiveProps(props)
		};
	}

	//setState(_: ()=>"Do not call this. Call SetState() instead.") {
	/*setState() {
		throw new Error("Do not call this. Call SetState() instead.");
	}*/
	setState(): "Do not call this. Call SetState() instead." { return null as any; }
	SetState(newState: Partial<S>, callback?: ()=>any, cancelIfStateSame = true, deepCompare = false) {
		if (cancelIfStateSame) {
			// we only care about new-state's keys -- setState() leaves unmentioned keys untouched
			let oldState_forNewStateKeys = Object.keys(newState).reduce((result, a)=>result[a] = this.state[a], {});
			if (deepCompare) {
				if (ToJSON(newState) == ToJSON(oldState_forNewStateKeys)) return [];
			} else {
				//if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
				// use a looser comparison (we want a missing prop to be equivalent to null and undefined)
				let same = true;
				for (let key of RemoveDuplicates(Object.keys(this.state).concat(Object.keys(newState)))) {
					let valA = this.state[key as any];
					let valB = newState[key as any];
					if (valA == null && valB == null) continue;

					if (valA !== valB) {
						same = false;
						break;
					}
				}
				if (same) return [];
			}
		}
		
		this.lastRender_source = RenderSource.SetState;
		//this.setState(newState as S, callback);
		Component.prototype.setState.apply(this, arguments);
	}

	changeListeners = [];
	AddChangeListeners(host, ...funcs) {
		if (host == null) return; // maybe temp

	    /*host.extraMethods = funcs;
	    for (let func of funcs)
			this.changeListeners.push({host: host, func: func});*/
	    for (let func of funcs) {
			if (typeof func == "string")
				func = (func as any).Func(this.Update);
			// if actual function, add it (else, ignore entry--it must have been a failed conditional)
			if (func instanceof Function) {
				//if (!host.HasExtraMethod(func)) {
				host.extraMethod = func;
				this.changeListeners.push({host: host, func: func});
			}
		}
	}
	RemoveChangeListeners() {
		//this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
	    for (let changeListener of this.changeListeners)
	        changeListener.host.removeExtraMethod = changeListener.func;
	    this.changeListeners = [];
	}
	RemoveChangeListenersFor(host) {
		var changeListenersToRemove = this.changeListeners.filter(a=>a.host == host);
		for (let listener of changeListenersToRemove) {
			listener.host.removeExtraMethod = listener.func;
			this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
		}
	}

	autoRemoveChangeListeners = true;
	ComponentWillMount(): void {};
	ComponentWillMountOrReceiveProps(newProps: any, forMount?: boolean): void {};
	@Sealed componentWillMount() {
		if (this.autoRemoveChangeListeners)
			this.RemoveChangeListeners();
		this.ComponentWillMount(); 
		this.ComponentWillMountOrReceiveProps(this.props, true);
		this.lastRender_source = RenderSource.Mount;
	}

	ComponentDidMount(...args: any[]): void {};
	ComponentDidMountOrUpdate(lastProps?: Readonly<P & BaseProps & {children?}>, lastState?: S): void {};
	ComponentDidMountOrUpdate_lastProps: Readonly<P & BaseProps & {children?}>;
	ComponentDidMountOrUpdate_lastState: S;

	mounted = false;
	@Sealed componentDidMount(...args) {
		this.ComponentDidMount(...args);
		this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
		this.ComponentDidMountOrUpdate_lastProps = this.props;
		this.ComponentDidMountOrUpdate_lastState = this.state;
		/*let {Ref} = this.props;
		if (Ref) Ref(this);*/
		this.mounted = true;
		this.CallPostRender();
	}

	ComponentWillUnmount(): void {};
	@Sealed componentWillUnmount() {
		this.ComponentWillUnmount();
		/*for (let timer of this.timers) {
			timer.Stop();
		}
		this.timers = [];*/
		/*let {Ref} = this.props;
		if (Ref) Ref(null);*/
		this.mounted = false;
	}
	
	ComponentWillReceiveProps(newProps: any[]): void {};
	@Sealed componentWillReceiveProps(newProps) {
		if (this.autoRemoveChangeListeners)
			this.RemoveChangeListeners();
		this.ComponentWillReceiveProps(newProps);
		this.ComponentWillMountOrReceiveProps(newProps, false);
		this.lastRender_source = RenderSource.PropChange;
	}
	ComponentDidUpdate(...args: any[]): void {};
	@Sealed componentDidUpdate(...args) {
	    this.ComponentDidUpdate(...args);
		this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
		this.ComponentDidMountOrUpdate_lastProps = this.props;
		this.ComponentDidMountOrUpdate_lastState = this.state;
		this.CallPostRender();
	}

	// whether the current/upcoming render was triggered by a mount or prop-change (as opposed to setState() or forceUpdate())
	lastRender_source: RenderSource;
	private CallPostRender() {
		if (this.PostRender == BaseComponent.prototype.PostRender) return;

		let renderSource = this.lastRender_source;

		let ownPostRender = this.PostRender as any;
		// can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
		let prototypePostRender = this.constructor.prototype.PostRender;
		if (ownPostRender.instant || prototypePostRender.instant) {
			this.PostRender(renderSource);
		} else {
			/*if (QuickIncrement("PostRenderLog") <= 1)
				Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
			//Log("Calling PostRender for: " + this.constructor.name);
			setTimeout(()=>window.requestAnimationFrame(()=> {
			//WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
				if (!this.mounted) return;
				this.PostRender(renderSource);
			}));
			/*WaitXThenRun(0, ()=> {
				this.PostRender();
			});*/
		}
	}

	PreRender(): void {};
	PostRender(source?: RenderSource): void {};

	// maybe temp
	/*get Mounted() {
	    return ReactInstanceMap.get(this) != null;
	}*/
}
//G({Component2: Component, BaseComponent: Component});