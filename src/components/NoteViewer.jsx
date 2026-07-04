import Icon from "./Icon";

function NoteViewer({
  note,
  startEditing,
  closeNote,
  togglePin,
  formatDate,
}) {

  const renderContent = (content) => {
    return content.split("\n").map((line, index) => {

      let processed = line;

      processed = processed.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );

      processed = processed.replace(
        /\*(.*?)\*/g,
        "<em>$1</em>"
      );

      return (
        <p
          key={index}
          dangerouslySetInnerHTML={{
            __html: processed || "<br/>",
          }}
        />
      );
    });
  };

  return (
    <>
      <div className="note-header">

        <div>

          <h1 className="view-title">
            {note.title}
          </h1>

          <div className="meta-item">
            <Icon name="calendar" size={14} />
            Updated {formatDate(note.updatedAt)}
          </div>

        </div>

        <div className="viewer-actions">

          <button
            className="text-action"
            onClick={() => togglePin(note.id)}
          >
            {note.pinned ? "📌 Unpin" : "📍 Pin"}
          </button>

          <button
            className="text-action"
            onClick={startEditing}
          >
            ✏ Edit
          </button>

          <button
            className="text-action"
            onClick={closeNote}
          >
            ✕ Close
          </button>

        </div>

      </div>

      <div className="note-body">

        {note.image && (

          <div className="note-image">

            <img
              src={note.image}
              alt="Uploaded"
            />

          </div>

        )}

        <div className="note-content">

          {note.content ? (
            renderContent(note.content)
          ) : (
            <p className="empty-content">
              Empty Note
            </p>
          )}

        </div>

        {note.tags.length > 0 && (

          <div className="view-tags">

            {note.tags.map((tag) => (

              <span
                key={tag}
                className="view-tag"
              >
                #{tag}
              </span>

            ))}

          </div>

        )}

      </div>
    </>
  );
}

export default NoteViewer;