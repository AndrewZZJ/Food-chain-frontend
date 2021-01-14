import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Col} from "react-bootstrap";
import {Stage, Layer} from "react-konva";

import "./GameMap.css";
import MapTile from "./MapTile";
import House from "./House";
import {mapEvent} from "../reducers/map";

function GameMap(props){
    const colRef = useRef(null);
    const [size, setSize] = useState({width: 0, height:0});
    useEffect(() => {
        function onResize(){
            setSize({
                width: colRef.current.offsetWidth,
                height: colRef.current.offsetHeight
            });
            const playerCount = Object.keys(props.players).length;
            const xSize = playerCount / 2 + 2 + playerCount % 2;
            const ySize = playerCount / 2 + 2;
            if(colRef.current.offsetWidth < colRef.current.offsetHeight){
                const tileSize = colRef.current.offsetWidth / xSize;
                props.updateSizeInfo({
                    tileSize,
                    mapSize: {
                        x: xSize,
                        y: ySize,
                    },
                    offset: {
                        x: 0,
                        y: (colRef.current.offsetHeight / 2) - (tileSize * ySize / 2),
                    }
                });
            }else{
                const tileSize = colRef.current.offsetHeight / ySize;
                props.updateSizeInfo({
                    tileSize,
                    mapSize: {
                        x: tileSize * xSize,
                        y: tileSize * ySize,
                    },
                    offset: {
                        x: (colRef.current.offsetWidth / 2) - (tileSize * xSize / 2),
                        y: 0,
                    }
                });
            }
        }
        window.addEventListener("resize", onResize);
        onResize();
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        function onMouseMove(event){
            const mouseX = event.offsetX - props.sizeInfo.offset.x;
            const mouseY = event.offsetY - props.sizeInfo.offset.y;
            const unitSize = props.sizeInfo.tileSize / 5;
            if(
                mouseX > 0
                && mouseY > 0
                && mouseX < props.sizeInfo.mapSize.x * props.sizeInfo.tileSize
                && mouseY < props.sizeInfo.mapSize.y * props.sizeInfo.tileSize
            ){
                props.mouseMove(Math.floor(mouseX / unitSize), Math.floor(mouseY / unitSize));
            }
        }
        function onMouseClick(event){
            const mouseX = event.offsetX - props.sizeInfo.offset.x;
            const mouseY = event.offsetY - props.sizeInfo.offset.y;
            const unitSize = props.sizeInfo.tileSize / 5;
            if(
                mouseX > 0
                && mouseY > 0
                && mouseX < props.sizeInfo.mapSize.x * props.sizeInfo.tileSize
                && mouseY < props.sizeInfo.mapSize.y * props.sizeInfo.tileSize
            ){
                props.mouseClick(Math.floor(mouseX / unitSize), Math.floor(mouseY / unitSize));
            }
        }
        colRef.current.addEventListener("mousemove", onMouseMove);
        colRef.current.addEventListener("click", onMouseClick);
        return () => {
            colRef.current.removeEventListener("mousemove", onMouseMove);
            colRef.current.removeEventListener("click", onMouseClick);
        };
    }, [props.sizeInfo]);
    return (
        <Col id="game-map" ref={colRef}>
            <Stage width={size.width} height={size.height}>
                <Layer>
                    {props.mapTiles.map((tile, index) => (
                        <MapTile
                            key={index}
                            id={tile.tileId}
                            position={tile.position}
                            size={{
                                width: props.sizeInfo.tileSize,
                                height: props.sizeInfo.tileSize,
                            }}
                            offset={props.sizeInfo.offset}
                            rotate={tile.direction}
                        />
                    ))}
                </Layer>
                <Layer>
                    {Object.entries(props.houses).map(([key, house]) => (
                        <House
                            key={key}
                            house={house}
                            unitSize={props.sizeInfo.tileSize / 5}
                            offset={props.sizeInfo.offset}
                        />
                    ))}
                </Layer>
            </Stage>
        </Col>
    );
}

GameMap.propTypes = {
    mapTiles: PropTypes.arrayOf(PropTypes.shape({
        tileId: PropTypes.string.isRequired,
        direction: PropTypes.number.isRequired,
        position: PropTypes.shape({
            xTile: PropTypes.number.isRequired,
            yTile: PropTypes.number.isRequired
        }).isRequired,
    })),
    sizeInfo: PropTypes.shape({
        tileSize: PropTypes.number.isRequired,
        mapSize: {
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
        }, 
        offset: {
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
        },
    }),
    players: PropTypes.object,
    mouseMove: PropTypes.func,
    mouseClick: PropTypes.func,
    updateSizeInfo: PropTypes.func,
    houses: PropTypes.object,
};

const mapStateToProps = state => ({
    players: state.game.players,
    mapTiles: state.map.mapTiles,
    houses: state.map.houses,
    sizeInfo: state.map.sizeInfo,
});

const mapDispatchToProps = {
    mouseMove: (x, y) => mapEvent("mouse_move", {x, y}),
    mouseClick: (x, y) => mapEvent("mouse_click", {x, y}),
    updateSizeInfo: (payload) => mapEvent("update_size", payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(GameMap);
