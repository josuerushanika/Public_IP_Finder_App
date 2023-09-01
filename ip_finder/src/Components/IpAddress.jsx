import { useEffect, useState } from "react";

const IpAddress = () => {
    const [IpAddressDict, setIpAddressDict] = useState({});
    const [httpError, setHttpError] = useState (null)
    useEffect(() =>{
        fetch("http://ip-api.com/json/").then((res) => {
            if (res.ok) {
                setHttpError(null)
                return res.json()
            } else {
                throw Error("Failed to fetch IP Addess")
            }
        }).then((data) => {
            console.log(data)
            setIpAddressDict(data)
        }).catch((error) => setHttpError("Failed to retrieve your Public IP Address, please try again later"));
    }, []);
    
     return (
        <div>
            <h1>{IpAddressDict.query}</h1>
            {httpError && <p>{httpError}</p>}
        </div>
    )
};

export default IpAddress;