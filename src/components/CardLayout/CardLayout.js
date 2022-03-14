import React from "react";
import Card from "./Card";

const CardLayout = ({
  notes,
  onDelete,
  onUpdate,
  onDone,
  showHideFlag,
  onTitleUpdate,
}) => {
  const newarr = [...notes].reverse();
  return (
    <div className="cardHolder">
      {newarr.map((note) => (
        <Card
          key={note.id}
          note={note}
          text={note.text}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onDone={onDone}
          onTitleUpdate={onTitleUpdate}
          showHideFlag={showHideFlag}
        />
      ))}
    </div>
  );
};

export default CardLayout;
