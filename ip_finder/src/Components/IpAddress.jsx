import { useEffect, useState } from "react";

const IpAddress = () => {
    const [IpAddressDict, setIpAddressDict] = useState({});
    useEffect(() =>{
        fetch("http://ip-api.com/json/").then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw Error("Failed to fetch IP Addess")
            }
        }).then((data) => {
            console.log(data)
        }).catch((error) =>
        console.log(error))
    }, []);
    
     return (
        <div>
            <h1>'0.0.0.0'</h1>
        </div>
    )
};

export default IpAddress;