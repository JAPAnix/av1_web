export const users = [
  {
    id: 1,
    name: "Daniel Abreu",
    email: "daniel.abreu@email.com",
    role: "ADMIN",
  },
  {
    id: 2,
    name: "Arthur Luiz",
    email: "arthur.luiz@email.com",
    role: "STUDENT",
  },
  {
    id: 3,
    name: "Samuel Costa",
    email: "samuel.costa@email.com",
    role: "STUDENT",
  },
  {
    id: 4,
    name: "Thales Oliveira",
    email: "thales.oliveira@email.com",
    role: "TEACHER",
  }
];

export function createUser(name, email, role){
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        role: role,
    };

    users.push(newUser);
    return newUser
}

export function updateUser(id, name, email, role){
  const user = users.find(u => u.id === Number(id));
  if(!user) return null;
  
  user.name = name;
  user.email = email;
  user.role = role;
  return user;
}

export function deleteUser(id){
  const index = users.findIndex(u => u.id === Number(id));
  if(index === -1) return null;
  return users.splice(index, 1)[0];
}
