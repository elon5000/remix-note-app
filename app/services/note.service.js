'use strict'

import { makeId } from "./util.service"

export function makeNote({title, content, importance}) {
    return {
        title,
        content,
        importance: +importance,
        _id: makeId(6),
        createdAt: Date.now()
    }
}