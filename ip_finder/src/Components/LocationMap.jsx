import Card from "../UI/Card";

const LocationMap = (props) => {
    return <Card>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.lon}&zoom=6&size=400x400&markers=color:red%7C${props.lat},${props.lon}&key=AIzaSyAWZ9QUI_bRFnTghPg0yAOhkkpaGwXt3k
`} alt="" />
    </Card>
};

export default LocationMap;
