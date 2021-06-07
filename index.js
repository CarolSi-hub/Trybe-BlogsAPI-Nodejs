const express = require('express');
const route = require('./routes');
const { errorMiddleware } = require('./middlewares');
require('dotenv').config();

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const PORT = process.env.PORT || 3000;

app.use('/user', route.userRoute);
app.use('/login', route.loginRoute);
app.use('/categories', route.categoriesRoute);
app.use('/post', route.postRoute);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
