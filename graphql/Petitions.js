const createUser = `
    mutation createUser ($input: UserInput) {
        createUser(input:$input) 
    }

    {
        "input": {
            "name": "Esteban2",
            "email": "correo2@correo.com",
            "password": "123456"
        }
    }
`;

const loginUser = `
    mutation loginUser($input: LoginInput) {
        loginUser (input: $input) {
        token
        }
    }

    {
        "input": {
          "email": "correo@correo.com",
          "password": "123456"
        }
    }
`;

const createPraise = `
    mutation createPraise ($input: PraiseInput) {
        createPraise(input: $input) {
        id
        title
        author { id name }
        year
        languages { id language }
        subject
        uploadby
        keywords
        }
    }

    {
        "input": {
          "title": "Bienvenidos5",
          "subject": "Bienvenida",
          "year": 2017,
          "keywords": ["pasion", "dios", "placer"],
          "languages": [{
            "id": "5ee1ae83e90fda5aba99a104",
            "language": "ES"
          }],
          "author": [{
            "id": "5ee1ae83e90fda5aba99a104",
            "name": "Jefferson Schulz"
          }, {
            "id": "5ee1ae83e90fda5aba99a104",
            "name": "María Josefa"
          }]
        }
        
    }
`;