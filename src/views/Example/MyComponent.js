import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {


    // key: value
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500$' },
            { id: 'abcJob2', title: 'Tester', salary: '400$' },
            { id: 'abcJob3', title: 'Project Manager', salary: '1000$' },
        ]
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
        console.log('call render: ', this.state)
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFisrtName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handeChangeLastName(event)}
                    /><br /><br />
                    <input
                        type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'25'}
                    address={'Kien Giang'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;