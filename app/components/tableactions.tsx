import { Delete, Edit } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

const TableActions = ({ params }: any) => {
  console.log(params)
  return (
    <Box>
      <Tooltip title="edytuj">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="usuń">
        <IconButton onClick={() => {}}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default TableActions
