// import { useState, useEffect } from "react";
// import Sidebar from "./components/Sidebar";
// import NoteViewer from "./components/NoteViewer";
// import NoteEditor from "./components/NoteEditor";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [selectedNote, setSelectedNote] = useState(null);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterTag, setFilterTag] = useState("");

//   const [isEditing, setIsEditing] = useState(false);

//   const [editTitle, setEditTitle] = useState("");
//   const [editContent, setEditContent] = useState("");
//   const [editTags, setEditTags] = useState("");
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   // ---------- Load Notes ----------
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("notes"));

//     if (saved && saved.length) {
//       setNotes(saved);
//       setSelectedNote(saved[0]);
//     } else {
//       const initialNotes = [
//         {
//           id: 1,
//           title: "Welcome to Notes App",
//           content:
//             "This is your first note!\n\nFeatures:\n• Rich text formatting\n• Tags\n• Search\n• Local Storage",
//           tags: ["welcome", "tutorial"],
//           createdAt: new Date().toISOString(),
//           updatedAt: new Date().toISOString(),
//         },
//       ];

//       setNotes(initialNotes);
//       setSelectedNote(initialNotes[0]);
//     }
//   }, []);

//   // ---------- Save Notes ----------
//   useEffect(() => {
//     if (notes.length) {
//       localStorage.setItem("notes", JSON.stringify(notes));
//     }
//   }, [notes]);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.body.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   // ---------- Create ----------
//   const createNote = () => {
//     const newNote = {
//       id: Date.now(),
//       title: "Untitled Note",
//       content: "",
//       tags: [],
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     };

//     setNotes([newNote, ...notes]);

//     setSelectedNote(newNote);

//     setIsEditing(true);

//     setEditTitle(newNote.title);
//     setEditContent("");
//     setEditTags("");
//   };

//   // ---------- Delete ----------
//   const deleteNote = (id) => {
//     const updated = notes.filter((note) => note.id !== id);

//     setNotes(updated);

//     if (selectedNote?.id === id) {
//       setSelectedNote(updated[0] || null);
//     }
//   };

//   // ---------- Edit ----------
//   const startEditing = () => {
//     if (!selectedNote) return;

//     setEditTitle(selectedNote.title);
//     setEditContent(selectedNote.content);
//     setEditTags(selectedNote.tags.join(", "));

//     setIsEditing(true);
//   };

//   // ---------- Save ----------
//   const saveEdit = () => {
//     const updatedNote = {
//       ...selectedNote,

//       title: editTitle || "Untitled Note",

//       content: editContent,

//       tags: editTags
//         .split(",")
//         .map((t) => t.trim())
//         .filter(Boolean),

//       updatedAt: new Date().toISOString(),
//     };

//     const updatedNotes = notes.map((note) =>
//       note.id === selectedNote.id ? updatedNote : note
//     );

//     setNotes(updatedNotes);

//     setSelectedNote(updatedNote);

//     setIsEditing(false);
//   };

//   const cancelEdit = () => {
//     setIsEditing(false);
//   };

//   // ---------- Format Date ----------
//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   };

//   // ---------- Toolbar Formatting ----------
//   const applyFormatting = (type) => {
//     const textarea = document.getElementById("note-content");

//     if (!textarea) return;

//     const start = textarea.selectionStart;
//     const end = textarea.selectionEnd;

//     const selected = editContent.substring(start, end);

//     let formatted = selected;

//     switch (type) {
//       case "bold":
//         formatted = `**${selected}**`;
//         break;

//       case "italic":
//         formatted = `*${selected}*`;
//         break;

//       case "list":
//         formatted = `• ${selected}`;
//         break;

//       default:
//         break;
//     }

//     const newContent =
//       editContent.substring(0, start) +
//       formatted +
//       editContent.substring(end);

//     setEditContent(newContent);
//   };

//   // ---------- Search ----------
//   const allTags = [...new Set(notes.flatMap((n) => n.tags))];

//   const filteredNotes = notes.filter((note) => {
//     const search =
//       note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       note.content.toLowerCase().includes(searchTerm.toLowerCase());

//     const tag = !filterTag || note.tags.includes(filterTag);

//     return search && tag;
//   });

//   return (
//     <div className="app-container">
//       <Sidebar
//         notes={filteredNotes}
//         selectedNote={selectedNote}
//         setSelectedNote={setSelectedNote}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         filterTag={filterTag}
//         setFilterTag={setFilterTag}
//         allTags={allTags}
//         createNote={createNote}
//         deleteNote={deleteNote}
//         formatDate={formatDate}
//         setIsEditing={setIsEditing}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />

//       <div className="main-content">
//         {!selectedNote ? (
//           <div className="empty-state">
//             <div className="empty-state-content">
//               <h3>No note selected</h3>
//               <p>Select a note or create a new one.</p>
//             </div>
//           </div>
//         ) : isEditing ? (
//           <NoteEditor
//             editTitle={editTitle}
//             setEditTitle={setEditTitle}
//             editContent={editContent}
//             setEditContent={setEditContent}
//             editTags={editTags}
//             setEditTags={setEditTags}
//             saveEdit={saveEdit}
//             cancelEdit={cancelEdit}
//             applyFormatting={applyFormatting}
//           />
//         ) : (
//           <NoteViewer
//             note={selectedNote}
//             startEditing={startEditing}
//             formatDate={formatDate}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import NoteViewer from "./components/NoteViewer";
import NoteEditor from "./components/NoteEditor";

function App() {
  // ---------------- NOTES ----------------

  const [notes, setNotes] = useState([]);

  const [selectedNote, setSelectedNote] = useState(null);

  const [showHome, setShowHome] = useState(true);

  // ---------------- SEARCH ----------------

  const [searchTerm, setSearchTerm] = useState("");

  const [filterTag, setFilterTag] = useState("");

  // ---------------- EDIT ----------------

  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState("");

  const [editContent, setEditContent] = useState("");

  const [editTags, setEditTags] = useState("");

  const [editImage, setEditImage] = useState("");

  // ---------------- THEME ----------------

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // ---------------- LOAD NOTES ----------------

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    } else {
      const demo = [
        {
          id: 1,
          title: "Welcome to NoteHub",
          content:
            "Create your first note.\n\nPin important notes.\nSearch instantly.\nEnjoy Dark Mode!",
          tags: ["welcome"],
          pinned: true,
          image: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];

      setNotes(demo);

      localStorage.setItem("notes", JSON.stringify(demo));
    }
  }, []);

  // ---------------- SAVE NOTES ----------------

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // ---------------- THEME ----------------

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // ---------------- DATE ----------------

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // ---------------- SEARCH ----------------

  const allTags = [...new Set(notes.flatMap((note) => note.tags))];

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag =
      filterTag === "" || note.tags.includes(filterTag);

    return matchesSearch && matchesTag;
  });

  const pinnedNotes = filteredNotes.filter((n) => n.pinned);

  const otherNotes = filteredNotes.filter((n) => !n.pinned);


  // ---------------- CREATE NOTE ----------------

  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      content: "",
      tags: [],
      pinned: false,
      image: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNotes([newNote, ...notes]);

    setSelectedNote(newNote);

    setShowHome(false);

    setIsEditing(true);

    setEditTitle(newNote.title);
    setEditContent("");
    setEditTags("");
    setEditImage("");
  };

  // ---------------- OPEN NOTE ----------------

  const openNote = (note) => {
    setSelectedNote(note);

    setShowHome(false);

    setIsEditing(false);
  };

  // ---------------- CLOSE NOTE ----------------

  const closeNote = () => {
    setSelectedNote(null);

    setShowHome(true);

    setIsEditing(false);
  };

  // ---------------- DELETE ----------------

  const deleteNote = (id) => {
    const updated = notes.filter((note) => note.id !== id);

    setNotes(updated);

    if (selectedNote?.id === id) {
      closeNote();
    }
  };

  // ---------------- START EDIT ----------------

  const startEditing = () => {
    if (!selectedNote) return;

    setEditTitle(selectedNote.title);

    setEditContent(selectedNote.content);

    setEditTags(selectedNote.tags.join(", "));

    setEditImage(selectedNote.image || "");

    setIsEditing(true);
  };

  // ---------------- SAVE ----------------

  const saveEdit = () => {
    if (!selectedNote) return;

    const updatedNote = {
      ...selectedNote,

      title: editTitle || "Untitled Note",

      content: editContent,

      image: editImage,

      tags: editTags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),

      updatedAt: new Date().toISOString(),
    };

    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );

    setNotes(updatedNotes);

    setSelectedNote(updatedNote);

    setIsEditing(false);
  };

  // ---------------- CANCEL ----------------

  const cancelEdit = () => {
    setIsEditing(false);
  };

  // ---------------- PIN / UNPIN ----------------

  const togglePin = (id) => {
    const updated = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            pinned: !note.pinned,
          }
        : note
    );

    setNotes(updated);

    if (selectedNote) {
      const latest = updated.find((n) => n.id === selectedNote.id);

      setSelectedNote(latest);
    }
  };

  // ---------------- IMAGE ----------------

  const uploadImage = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setEditImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // ---------------- TEXT FORMATTING ----------------

  const applyFormatting = (type) => {
    const textarea = document.getElementById("note-content");

    if (!textarea) return;

    const start = textarea.selectionStart;

    const end = textarea.selectionEnd;

    const selected = editContent.substring(start, end);

    let formatted = selected;

    switch (type) {
      case "bold":
        formatted = `**${selected}**`;
        break;

      case "italic":
        formatted = `*${selected}*`;
        break;

      case "list":
        formatted = `• ${selected}`;
        break;

      default:
        break;
    }

    const newContent =
      editContent.substring(0, start) +
      formatted +
      editContent.substring(end);

    setEditContent(newContent);
  };

  return (
    <div className="app-container">
      <Sidebar
        pinnedNotes={pinnedNotes}
        otherNotes={otherNotes}
        selectedNote={selectedNote}
        openNote={openNote}
        deleteNote={deleteNote}
        togglePin={togglePin}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
        allTags={allTags}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        formatDate={formatDate}
      />

      <div className="main-content">
        <button
          className="theme-toggle-top"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀" : "🌙"}
        </button>

        {showHome ? (
          <Home createNote={createNote} />
        ) : isEditing ? (
          <NoteEditor
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editContent={editContent}
            setEditContent={setEditContent}
            editTags={editTags}
            setEditTags={setEditTags}
            editImage={editImage}
            uploadImage={uploadImage}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
            applyFormatting={applyFormatting}
          />
        ) : (
          <NoteViewer
            note={selectedNote}
            startEditing={startEditing}
            closeNote={closeNote}
            togglePin={togglePin}
            formatDate={formatDate}
          />
        )}

      </div>
    </div>
  );
}

export default App;

