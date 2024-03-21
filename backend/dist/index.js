import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';
import newsRouter from './routes/newsRouter.js';
import authorRouter from './routes/authorRouter.js';

const app = express();
const PORT = process.env.PORT || 8000;

const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json());

app.use(cors());

// Rotas
app.use('/autores', authorRouter);
app.use('/noticias', newsRouter); 

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu blog!');
});

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
