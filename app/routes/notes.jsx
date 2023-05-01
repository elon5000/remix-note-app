

// * Hooks
import { useState, useEffect } from 'react'

// * Cmps
import NoteEdit, { links as noteEditStyles } from '~/cmps/noteEdit'
import NoteList, {links as noteListStyles} from '~/cmps/NoteList'

// * Functions
import { json, redirect } from '@remix-run/node'
import { makeNote } from '../services/note.service'
import { getNotes, saveNotes } from '../data/notes.storage.service'
import { useLoaderData } from '@remix-run/react'

export default function NotesPage() {

    const notes = useLoaderData()

    return <main className="main-layout">
        <NoteEdit />
        {notes && <NoteList notes={notes}/>}
    </main>
}

// * This will be executed on the server-side only
export async function loader() {
    const notes = await getNotes()

    // * Instead of this (What Remix does under the hood)
    // return new Response(JSON.stringify((notes), {headers: {'Content-type': 'application/json'}}))

    // * Using the built-in "json()" Remix's function instead of the above - makes JSON-Response
    // return json(notes)

    // * Remix does that for us like that
    return notes
}


// * Runs on server. Remix.js splits the code
export async function action({ request }) {
    const formData = await request.formData()
    const noteData = Object.fromEntries(formData)
    const note = makeNote(noteData)
    const notes = await getNotes()
    notes.push(note)
    await saveNotes(notes)
    // * Redirect response we send back - causes refresh
    return redirect('/notes')
}

export function links() {
    return [...noteEditStyles(), ...noteListStyles()]
}