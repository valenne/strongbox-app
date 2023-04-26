import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useContext, useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import { HelperContext } from '../../context/HelperContext.jsx'
import { axiosKeyHandle } from '../../services/createNoteKey.js'

export function MenuPopover ({ elementId }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  // handle card changed
  const navigate = useNavigate()
  const { setIsCardChange } = useContext(HelperContext)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  // capture id, then try to update and delete
  const handleClose = event => {
    // const captureIdCard = event.target.getAttribute('data-elementid')
    const textContentCard = event.target.textContent

    if (textContentCard === 'Update') {
      setIsCardChange({ status: true, verb: 'put' })
      return navigate('/card', { replace: true })
    } else if (textContentCard === 'Delete') {
      setIsCardChange({ status: true, verb: 'delete' })
      axiosKeyHandle(elementId, undefined, 'delete')
        .then(data => {
          console.log(data)
          navigate('/dashboard', { replace: false })
        })
        .catch(e => e.message)
      return navigate('/card', { replace: true })
    }

    setAnchorEl(null)
  }

  return (
    <div className='min-h-min min-w-min text-xl z-20 row-start-1 col-start-1 my-2 mx-4 p-2'>
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
        <MenuItem data-elementid={elementId} onClick={handleClose}>
          Update
        </MenuItem>
        <MenuItem data-elementid={elementId} onClick={handleClose}>
          Delete
        </MenuItem>
        <MenuItem data-elementid={elementId} onClick={handleClose}>
          Close
        </MenuItem>
      </Menu>
    </div>
  )
}
