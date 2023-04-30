
// * Styles
import noteEditStyles from '~/cmps/note-edit.css'

function submitHandler(ev) {

}

export default function NoteEdit() {
    return <form onSubmit={submitHandler} className="flex column justify-center align-center note-edit" method="post">
        <div className="flex column space-between field-container">
            <label title="Note title" htmlFor="title">Title</label>
            <input placeholder="Create a note!" type="text" id="title" required />
        </div>
        <div className="flex column space-between field-container">
            <label title="Note content" htmlFor="content">Content</label>
            <textarea rows="5" type="text" id="content" required/>
        </div>
        <div className="form-actions">
            <button title="Add new note" className="add-note-btn">Add Note</button>
        </div>
    </form>
}

export function links() {
    return [{rel: 'stylesheet', href: noteEditStyles}]
}