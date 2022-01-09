import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ToDoList from '../../components/ToDoList'
import '../../server'

describe('Todo List Component', () => {
    it('displays todo items', async () => {
        render(<ToDoList />)
        expect(await screen.findAllByRole("checkbox")).toHaveLength(3)        
    })
})