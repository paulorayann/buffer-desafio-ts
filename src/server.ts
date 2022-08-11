import App from './app'

const app = new App

app.init().listen(process.env.PORT || 3333, () => {
  console.log('Server started successfully')
})