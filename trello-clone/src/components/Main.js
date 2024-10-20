import React, { useContext, useState } from "react";
import { MoreHorizontal, UserPlus, Edit2, Check } from "react-feather";
import CardAdd from "./CardAdd";
import { BoardContext } from "../context/BoardContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import AddList from "./AddList";

const Main = () => {
  const { allboard, setAllBoard } = useContext(BoardContext);
  const bdata = allboard.boards[allboard.active];

  // States for editing cards
  const [editCardId, setEditCardId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  function onDragEnd(res) {
    if (!res.destination) {
      return;
    }
    const newList = [...bdata.list];
    const s_id = parseInt(res.source.droppableId);
    const d_id = parseInt(res.destination.droppableId);
    const [removed] = newList[s_id - 1].items.splice(res.source.index, 1);
    newList[d_id - 1].items.splice(res.destination.index, 0, removed);

    let board_ = { ...allboard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  }

  // Generate unique ID for new items
  const generateId = () => Math.random().toString(36).substring(2, 9);

  const cardData = (e, ind) => {
    let newList = [...bdata.list];
    newList[ind].items.push({ id: generateId(), title: e });

    let board_ = { ...allboard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

  const listData = (e) => {
    let newList = [...bdata.list];
    newList.push({ id: generateId(), title: e, items: [] });

    let board_ = { ...allboard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
  };

  // Edit card functionality
  const editCard = (listIndex, cardIndex, newTitle) => {
    let newList = [...bdata.list];
    newList[listIndex].items[cardIndex].title = newTitle;
    let board_ = { ...allboard };
    board_.boards[board_.active].list = newList;
    setAllBoard(board_);
    setEditCardId(null); // Exit edit mode
  };

  return (
    <div
      className="flex flex-col w-full"
      style={{ backgroundColor: `${bdata.bgcolor}` }}
    >
      <div className="p-3 bg-black flex justify-between w-full bg-opacity-60">
        <h2 className="text-lg font-semibold text-white">{bdata.name}</h2>
        <div className="flex items-center">
          <button className="bg-gray-300 hover:bg-gray-400 h-8 text-gray-800 px-3 py-1 mr-2 rounded-md flex items-center">
            <UserPlus size={16} className="mr-2" /> Share
          </button>
          <button className="hover:bg-gray-600 p-2 rounded-full">
            <MoreHorizontal size={16} className="text-white" />
          </button>
        </div>
      </div>
      <div className="flex-grow relative p-3 flex overflow-x-auto">
        <DragDropContext onDragEnd={onDragEnd}>
          {bdata.list &&
            bdata.list.map((x, listIndex) => (
              <div
                key={x.id}
                className="mr-3 w-64 h-auto bg-zinc-900 p-3 rounded-lg"
              >
                <div className="list-body">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">{x.title}</span>
                    <button className="hover:bg-zinc-700 p-1 rounded-full">
                      <MoreHorizontal size={16} className="text-white" />
                    </button>
                  </div>
                  <Droppable droppableId={x.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? "#333"
                            : "transparent",
                        }}
                        {...provided.droppableProps}
                        className="mb-3 space-y-2"
                      >
                        {x.items &&
                          x.items.map((item, cardIndex) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={cardIndex}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="flex justify-between items-center bg-gray-800 text-white p-2 rounded-md shadow-sm border-2 border-gray-600 hover:border-gray-400"
                                >
                                  {editCardId === item.id ? (
                                    <input
                                      type="text"
                                      className="bg-gray-700 text-white p-1 rounded w-full"
                                      value={editedTitle}
                                      onChange={(e) =>
                                        setEditedTitle(e.target.value)
                                      }
                                      onBlur={() =>
                                        editCard(
                                          listIndex,
                                          cardIndex,
                                          editedTitle
                                        )
                                      }
                                    />
                                  ) : (
                                    <>
                                      <span className="flex-grow">
                                        {item.title}
                                      </span>
                                      <button
                                        className="hover:bg-gray-700 p-1 rounded-full"
                                        onClick={() => {
                                          setEditCardId(item.id);
                                          setEditedTitle(item.title);
                                        }}
                                      >
                                        <Edit2
                                          size={16}
                                          className="text-white"
                                        />
                                      </button>
                                    </>
                                  )}
                                </div>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>

                  <CardAdd getcard={(e) => cardData(e, listIndex)} />
                </div>
              </div>
            ))}
        </DragDropContext>

        <AddList getlist={(e) => listData(e)} />
      </div>
    </div>
  );
};

export default Main;
