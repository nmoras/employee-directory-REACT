import React, {useState} from 'react'
import EmployeeList from './EmployeeList';
import employees from "./employees.json";


function SearchEmployee() {
    // const searchEmployeeStyle = {
    //     // image: { height: '30vh'},
    //     // alert: { display: 'none'}
    //     backgroundColor: ""
    // }

    const [mySearch, setMySearch] = useState ( {search: "" });

   
      
    // function handleKeyDown(e){
    //     e.preventDefault();
    //     if (e.key === 'Enter') {
    //     setMySearch({search: ''})
        
    //   }  
    
    return (
        <div>
             <form class="row">
                 <div class="col-12">
                    {/* <div class="input-group p-3">
                        <input type="text" class="form-control" value={mySearch.search} placeholder="Search Employee by Name" onChange={handleSearch} />
                    </div>   */}
                        <EmployeeList />
                 </div>
                    
            </form> 
            {/* {mySearch.names.map( name => <h4>{name}</h4>)} */}
        </div>
    )
}


export default SearchEmployee
// onKeyDown={}
