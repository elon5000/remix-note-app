
import NoteEdit, {links as noteEditStyles} from '~/cmps/noteEdit'

export default function NotesPage () {
    return <main className="main-layout">
        <NoteEdit />
    </main>
}

export function links() {
    return [...noteEditStyles()]
}