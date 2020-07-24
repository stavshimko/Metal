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
                <h2>מחשבון</h2>
            </div>
        );
    }
}