import React from 'react'

function EmployeeData(props ) {
    // console.log(props);
    const employeeListStyle = {
        colborder: {border: '1px solid lightgrey'},
        listtype: {listStyleType: 'none'},
        imgcontainer: {},

    }

    return (
        
        <div>
            {props.displayEmployeeList.map( employee => (
                    <div class='row justify-content-center'>
                         <div class='col-11 p-2' style={employeeListStyle.colborder}>
                            <div class="row">
                                <div class="col-3 imgcontainer">
                                    <img class="img-thumbnail" alt={employee.name} src={employee.image} />
                                </div>
                                <div class="col-9 emp-content">
                                    <div class='row'>
                                        <div class='col'>
                                            <ul style={employeeListStyle.listtype}>
                                                <li >
                                                    <strong>Name:</strong> {employee.name}
                                                </li>
                                                <li>
                                                    <strong>Occupation:</strong> {employee.Role}
                                                </li>
                                                <li>
                                                    <strong>Department:</strong> {employee.Department}
                                                </li>
                                                <li>
                                                    <strong>Email:</strong> {employee.Email}
                                                </li>
                                                <li>
                                                    <strong>Office:</strong> {employee.Office}
                                                </li>
                                                <li>
                                                    <strong>Address:</strong> {employee.Address}
                                                </li>
                                            </ul>
                                    </div>
                               </div>
                               
                           </div>
                       </div>
                     
                    </div>
                </div>

             ) )}
            

        </div> 
            
    
    )
}

export default EmployeeData
