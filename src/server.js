import express from "express";
import {users, createUser, deleteUser, updateUser} from "./dados.js"

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

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  if(!name || !email || !role){
    return res.status(400).json("Digite todas as opçoes.")
  }
  
  const user = updateUser(id, name, email, role);
  if(!user){
    return res.status(404).json("Usuário não encontrado.")
  }
  
  return res.status(200).json(user);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  
  const user = deleteUser(id);
  if(!user){
    return res.status(404).json("Usuário não encontrado.")
  }
  
  return res.status(200).json(user);
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
