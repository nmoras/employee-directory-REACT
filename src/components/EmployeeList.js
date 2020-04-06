import React, {useState} from 'react'
import employees from "./employees.json";
import EmployeeData from "./EmployeeData";



function EmployeeList(props) {

    const employeeListStyle = {
        colborder: {border: '1px solid lightgrey'},
        listtype: {listStyleType: 'none'},
        imgcontainer: {},
        img: {height: '50%', border: '1px solid blue'}
    }

    const [searchInput, setSearchInput] = useState( {search:''} );
    const [displayEmployeeList, setDisplayEmployeeList] = useState(  employees );


    function handleInputChange(e) {
        e.preventDefault();
        const newInput = e.target.value
        setSearchInput({search: newInput})
        // console.log(displayEmployeeList);
            
        if( newInput.length>1){
            // console.log(displayEmployeeList);
            // let employeename = employees.filter(employee => employee.name.includes(newInput)});
            // console.log(employeename);
            const filteredEmployeeList = employees.filter((employee) => {
                return employee.name.toLowerCase().indexOf( searchInput.search.toLowerCase() ) === 0;
            })
            // console.log(filteredEmployeeList);    
            setDisplayEmployeeList( filteredEmployeeList );
        } else {
                setDisplayEmployeeList( [] );
        }
    };

    function handleSort(e){
        e.preventDefault();
        console.log( 'i am clicked')
        let employeeList = [ ...displayEmployeeList ];
        setDisplayEmployeeList(employeeList.reverse())
        console.log(displayEmployeeList);
    }
    // console.log(displayEmployeeList);
    // function employeeDetails( ){

    //     setDisplayEmployeeList( [] );

    //     // const employeeDetailsDiv = employees.filter((employee) => { return employee.includes( input ) })
    //     //     console.log(employeeDetailsDiv);
    //     //     setFetchEmployeeInfo( employeeDetails )    
    // }
    return (

        <div>
            <form>
                <div class="input-group p-3">
                    <input type="text" class="form-control" value={searchInput.search} placeholder="Search Employee by Name" onChange={handleInputChange} />
                </div> 
            </form>
            <div class="row justify-content-center">
                 <div class="col-2">
                    <button style={{backgroundColor: "blue", padding:"5px", paddingLeft:"5px"}} onClick={handleSort}>Sort By Id</button>
                 </div>       
            </div>
            
            {/* <div>
                {displayEmployeeList.map(employee => (
                    <EmployeeData
                    id= {employee.id}
                    name= {employee.name}
                    image= {employee.image}
                    Role= {employee.Role}
                    Department= {employee.Police}
                    Office= {employee.Office}
                    Mobile= {employee.Mobile}
                    Email= {employee.Email}
                    Address= {employee.Address}
                />                 
                ))}       
            </div> */}
            <EmployeeData displayEmployeeList={displayEmployeeList} />
        </div>    

    );
}


export default EmployeeList
// {displayEmployeeList.map( employee => <EmployeeData { [...displayEmployeeList]} />)}