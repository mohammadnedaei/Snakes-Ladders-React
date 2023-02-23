// @ts-nocheck
import {useLocation, useNavigate} from "react-router-dom";
import Dice from 'react-dice-roll';
import "./Board.css";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import BoardImage from "../../assets/board.png"
import {Fragment, useEffect, useRef, useState} from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import LeftPositions from "../../config/LeftPositions"
import BottomPositions from "../../config/BottomPositions"
import {Dialog, Transition} from "@headlessui/react";
import {InfoRounded} from "@mui/icons-material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const playersLocations: any = []
let order = 0
const ladderStart = [2,4,6,20,30,52,57,71]
const ladderEnd = [23,68,45,59,96,72,96,92]
const snakeStart = [43,50,56,73,84,87,98]
const snakeEnd = [17,5,8,15,58,49,40]
const Board = () => {
    const customInit = (engine: Engine) => {
        // this adds the preset to tsParticles, you can safely use the
        loadConfettiPreset(engine);
    }
    const particlesInit  = {
        init: customInit
    }
    const options = {
        emitters: [
            {
                life: {
                    duration: 500000,
                    count: 1,
                },
                position: {
                    x: 25,
                    y: 0,
                },

                particles: {
                    move: {
                        direction: "top-right",
                    },
                    color: {
                        value: [
                            "#1E00FF",
                            "#FF0061",
                            "#E1FF00",
                            "#00FF9E"
                        ]
                    },
                    rotate: {
                        value: {
                            min: 0,
                            max: 360
                        },
                        direction: "random",
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    tilt: {
                        direction: "random",
                        enable: true,
                        value: {
                            min: 0,
                            max: 360
                        },
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    size: {
                        value: 5,
                        animation: {
                            enable: true,
                            startValue: "min",
                            count: 1,
                            speed: 16,
                            sync: true
                        }
                    },
                    roll: {
                        darken: {
                            enable: true,
                            value: 25
                        },
                        enlighten: {
                            enable: true,
                            value: 25
                        },
                        enable: true,
                        speed: {
                            min: 5,
                            max: 15
                        }
                    },
                    wobble: {
                        distance: 30,
                        enable: true,
                        speed: {
                            min: -7,
                            max: 7
                        }
                    },
                    shape: {
                        type: [
                            "circle",
                            "square"
                        ],
                        options: {}
                    }
                },
                rate: {
                    quantity: 8
                }
            },
            {
                life: {
                    duration: 500000,
                    count: 1,
                },
                position: {
                    x: 75,
                    y: 0,
                },
                particles: {
                    move: {
                        direction: "top-right",
                    },
                    color: {
                        value: [
                            "#1E00FF",
                            "#FF0061",
                            "#E1FF00",
                            "#00FF9E"
                        ]
                    },
                    rotate: {
                        value: {
                            min: 0,
                            max: 360
                        },
                        direction: "random",
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    tilt: {
                        direction: "random",
                        enable: true,
                        value: {
                            min: 0,
                            max: 360
                        },
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    size: {
                        value: 5,
                        animation: {
                            enable: true,
                            startValue: "min",
                            count: 1,
                            speed: 16,
                            sync: true
                        }
                    },
                    roll: {
                        darken: {
                            enable: true,
                            value: 25
                        },
                        enlighten: {
                            enable: true,
                            value: 25
                        },
                        enable: true,
                        speed: {
                            min: 5,
                            max: 15
                        }
                    },
                    wobble: {
                        distance: 30,
                        enable: true,
                        speed: {
                            min: -7,
                            max: 7
                        }
                    },
                    shape: {
                        type: [
                            "circle",
                            "square"
                        ],
                        options: {}
                    }
                },
                rate: {
                    quantity: 8
                }
            },
        ],
        preset: "confetti",
    };
    const {state} = useLocation();
    const {name, players, check, items} = state;
    const player1Color = items[0]
    const player2Color = items[1]
    const player3Color = items[2]
    const player4Color = items[3]
    const player5Color = items[4]
    const [turn , setTurn] = useState("Player 1's Turn")
    const [win , setWin] = useState(false)
    const [open , setOpen] = useState(false)
    const [dialog , setDialog] = useState(false)
    const cancelButtonRef = useRef(null)
    const navigate = useNavigate();

    const [winnerText, setWinnerText] = useState("No one")
    const [player1LeftPosition, setPlayer1LeftPosition] = useState("1.4%")
    const [player2LeftPosition, setPlayer2LeftPosition] = useState("4.6%")
    const [player3LeftPosition, setPlayer3LeftPosition] = useState("7.8%")
    const [player4LeftPosition, setPlayer4LeftPosition] = useState("11%")
    const [player5LeftPosition, setPlayer5LeftPosition] = useState("14.2%")
    const [player1BottomPosition, setPlayer1BottomPosition] = useState("1.5%")
    const [player2BottomPosition, setPlayer2BottomPosition] = useState("1.5%")
    const [player3BottomPosition, setPlayer3BottomPosition] = useState("1.5%")
    const [player4BottomPosition, setPlayer4BottomPosition] = useState("1.5%")
    const [player5BottomPosition, setPlayer5BottomPosition] = useState("1.5%")
    let totalPlayers = players / 10
    let flag = true
    useEffect(() => {
            if (check == true) {
                totalPlayers += 1
            }
            for (let i = 0; i < totalPlayers; i++) {
                console.log("H")
                playersLocations.push(0)
            }

    },[])
    const handleRoll = (value:any) => {
        console.log("Dice Num is: " + value)
        handleOrder(value)
    }
    const handleSave = () => {
        setOpen(true)
        let exportData:string = state.name + "/" + state.check + "/" + totalPlayers + "/" + state.items + "/" + playersLocations
        setTimeout(() => {
            download("Saved-Game.txt", exportData)
            setOpen(false)
        }, 3500)
    }
    const download = (filename:string, content:string) => {
        let pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        pom.setAttribute('download', filename);
        pom.click();
    }
    const handleOrder = (num:any) => {
        console.log(playersLocations)
        if (playersLocations[order] == 0) {
            if (num == 6) {
                playersLocations[order] += 1
            }
        }

        else if (playersLocations[order] + num > 100) {
        }
        else if (playersLocations[order] + num == 100) {
            playersLocations[order] += num
            handleGameEnd(order)
        }
        else if (playersLocations[order] + num < 100) {
            playersLocations[order] += num
        }
        handleBoardUpdate()
        if (num == 6) {
            order -= 1
        }
        else if (order == playersLocations.length - 1) {
            order = -1
        }
        order += 1
        handleTurn(order)
        console.log("done")
    }
    const handleGameEnd = (order:number) => {
        setWinnerText("🏆 Player " + (order+1) + " 🏆")
        setWin(true)
    }
    const handleTurn = (order:number) => {
            setTurn("Player " + (order + 1) + "'s Turn")
    }
    const handleBoardUpdate = () => {
        if (order == 0) {
            const lPos = LeftPositions(playersLocations[order])
            const bPos = BottomPositions(playersLocations[order])
            setPlayer1LeftPosition(lPos)
            setPlayer1BottomPosition(bPos)
            let useLadder = checkLadder(playersLocations[order])
            let useSnake = checkSnake(playersLocations[order])
            if (useLadder) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer1LeftPosition(lPos)
                    setPlayer1BottomPosition(bPos)
                }, 600)
            }
            if (useSnake) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer1LeftPosition(lPos)
                    setPlayer1BottomPosition(bPos)
                }, 600)
            }
        }
        else if (order == 1) {
            const lPos = LeftPositions(playersLocations[order])
            const bPos = BottomPositions(playersLocations[order])
            setPlayer2LeftPosition(lPos)
            setPlayer2BottomPosition(bPos)
            let useLadder = checkLadder(playersLocations[order])
            let useSnake = checkSnake(playersLocations[order])
            if (useLadder) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer2LeftPosition(lPos)
                    setPlayer2BottomPosition(bPos)
                }, 600)
            }
            if (useSnake) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer2LeftPosition(lPos)
                    setPlayer2BottomPosition(bPos)
                }, 600)
            }
        }
        else if (order == 2) {
            const lPos = LeftPositions(playersLocations[order])
            const bPos = BottomPositions(playersLocations[order])
            setPlayer3LeftPosition(lPos)
            setPlayer3BottomPosition(bPos)
            let useLadder = checkLadder(playersLocations[order])
            let useSnake = checkSnake(playersLocations[order])
            if (useLadder) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer3LeftPosition(lPos)
                    setPlayer3BottomPosition(bPos)
                }, 600)
            }
            if (useSnake) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer3LeftPosition(lPos)
                    setPlayer3BottomPosition(bPos)
                }, 600)
            }
        }
        else if (order == 3) {
            const lPos = LeftPositions(playersLocations[order])
            const bPos = BottomPositions(playersLocations[order])
            setPlayer4LeftPosition(lPos)
            setPlayer4BottomPosition(bPos)
            let useLadder = checkLadder(playersLocations[order])
            let useSnake = checkSnake(playersLocations[order])
            if (useLadder) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer4LeftPosition(lPos)
                    setPlayer4BottomPosition(bPos)
                }, 600)
            }
            if (useSnake) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer4LeftPosition(lPos)
                    setPlayer4BottomPosition(bPos)
                }, 600)
            }
        }
        else if (order == 4) {
            const lPos = LeftPositions(playersLocations[order])
            const bPos = BottomPositions(playersLocations[order])
            setPlayer5LeftPosition(lPos)
            setPlayer5BottomPosition(bPos)
            let useLadder = checkLadder(playersLocations[order])
            let useSnake = checkSnake(playersLocations[order])
            if (useLadder) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer5LeftPosition(lPos)
                    setPlayer5BottomPosition(bPos)
                }, 600)
            }
            if (useSnake) {
                const lPos = LeftPositions(playersLocations[order])
                const bPos = BottomPositions(playersLocations[order])
                setTimeout(() => {
                    setPlayer5LeftPosition(lPos)
                    setPlayer5BottomPosition(bPos)
                }, 600)
            }
        }
    }
    const checkLadder = (pos :number) => {
        let isLadder = false
        for (let i = 0; i < ladderStart.length; i++) {
            if (ladderStart[i] == pos) {
                playersLocations[order] = ladderEnd[i]
                isLadder = true
            }
        }
        return isLadder
    }
    const checkSnake = (pos: number) => {
        let isSnake = false
        for (let i = 0; i < snakeStart.length; i++) {
            if (snakeStart[i] == pos) {
                playersLocations[order] = snakeEnd[i]
                isSnake = true
            }
        }
        return isSnake
    }
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="game-board columns-2">
            <div className="board-image-container">
                <h1 className="game-name">{name}</h1>
                <img alt="board-image" className="board-image" width="600" height="600" src={BoardImage} />
                <div className="player-1" style={{backgroundColor: player1Color, left: player1LeftPosition, bottom: player1BottomPosition}}></div>
                <div className="player-2" style={{backgroundColor: player2Color, left: player2LeftPosition, bottom: player2BottomPosition}}></div>
                <div className="player-3" style={{backgroundColor: player3Color, left: player3LeftPosition, bottom: player3BottomPosition}}></div>
                <div className="player-4" style={{backgroundColor: player4Color, left: player4LeftPosition, bottom: player4BottomPosition}}></div>
                <div className="player-5" style={{backgroundColor: player5Color, left: player5LeftPosition, bottom: player5BottomPosition}}></div>
            </div>
            <div>
                <div className="stats-container">
                    <div className="stats">
                        <h1>Game Status: {turn}</h1>
                        <h2>Player 1: <span>{playersLocations[0]}</span></h2>
                        <h2>Player 2: <span>{playersLocations[1]}</span></h2>
                        <h2>Player 3: <span>{playersLocations[2]}</span></h2>
                        <h2>Player 4: <span>{playersLocations[3]}</span></h2>
                        <h2>Player 5 (CPU): <span>{playersLocations[4]}</span></h2>
                    </div>
                </div>
                <div className="winner-container">
                    <div className="winner">
                        <h4>Winner is: <span>{winnerText}</span></h4>
                    </div>
                </div>
                <div className="dice-container">
                    <Dice  rollingTime={1300} size={150} onRoll={(value) => handleRoll(value)} />
                </div>
            </div>
            {win ? <Particles options={options} {...particlesInit} /> : null}
            <div onClick={() => setDialog(true)} className="close"><CloseIcon className="h-12 w-12 text-white m-auto close-icon" aria-hidden="true"/></div>
            <div className="save" onClick={() => handleSave()}><SaveIcon className="h-12 w-12 text-white m-auto save-icon" aria-hidden="true"/></div>
            {dialog ? (
                <Transition.Root show={dialog} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setDialog}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500 sm:mx-0 sm:h-10 sm:w-10">
                                                    <InfoRounded className="h-6 w-6 text-yellow-300" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                        Quit to main menu
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Are you sure you want to quit this game? any unsaved
                                                            progress will be lost and you will go to main menu.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => {
                                                    setDialog(false)
                                                    navigate("/");
                                                }
                                                }
                                            >
                                                Quit
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setDialog(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            ) : null}
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </div>
    )
}
export default Board