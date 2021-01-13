import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Col} from "react-bootstrap";
import {Stage, Layer} from "react-konva";

import "./GameMap.css";
import MapTile from "./MapTile";

function GameMap(props){
    const colRef = useRef(null);
    const [size, setSize] = useState({width: 0, height:0});
    const [tileSize, setTileSize] = useState({
        size: 0, 
        maxSize: {
            x: 0, 
            y: 0
        }, 
        offset: {
            x: 0, 
            y: 0
        },
        mouseOffset:{
            x: 0,
            y: 0
        }
    });

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
                const size = colRef.current.offsetWidth / xSize;
                setTileSize({
                    size,
                    maxSize: {
                        x: size * xSize,
                        y: size * ySize,
                    },
                    offset: {
                        x: size / 2,
                        y: (colRef.current.offsetHeight / 2) - (size * ySize / 2) + size / 2,
                    },
                    mouseOffset: {
                        x: 0,
                        y: (colRef.current.offsetHeight / 2) - (size * ySize / 2),
                    }
                });
            }else{
                const size = colRef.current.offsetHeight / ySize;
                setTileSize({
                    size,
                    maxSize: {
                        x: size * xSize,
                        y: size * ySize,
                    },
                    offset: {
                        x: (colRef.current.offsetWidth / 2) - (size * xSize / 2) + size / 2,
                        y: size / 2,
                    },
                    mouseOffset: {
                        x: (colRef.current.offsetWidth / 2) - (size * xSize / 2),
                        y: 0,
                    }
                });
            }
        }
        function onMouseMove(event){
            const mouseX = event.offsetX - tileSize.mouseOffset.x;
            const mouseY = event.offsetY - tileSize.mouseOffset.y;
            const unitSize = tileSize.size / 5;
            if(mouseX > 0 && mouseY > 0 && mouseX < tileSize.maxSize.x && mouseY < tileSize.maxSize.y){
                console.log(`X: ${Math.floor(mouseX / unitSize)}, Y: ${Math.floor(mouseY / unitSize)}`);
            }
        }
        window.addEventListener("resize", onResize);
        colRef.current.addEventListener("mousemove", onMouseMove);
        onResize();
        return () => {
            window.removeEventListener("resize", onResize);
            colRef.current.removeEventListener("mousemove", onMouseMove);
        };
    });
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
                                width: tileSize.size,
                                height: tileSize.size,
                            }}
                            offset={tileSize.offset}
                            rotate={tile.direction}
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
    players: PropTypes.object,
};

const mapStateToProps = state => ({
    mapTiles: state.game.mapTiles,
    players: state.game.players,
});

export default connect(mapStateToProps, null)(GameMap);