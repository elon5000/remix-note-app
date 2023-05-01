
// * Cmps
import NotePreview from '~/cmps/NotePreview'

// * Styles
import notePreviewStyles from '~/cmps/note-preview.css'

export default function NoteList({notes}) {
    return <ul className="grid note-list">
        {notes.map((note, idx) => <NotePreview key={note._id} note={note} idx={idx} />)}
    </ul>
} 

export function links() {
    return [{rel: 'stylesheet', href: notePreviewStyles}]
}