import { BaseComponent } from "react-vextensions";
export class Switch extends BaseComponent {
    render() {
        let { preferLater, children } = this.props;
        let existentChildren = this.FlattenedChildren.filter(a => !!a);
        return (preferLater ? existentChildren[existentChildren.length - 1] : existentChildren[0]) || null;
    }
}
Switch.defaultProps = { preferLater: true };
