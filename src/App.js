import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CardLayout from "./components/CardLayout/CardLayout";
import { useEffect, useState } from "react";
import Palatte from "./components/Palatte/Palatte";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("Sticky-Notes")) || []
  );

  const [complete, setComplete] = useState(
    JSON.parse(localStorage.getItem("complete")) || []
  );

  useEffect(() => {
    localStorage.setItem("Sticky-Notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("complete", JSON.stringify(complete));
  }, [complete]);

  const deleteNoteHandler = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setComplete(complete.filter((note) => note.id !== id));
  };

  const updateNoteHandler = (text, id) => {
    const temp = [...notes];
    const i = temp.findIndex((note) => note.id === id);
    temp[i].text = text;
    setNotes(temp);
  };

  const titleUpdateHandler = (title, id) => {
    const temp = [...notes];
    const i = temp.findIndex((note) => note.id === id);
    temp[i].title = title;
    setNotes(temp);
  };

  const updateCompleteNoteHandler = (text, id) => {
    const temp = [...complete];
    const i = temp.findIndex((note) => note.id === id);
    temp[i].text = text;
    setComplete(temp);
  };

  const completeNoteHandler = (id) => {
    const temp = [...notes];
    setNotes(temp.filter((note) => note.id !== id));
    const t = temp.findIndex((note) => note.id === id);
    setComplete((old) => [...old, temp[t]]);
  };

  const formatDate = () => {
    const d = new Date();
    const date = d.getDate();
    let nDate, nMonth;
    if (date > 9) {
      nDate = date;
    } else {
      nDate = `0${date}`;
    }
    const month = d.getMonth() + 1;
    if (month > 9) {
      nMonth = month;
    } else {
      nMonth = `0${month}`;
    }
    const year = d.getFullYear();
    return `${nDate}/${nMonth}/${year}`;
  };

  const addNoteHandler = (color) => {
    if (window.location.pathname === "/complete") {
      const temps = [...complete];
      temps.push({
        title: "",
        text: "",
        date: formatDate(),
        color,
        id: Date.now(),
      });
      setComplete(temps);
    } else {
      const temp = [...notes];
      temp.push({
        title: "",
        text: "",
        date: formatDate(),
        color,
        id: Date.now(),
      });
      setNotes(temp);
    }
  };
  return (
    <>
      <Header />
      <div className="layout">
        <div className="main">
          <Palatte addNote={addNoteHandler} />
          <Routes>
            <Route
              path="/"
              element={
                <CardLayout
                  notes={notes}
                  onDelete={deleteNoteHandler}
                  onUpdate={updateNoteHandler}
                  onDone={completeNoteHandler}
                  onTitleUpdate={titleUpdateHandler}
                  showHideFlag={true}
                />
              }
            />
            <Route
              path="/complete"
              element={
                <CardLayout
                  notes={complete}
                  onDelete={deleteNoteHandler}
                  onUpdate={updateCompleteNoteHandler}
                  eye={false}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
