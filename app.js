import { app } from './server'

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('Listening on port %s', PORT)
})