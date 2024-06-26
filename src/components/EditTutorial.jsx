import { useState, useEffect } from "react";
const EditTutorial = ({ editTutorial, editedItem }) => {
  const { id, title: newTitle, description } = editedItem;
  const [title, setTitle] = useState(newTitle);
  const [desc, setDesc] = useState(description);
  useEffect(() => {
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);

  const handleSave = (e) => {
    e.preventDefault();
    editTutorial({ id, title, desc });
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      <div className="modal" tabIndex="-1" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your title"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  value={desc || ""}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Enter your Description"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTutorial;
