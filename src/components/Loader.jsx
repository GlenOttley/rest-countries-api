import { Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const Loader = () => {
  return (
    <Grid container justifyContent='center'>
      <CircularProgress size={80} />
    </Grid>
  )
}

export default Loader
