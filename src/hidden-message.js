import React from 'react'

import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'




function HiddenMessage({children}) {
  const [showMessage, setShowMessage] = React.useState(false)
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}

export default HiddenMessage


test('shows the items crossed out when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  const {queryByText, getByLabelText, getByText} = render(
    <HiddenMessage>{testMessage}</HiddenMessage>,
  )

 
  expect(queryByText(testMessage)).toBeNull()

 
  fireEvent.click(getByLabelText(/show/i))

  
  expect(getByText(testMessage)).toBeInTheDocument()
})