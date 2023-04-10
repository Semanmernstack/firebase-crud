import React from 'react'

function Body() {
  return (
    <div className="p-3">
        <form >
            <div>
                <input type="text" placeholder='full name' />
                <select name="bb" i>
                    <option value="bb">male</option>
                    <option value="bb">female</option>
                </select>
            </div>

        </form>
    </div>
  )
}

export default Body