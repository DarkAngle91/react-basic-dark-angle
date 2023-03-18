import React from 'react';

class ChildComponent extends React.Component {


    // key: value
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFisrtName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handeChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() // Function ngăn load lại trang khi bấm submit
        alert('Click me to submit')
        console.log('Check data input: ', this.state) // Kiểm tra xem data đã vào chưa
    }
    /**
     * // Cú pháp bọc đặc biệt <React.Fragment></React.Fragment> 
     */

    // re-render
    render() {
        console.log('check props ', this.props)
        // let name = this.props.name
        // let age = this.props.age

        let { name, age } = this.props
        return (
            <>
                <div>
                    Child Component name: {name} - {age}
                </div>
            </>
        )
    }
}

export default ChildComponent;