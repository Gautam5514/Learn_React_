import { useState, useEffect } from "react";

// It is Two way binding => when the data take and also store the at a time that is two way binding
export default function EventBindingComponents()
{
    const [userName, setUserName] = useState('Gautam');

    function handleUserName (e) {
        setUserName(e.target.value);
    }

    return (
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                {/* <dd><input type="text" onBlur={handleUserName} /></dd> */}
                <dd><input type="text" value={userName} onChange={handleUserName} /></dd>
            </dl>
            <h3>hello! {userName}</h3>
        </div>
    )
}