
export default function NotePreview({ note, idx }) {
    const { title, content, _id, importance, createdAt } = note
    const serialNumber = idx + 1  
    const creationDate = new Date(createdAt)
    return <div title="Click for details" className="flex column space-between relative note-preview">
        <div className="flex space-between note-preview-header">
            <span>#{serialNumber}</span>
            <span>{creationDate.toDateString()}</span>
        </div>
        <h3>{title}</h3>
        <h5>{content}</h5>
        <h5>Importance: {importance}</h5>
        <button title="Delete note" className="delete-btn">X</button>
    </div>
}

