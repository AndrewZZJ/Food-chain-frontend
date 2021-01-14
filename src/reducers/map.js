import {
    mapTiles as ConfigTiles,
    houseTiles as ConfigHouses,
}  from "../gameConfigs";

const initialState = {
    mapTiles: [
        {
            tileId: "M14",
            direction: 1,
            position: {
                xTile: 0,
                yTile: 0
            }
        },
        {
            tileId: "M18",
            direction: 2,
            position: {
                xTile: 1,
                yTile: 0
            }
        },
        {
            tileId: "M11",
            direction: 1,
            position: {
                xTile: 2,
                yTile: 0
            }
        },
        {
            tileId: "M10",
            direction: 0,
            position: {
                xTile: 0,
                yTile: 1
            }
        },
        {
            tileId: "M12",
            direction: 1,
            position: {
                xTile: 1,
                yTile: 1
            }
        },
        {
            tileId: "M17",
            direction: 1,
            position: {
                xTile: 2,
                yTile: 1
            }
        },
        {
            tileId: "M16",
            direction: 2,
            position: {
                xTile: 0,
                yTile: 2
            }
        },
        {
            tileId: "M05",
            direction: 2,
            position: {
                xTile: 1,
                yTile: 2
            }
        },
        {
            tileId: "M03",
            direction: 3,
            position: {
                xTile: 2,
                yTile: 2
            }
        },
    ],
    mouseHoverPos: null,
    mouseClickPos: null,
    sizeInfo: {
        tileSize: 0, 
        mapSize: {
            x: 0, 
            y: 0
        }, 
        offset: {
            x: 0, 
            y: 0
        },
    },
    arrayMap: null,
    houses: {
        H1: {
            fixed: false,
            garden: true,
            order: 1,
            position: [5, 3],
            direction: 0,
            demands: ["pizza"],
        },
        H2: {
            fixed: false,
            garden: true,
            order: 2,
            position: [1, 3],
            direction: 2,
            demands: ["burger", "beer"],
        },
        H3: {
            fixed: false,
            garden: true,
            order: 3,
            position: [11, 3],
            direction: 1,
            demands: ["beer", "beer", "beer"],
        },
        H4: {
            fixed: false,
            garden: true,
            order: 10,
            position: [3, 9],
            direction: 3,
            demands: ["coke", "lemonade", "beer", "beer", "beer"],
        },
        H5: {
            fixed: true,
            garden: true,
            order: 16,
            position: [1, 6],
            direction: 0,
            demands: ["coke", "lemonade", "beer", "beer", "burger"],
        },
        H6: {
            fixed: true,
            garden: true,
            order: 8,
            position: [6, 12],
            direction: 3,
            demands: ["coke", "lemonade", "beer", "beer", "burger"],
        },
    },
};

export default (state = initialState, action) => {
    switch(action.type) {
    case "socket/update/setup_map":
        return {
            ...state,
            mapTiles: action.payload.tiles,
            arrayMap: setupArrayMap(action.payload.tiles),
            houses: setupHouses(action.payload.tiles),
        };
    case "game/map/mouse_move":
        return {
            ...state,
            mouseHoverPos: action.payload,
        };
    case "game/map/mouse_click":
        return {
            ...state,
            mouseClickPos: action.payload,
        };
    case "game/map/update_size":
        return {
            ...state,
            sizeInfo: action.payload,
        };
    default:
        return state;
    }
};

export const mapEvent = (eventName, payload) => ({
    type: `game/map/${eventName}`,
    payload,
});

function getXYFromTile(tx, ty, x, y, rotation){
    let rotX = x, rotY = y;
    switch(rotation){
    case 1:
        rotX = 4 - y;
        rotY = x;
        break;
    case 2:
        rotX = 4 - x;
        rotY = 4 - y;
        break;
    case 3:
        rotX = y;
        rotY = 4 - x;
        break;
    }
    return [tx * 5 + rotX, ty * 5 + rotY];
}

function setupArrayMap(mapTiles){
    function getMapSize(val){
        if(val <= 2){
            return [1, 1];
        }
        let divisors = [];
        for(let i = 2; i <= Math.sqrt(val); ++i){
            if(val % i == 0){
                divisors.push(i);
            }
        }
        const last = divisors.pop();
        return (divisors.length % 2 == 0) ? [last, last] : [val / last, last];
    }
    const [xSize, ySize] = getMapSize(mapTiles.length);
    let arrayMap = [...Array(xSize * 5).keys()].map(() => (new Array(ySize * 5)).fill(null));
    mapTiles.forEach(tile => {
        const tileConf = ConfigTiles[tile.tileId];
        // Draw crossing
        if(tileConf.crossing){
            tileConf.crossing.forEach(roadPos => {
                const [x, y] = getXYFromTile(tile.position.xTile, tile.position.yTile, roadPos[0], roadPos[1], tile.direction);
                arrayMap[x][y] = "cross";
            });
        }
        // Draw road
        if(tileConf.roads){
            tileConf.roads.forEach(roadPos => {
                const [x, y] = getXYFromTile(tile.position.xTile, tile.position.yTile, roadPos[0], roadPos[1], tile.direction);
                arrayMap[x][y] = "road";
            });
        }
        // Draw drinks
        if(tileConf.drinks){
            tileConf.drinks.forEach(drink => {
                const [x, y] = getXYFromTile(tile.position.xTile, tile.position.yTile, drink.position[0], drink.position[1], tile.direction);
                arrayMap[x][y] = drink.type;
            });
        }
        // Draw houses
        if(tileConf.houseTiles){
            tileConf.houseTiles.forEach(house => {
                house.positions.forEach(housePos => {
                    const [x, y] = getXYFromTile(tile.position.xTile, tile.position.yTile, housePos[0], housePos[1], tile.direction);
                    arrayMap[x][y] = house.tileId;
                });
            });
        }
    });
    return arrayMap;
}

function setupHouses(mapTiles){
    let houses = {};
    mapTiles.forEach(tile => {
        const tileConf = ConfigTiles[tile.tileId];
        if(tileConf.houseTiles){
            tileConf.houseTiles.forEach(houseTile => {
                const houseConf = ConfigHouses[houseTile.tileId];
                houses[houseTile.tileId] = {
                    ...houseConf,
                    demands: [],
                    position: getXYFromTile(
                        tile.position.xTile,
                        tile.position.yTile,
                        tileConf.houseTiles.positions[0][0],
                        tileConf.houseTiles.positions[0][1],
                        tile.direction
                    ),
                    direction: tile.direction,
                };
            });
        }
    });
    return houses;
}