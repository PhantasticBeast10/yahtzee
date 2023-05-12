import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
    render() {
        let disabled = this.props.score !== undefined;
        let classes = `RuleRow ${
            !disabled ? " RuleRow-active" : " RuleRow-disabled"
        }`;
        return (
            <tr className={classes} onClick={!disabled && this.props.doScore}>
                <td className="RuleRow-name">{this.props.name}</td>
                <td className="RuleRow-score">{disabled ? this.props.score : this.props.description}</td>
            </tr>
        );
    }
}

export default RuleRow;
