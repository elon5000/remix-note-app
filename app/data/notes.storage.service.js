
import fs from 'fs/promises'

export async function getNotes() {
    const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' })
    const data = JSON.parse(rawFileContent)
    const notes = data || []
    return notes
}

export function saveNotes(notes = []) {
    return fs.writeFile('notes.json', JSON.stringify(notes))
}