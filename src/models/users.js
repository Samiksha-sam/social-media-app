const USERS = [
    {
        id : 1,
        name: "Vishal Vijay Babar",
        email : "vishal@gmail.com",
        password : "123",
        age : "25",
        imageURL : "https://reqres.in/img/faces/1-image.jpg"
    }
]

const idCounter = 2;

const getAll = () => {
    return USERS
}

const add = (newUser) => {
    USERS.push({
        id : `${idCounter++}`,
         ...newUser
    })
}

const update = (id, updatedUser) => {
    const index = USERS.findIndex(users => users.id == id)
    USERS[index] = {
        ...USERS[index],
        ...updatedUser
    }
}