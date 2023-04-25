import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'

export function MenuPopover ({ elementId }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  // capture id, then try to update and delete
  const handleClose = event => {
    const captureIdCard = event.target.getAttribute('data-elementId')

    console.log(captureIdCard)
    setAnchorEl(null)
  }

  return (
    <div className='min-h-fit text-xl z-20 row-start-1 col-start-1 my-2 mx-4 p-2'>
      <SlOptionsVertical
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='hover:text-fuchsia-600 hover:text-2xl hover:rotate-90 duration-300 ml-auto '
      />
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem data-elementId={elementId} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem data-elementId={elementId} onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem data-elementId={elementId} onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}
