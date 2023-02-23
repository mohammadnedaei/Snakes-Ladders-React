import {FormControl, InputLabel, MenuItem, Select, Switch, TextField} from "@mui/material"
import "./Settings.css"
import {Fragment, useEffect, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import {InfoRounded} from "@mui/icons-material";
import { SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import SortableList from '../../config/SortableList';
import {useNavigate} from "react-router-dom";

const Settings = () => {
    const [name, setName] = useState("");
    const [players, setPlayers] = useState("");
    const [check, setCheck] = useState(false);
    const [skip, setSkip] = useState(false);
    const [dialog, setDialog] = useState(false);
    const cancelButtonRef = useRef(null)
    const [items, setItems] = useState(['blue', 'red', 'green', 'yellow', 'purple']);
    const navigate = useNavigate();
    const sortableListItem = {
        items: items
    }
    const onSortEnd = ({ oldIndex, newIndex }:any) => {
        setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
    };
    return (
        <div className="overflow-hidden bg-amber-50 shadow rounded-lg w-1/2 m-auto mt-20">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Game Settings</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Customize game settings before playing!</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Game Name</dt>
                        <TextField value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} id="outlined-basic" label="Name" variant="outlined" />
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Total Players</dt>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Players</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={players}
                                label="Players"
                                onChange={(e) => {
                                    setPlayers(e.target.value);}}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                                <MenuItem value={40}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Include CPU (BOT)?</dt>
                        <Switch onChange={(e) => {
                            if (check == false) {
                                setCheck(true);
                            }
                            else {
                                setCheck(false);
                            }
                            }} />
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Players Color Order (Drag and Drop to
                            change order - For example Player 1 is blue)</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <SortableList {...sortableListItem} onSortEnd={onSortEnd} />
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 play-btn-container">
                        <div>

                        </div>
                        <button onClick={() => {setDialog(true)}} type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Play
                        </button>
                    </div>
                </dl>
            </div>
            {dialog ? (
                <Transition.Root show={dialog} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setSkip}>
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
                                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 sm:mx-0 sm:h-10 sm:w-10">
                                                    <InfoRounded className="h-6 w-6 text-yellow-300" aria-hidden="true" />
                                                </div>
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                        Start New Game
                                                    </Dialog.Title>
                                                    <div className="mt-2">
                                                        <p className="text-sm text-gray-500">
                                                            Are you sure you want to continue with this info? You can get back to main menu in game!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => {
                                                        setDialog(false)
                                                        setSkip(true)
                                                        navigate("/board", {
                                                            state: {
                                                                name: name,
                                                                players: players,
                                                                check: check,
                                                                items: items
                                                            }
                                                        });
                                                    }
                                                }
                                            >
                                                Continue
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
        </div>
    )
}
export default Settings