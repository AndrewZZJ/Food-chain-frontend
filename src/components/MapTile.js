import logo from '../images/Tile-5.svg';
// import maptile from  "../images/" + ${props.id};
import './MapTile.css';

//<img src={source} alt="maptile" />

function MapTile(props) {

    // const source = props.id;
    const TileStyle = {
        position: "absolute",
        left: props.position.xTile,
        top: props.position.yTile,
        height: props.size.height,
        width: props.size.width,
        // imageOrientation: "270deg",
        // transform: "rotate(90deg)",
        // rotation: "180deg",
    }

    TileStyle.transform= "rotate(" + props.direction*90 + "deg)";

    return (
        <div className="App">
            <img src={props.id} alt="maptile" style={TileStyle} />
            {/*<p>{TileStyle.imageOrientation}</p>*/}
            {/*<p>{TileStyle.transform}</p>*/}
        </div>
    );
}

export default MapTile;
