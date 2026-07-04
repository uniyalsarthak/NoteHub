import { useState } from "react";

import Icon from "./Icon";
import NoteItem from "./NoteItem";

function Sidebar({
  pinnedNotes,
  otherNotes,
  selectedNote,
  openNote,
  deleteNote,
  togglePin,
  searchTerm,
  setSearchTerm,
  darkMode,
  setDarkMode,
  formatDate,
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Header */}

      <div className="sidebar-top">

        <button
          className="menu-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>

        {!collapsed && (
          <h1 className="logo">
            NoteHub
          </h1>
        )}

      </div>

      {!collapsed && (
        <>

          {/* Search */}

          <div className="search-box">

            <Icon
              name="search"
              size={18}
              className="search-icon"
            />

            <input
              className="search-input"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          {/* Theme */}


          {/* Pinned */}

          {pinnedNotes.length > 0 && (
            <>
              <h3 className="section-title">
                📌 Pinned
              </h3>

              {pinnedNotes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  selected={
                    selectedNote?.id === note.id
                  }
                  onClick={() =>
                    openNote(note)
                  }
                  onDelete={() =>
                    deleteNote(note.id)
                  }
                  onPin={() =>
                    togglePin(note.id)
                  }
                  formatDate={formatDate}
                />
              ))}
            </>
          )}

          {/* Notes */}

          <h3 className="section-title">
            Notes
          </h3>

          {otherNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              selected={
                selectedNote?.id === note.id
              }
              onClick={() =>
                openNote(note)
              }
              onDelete={() =>
                deleteNote(note.id)
              }
              onPin={() =>
                togglePin(note.id)
              }
              formatDate={formatDate}
            />
          ))}

        </>
      )}

    </div>
  );
}

export default Sidebar;