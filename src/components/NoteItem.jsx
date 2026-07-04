import Icon from "./Icon";

function NoteItem({
  note,
  selected,
  onClick,
  onDelete,
  onPin,
  formatDate,
}) {
  return (
    <div
      className={`note-item ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="note-item-header">
        <h3 className="note-title">
          {note.title}
        </h3>

        <div className="note-actions">

          <button
            className={`pin-btn ${note.pinned ? "pinned" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              onPin();
            }}
            title={note.pinned ? "Unpin" : "Pin"}
          >
            <Icon name="pin" size={16} />
          </button>

          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="Delete"
          >
            <Icon name="trash" size={15} />
          </button>

        </div>
      </div>

      <p className="note-preview">
        {note.content
          ? note.content.substring(0, 70) + "..."
          : "No content"}
      </p>

      <div className="note-date">
        <Icon name="calendar" size={12} />
        {formatDate(note.updatedAt)}
      </div>

      {note.tags.length > 0 && (
        <div className="note-tags">
          {note.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="note-tag"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default NoteItem;