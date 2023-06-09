import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {


    // key: value
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'Project Manager', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent:', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('run didupdate: ', 'prevState:', prevState, 'currenState:', this.state)
    }
    componentDidMount() {
        console.log('Component did mount')
    }


    /**
     * // Cú pháp bọc đặc biệt <React.Fragment></React.Fragment> 
     */

    // re-render
    render() {
        console.log('call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;