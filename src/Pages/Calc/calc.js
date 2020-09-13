import React from 'react';

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }

    render () {
        return (
            <div className="calc">
                <h1 className="calc_h1">מחשבון</h1>
            </div>
        );
    }
}