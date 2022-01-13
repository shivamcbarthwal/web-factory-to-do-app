import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ToDoList from '../../components/ToDoList'
import '../../server'

describe('Todo List Component', () => {
    it('displays todo items', async () => {
        render(<ToDoList />)
        expect(await screen.findAllByRole("checkbox")).toHaveLength(3)        
    })

    it('checks a todo item and sends it to the bottom', async () => {
        render(<ToDoList />)
        let checkbox = await screen.findByLabelText("Modify ToDo item")
        expect(checkbox).not.toBeChecked()

        fireEvent.click(checkbox)
        checkbox = await screen.findByLabelText("Modify ToDo item")
        expect(checkbox).toBeChecked()
        
        const allCheckboxes = await screen.findAllByRole("checkbox")
        expect(allCheckboxes[2]).toEqual(checkbox)
    })

})