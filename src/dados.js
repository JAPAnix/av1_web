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

