
// * Cmps
import { Form, useNavigation } from '@remix-run/react'

// * Styles
import noteEditStyles from '~/cmps/note-edit.css'


export default function NoteEdit() {

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    const addButtonText = isSubmitting ? 'Adding...' : 'Add Note'

    return <Form method="post" className="flex column justify-center align-center note-edit">
        <div className="flex column space-between field-container">
            <label title="Note title" htmlFor="title">Title</label>
            <input name="title" placeholder="Create a note!" type="text" id="title" required />
        </div>
        <div className="flex column space-between field-container">
            <label title="Note content" htmlFor="content">Content</label>
            <textarea name="content" rows="5" type="text" id="content" required/>
        </div>
        <div className="flex column space-between field-container">
            <label title="Importance" htmlFor="importance">Importance</label>
            <select name="importance" type="number" id="importance" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className="form-actions">
            <button disabled={isSubmitting} title="Add new note" className="add-note-btn">{addButtonText}</button>
        </div>
    </Form>
}

export function links() {
    return [{rel: 'stylesheet', href: noteEditStyles}]
}