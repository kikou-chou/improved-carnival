import React from "react";
import ReactDOM from "react-dom";

class Add1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["佐藤", "清水", "阿部"],
            inputValue: ''
        }

    }
    handleBtClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })

    }

    render() {

        return (
            <div className="App">
                <div>
                    <p>お名前</p>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtClick.bind(this)}>add</button>

                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>

            </div>


        )
    }


}

export default Add1;