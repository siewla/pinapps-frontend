import React from 'react'

export default function AddApp() {
    return (
        <div>
            <form action="/api/app/new" method="post">
                <label htmlFor="name">Name of App</label>
                <input type="text" name="name" id="app-name"/>
                <label htmlFor="url">URL of App Website</label>
                <input type="url" name="url" id="app-url"/>
                <label htmlFor="description">Description of App</label>
                <textarea name="description" id="app-description" cols="30" rows="10"></textarea>
                <label htmlFor="category">Category</label>
                <select name="category" id="app-category">
                    {/* <option value="productivity">Productivity</option>
                    <option value="timers">Timers</option>
                    <option value="task-management">Task Management</option>
                    dynamically grab from category map.
                     */}
                </select>
            </form>
        </div>
    )
}
