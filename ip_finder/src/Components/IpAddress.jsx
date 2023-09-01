import { useEffect, useState } from "react";
import classes from "./IpAddress.module.css";
import LocationMap from "./LocationMap";

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
            {!httpError && (
                <>
                   <div className={classes.info}>
                    <p>
                        <span className={classes.blod}>Public IPv4 Address: </span>
                        {IpAddressDict.query}
                    </p>

                    <p>
                        <span className={classes.blod}>Internet Service Provider: </span>
                        {IpAddressDict.isp}
                    </p>

                    <p>
                        <span className={classes.blod}>Location: </span>
                        {IpAddressDict.city},  {IpAddressDict.country}
                    </p>
                   </div>
                   <LocationMap lat={IpAddressDict.lat} lon={IpAddressDict.lon} />
                </>

            )}
            {/* <h1>{IpAddressDict.query}</h1> */}
            {httpError && <p>{httpError}</p>}
        </div>
    )
};

export default IpAddress;