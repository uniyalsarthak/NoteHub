import Icon from "./Icon";

function NoteEditor({
  editTitle,
  setEditTitle,
  editContent,
  setEditContent,
  editTags,
  setEditTags,
  editImage,
  uploadImage,
  saveEdit,
  cancelEdit,
  applyFormatting,
}) {
  return (
    <>
      <div className="note-header">

        <div className="editor-header">

          <input
            className="edit-title-input"
            value={editTitle}
            onChange={(e) =>
              setEditTitle(e.target.value)
            }
            placeholder="Note title..."
          />

          <input
            className="tag-input"
            value={editTags}
            onChange={(e) =>
              setEditTags(e.target.value)
            }
            placeholder="Tags (comma separated)"
          />

        </div>

        <div className="editor-buttons">

          <button
            className="save-btn"
            onClick={saveEdit}
          >
            <Icon name="check" size={18} />
            Save
          </button>

          <button
            className="cancel-btn"
            onClick={cancelEdit}
          >
            <Icon name="x" size={18} />
            Cancel
          </button>

        </div>

      </div>

      {/* Toolbar */}

      <div className="formatting-toolbar">

        <button
          className="format-btn"
          onClick={() =>
            applyFormatting("bold")
          }
        >
          <Icon name="bold" size={18} />
        </button>

        <button
          className="format-btn"
          onClick={() =>
            applyFormatting("italic")
          }
        >
          <Icon name="italic" size={18} />
        </button>

        <button
          className="format-btn"
          onClick={() =>
            applyFormatting("list")
          }
        >
          <Icon name="list" size={18} />
        </button>

        <label className="upload-btn">

          📷 Image

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={uploadImage}
          />

        </label>

      </div>

      {/* Image Preview */}

      {editImage && (

        <div className="editor-image">

          <img
            src={editImage}
            alt="Preview"
          />

        </div>

      )}

      {/* Content */}

      <textarea
        id="note-content"
        className="content-textarea"
        value={editContent}
        onChange={(e) =>
          setEditContent(e.target.value)
        }
        placeholder="Write your note..."
      />

      <p className="format-hint">
        Supports **bold**, *italic* and bullet lists.
      </p>

    </>
  );
}

export default NoteEditor; 