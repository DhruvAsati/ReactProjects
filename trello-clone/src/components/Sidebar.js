import React, { useContext, useState } from 'react';
import { ChevronRight, ChevronLeft, Plus, X } from 'react-feather';
import { Popover } from 'react-tiny-popover';
import { BoardContext } from '../context/BoardContext';

const Sidebar = () => {
    const blankBoard = {
        name: '',
        bgcolor: '#f60000',
        list: []
    };
    
    const [boardData, setBoarddata] = useState(blankBoard);
    const [collapsed, setCollapsed] = useState(false);
    const [showpop, setShowpop] = useState(false);
    const { allboard, setAllBoard } = useContext(BoardContext);

    const setActiveboard = (i) => {
        let newBoard = { ...allboard }
        newBoard.active = i;
        setAllBoard(newBoard);
    }

    const addBoard = () => {
        let newB = { ...allboard };
        newB.boards.push(boardData);
        setAllBoard(newB);
        setBoarddata(blankBoard);
        setShowpop(!showpop);
    }

    return (
        <div className={`bg-gray-900 h-[calc(100vh-3rem)] border-r border-gray-700 transition-all duration-500 flex-shrink-0 ${collapsed ? 'w-14' : 'w-72'}`}>
            {collapsed ? (
                <div className='p-2'>
                    <button onClick={() => setCollapsed(!collapsed)} className='hover:bg-gray-700 p-2 rounded'>
                        <ChevronRight size={18} className='text-gray-300' />
                    </button>
                </div>
            ) : (
                <div>
                    <div className="workspace p-3 flex justify-between items-center border-b border-gray-700">
                        <h4 className='text-white text-lg font-semibold'>Remote Dev's Workspace</h4>
                        <button onClick={() => setCollapsed(!collapsed)} className='hover:bg-gray-700 p-2 rounded'>
                            <ChevronLeft size={18} className='text-gray-300' />
                        </button>
                    </div>

                    <div className="boardlist px-3 py-2 flex justify-between items-center">
                        <h6 className='text-gray-400 text-sm font-medium'>Your Boards</h6>
                        <Popover
                            isOpen={showpop}
                            align='start'
                            positions={['right', 'top', 'bottom', 'left']}
                            content={
                                <div className='p-4 w-60 bg-gray-800 rounded-lg text-white shadow-lg'>
                                    <button onClick={() => setShowpop(!showpop)} className='absolute right-2 top-2 hover:bg-gray-700 p-1 rounded'><X size={16} /></button>
                                    <h4 className='text-md font-bold mb-3'>Create Board</h4>
                                    <img src="https://placehold.co/200x120/png" alt="" className='mb-3' />
                                    <div className="flex flex-col space-y-2 w-full">
                                        <label className='text-gray-400 text-sm' htmlFor="title">Board Title <span>*</span></label>
                                        <input value={boardData.name} onChange={(e) => setBoarddata({ ...boardData, name: e.target.value })} type="text" className='h-9 px-3 rounded-md w-full bg-gray-700 text-white focus:outline-none' />
                                        <label className='text-gray-400 text-sm' htmlFor="Color">Board Color</label>
                                        <input value={boardData.bgcolor} onChange={(e) => setBoarddata({ ...boardData, bgcolor: e.target.value })} type="color" className='h-9 w-full bg-gray-700 text-white rounded-md' />
                                        <button onClick={addBoard} className='w-full h-9 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500'>Create</button>
                                    </div>
                                </div>
                            }>
                            <button onClick={() => setShowpop(!showpop)} className='hover:bg-gray-700 p-2 rounded'>
                                <Plus size={18} className='text-gray-300' />
                            </button>
                        </Popover>
                    </div>

                    <ul className='mt-4'>
                        {allboard.boards && allboard.boards.map((x, i) => (
                            <li key={i}>
                                <button onClick={() => setActiveboard(i)} className='px-3 py-2 w-full text-sm flex items-center hover:bg-gray-700 text-white'>
                                    <span className='w-5 h-5 rounded-sm mr-2' style={{ backgroundColor: `${x.bgcolor}` }}></span>
                                    <span>{x.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
