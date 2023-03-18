import React from 'react';

// class component
// class ChildComponent extends React.Component {
//     // re-render
//     render() {
//         console.log('check props ', this.props)
//         // let name = this.props.name
//         // let age = this.props.age

//         let { name, age, address, arrJobs } = this.props // Cú pháp khai báo biến ngắn lại
//         return (
//             <>
//                 <div className="job-list">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }


// function component
const ChildComponent = (props) => {
    let { arrJobs } = props // Cú pháp khai báo biến ngắn lại
    return (
        <>
            <div className="job-list">
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
        </>
    )
}

export default ChildComponent;