import React, {useEffect, useState} from 'react'

function TestView(){
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/api/data", {
            method: "GET",
            credentials: "include",  // Ensure cookies and other credentials are included
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, []);

    return(
        <div>
            <p>{data}</p>
        </div>
    );
}
export default TestView;