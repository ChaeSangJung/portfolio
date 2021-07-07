import { v4 as uuidv4 } from 'uuid';

export const contentDb = [
    {
        "id" : uuidv4(),
        "name" : "react_challenge",
        "title" : "리액트JS 챌린지",
        "url" : "https://clever-boyd-7aff23.netlify.app",
        "etc" : "우수 졸업생 완성작 선정",
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "react"
            },
            {
                "id" : uuidv4(),
                "name" : "es6"
            },
            {
                "id" : uuidv4(),
                "name" : "typescript"
            }
        ],
        "times" : 5
    },
    {
        "id" : uuidv4(),
        "name" : "js_challenge",
        "title" : "바닐라JS 챌린지",
        "url" : "https://chaesangjung.github.io/chemomontom/",
        "etc" : "우수 졸업생 완성작 선정",
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "es6"
            }
        ],
        "times" : 7
    },
    {
        "id" : uuidv4(),
        "name" : "python_challenge",
        "title" : "파이썬 챌린지",
        "url" : "https://replit.com/@ChaeSangJung/Day-Thirteen-and-Fourteen#main.py",
        "etc" : "우수 졸업생 완성작 선정",
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "python"
            }
        ],
        "times" : 4
    },
]

export const forwardDb = () => [
    {
        "id" : uuidv4(),
        "title" : "유튜브 클론 6주 완성반",
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "nodeJs",
            },
            {
                "id" : uuidv4(),
                "name" : "es6",
            },
            {
                "id" : uuidv4(),
                "name" : "pug",
            },
            {
                "id" : uuidv4(),
                "name" : "Mongo",
            }
        ]
    },
    {
        "id" : uuidv4(),
        "title" : "인스타그램 클론 6주 완성반",
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "nodeJs",
            },
            {
                "id" : uuidv4(),
                "name" : "GraphQL",
            },
            {
                "id" : uuidv4(),
                "name" : "react",
            },
            
            {
                "id" : uuidv4(),
                "name" : "iOS & Android",
            }
        ]
    },
    {
        "id" : uuidv4(),
        "title" : "우버 이츠 클론 6주 완성반",
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "Typescript",
            },
            {
                "id" : uuidv4(),
                "name" : "Nest",
            },
            {
                "id" : uuidv4(),
                "name" : "react",
            },
            
            {
                "id" : uuidv4(),
                "name" : "Jest",
            }
        ]
    }
]