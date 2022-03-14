import React from "react";
import "./CardLayout.css";
import { BsCheckSquareFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPinAngleFill } from "react-icons/bs";

const Card = ({
  note,
  onDelete,
  onUpdate,
  onDone,
  showHideFlag,
  onTitleUpdate,
}) => {
  const updateText = (text) => {
    onUpdate(text, note.id);
  };

  const updateTitle = (title) => {
    onTitleUpdate(title, note.id);
  };

  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: note.color,
        }}
      >
        <div className="pin">
          <BsFillPinAngleFill className="in" />
        </div>
        <input
          type="text"
          name="title"
          className="title"
          value={note.title}
          onChange={(event) => updateTitle(event.target.value)}
          style={{ backgroundColor: note.color }}
        />
        <textarea
          type="text"
          className="cardInput"
          onChange={(event) => updateText(event.target.value)}
          value={note.text}
        />
        <div className="lower">
          <div className="date">{note.date}</div>
          <div className="functionality">
            {showHideFlag && (
              <div className="hide">
                <BsCheckSquareFill onClick={() => onDone(note.id)} />
              </div>
            )}
            <div className="delete">
              <AiFillDelete onClick={() => onDelete(note.id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
