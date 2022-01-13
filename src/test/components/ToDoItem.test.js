import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '../../server'
import ToDoItem from '../../components/ToDoItem'
import '../../server'

import "whatwg-fetch";

const todo = {"id": "1","title": "Create React App", "description": "This step does the set of your React App", "done": false}

describe('Todo Item Component', () => {
    it('displays a todo item', async () => {
        render(<ToDoItem />)
        expect(await screen.findByRole("heading")).toBeInTheDocument()               
    })
})