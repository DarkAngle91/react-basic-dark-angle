import React from 'react';

class MyComponent extends React.Component {


    // key: value
    state = {
        name: 'Ronaldo',
        channel: 'Hung JP channel',

    }


    /**
     * // Cú pháp bọc đặc biệt <React.Fragment></React.Fragment> 
     */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log('hit the button')
        alert('Click me')
    }
    render() {
        return (
            <React.Fragment>

                <div className="fisrt">
                    <input value={this.state.name} type="text"
                        onChange={(event) => { this.handleOnChangeName(event) }}
                    />
                    My name's {this.state.name}
                </div>
                <div className="second">
                    My youtube channel: {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;