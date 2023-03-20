import React from 'react';

// class component
class ChildComponent extends React.Component {
    // re-render

    //khai baos state
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {

        let { arrJobs } = this.props // Cú pháp khai báo biến ngắn lại
        let { showJob } = this.state
        let check = showJob === true ? 'showJob = true' : 'showJob = false';
        console.log('>>>check condition: ', check)
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}


// function component
// const ChildComponent = (props) => {
//     let { arrJobs } = props // Cú pháp khai báo biến ngắn lại
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {

//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;