import express from "express";
import {users, createUser} from "./dados.js"

const app = express()
const PORT = 3000

app.use(express.json())


app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/users", (req, res)=> {
  const { name, email, role } = req.body;

  if(!name || !email || !role){
    return res.status(400).json("Digite todas as opçoes.")
  }
  else if(users.some(u => u.email === email)){
    return res.status(409).json("Esse email já existe.")
  }

  const created = createUser(name, email, role)
  return res.status(201).json(created)
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
