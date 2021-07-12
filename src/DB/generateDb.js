import { v4 as uuidv4 } from 'uuid';

// nomad coder challenge Done
export const contentDb = [
    {
        "id" : uuidv4(),
        "name" : "react_challenge",
        "title" : "리액트JS 챌린지",
        "url" : "https://clever-boyd-7aff23.netlify.app",
        "spc" : "우수 졸업생 완성작 선정",
        "thum" : true,
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
                "name" : "styled-component"
            },
            {
                "id" : uuidv4(),
                "name" : "typescript"
            }
        ],
        "times" : 5,
        "contents" : true
    },
    {
        "id" : uuidv4(),
        "name" : "js_challenge",
        "title" : "바닐라JS 챌린지",
        "url" : "https://chaesangjung.github.io/chemomontom/",
        "spc" : "우수 졸업생 완성작 선정",
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "es6"
            },
            {
                "id" : uuidv4(),
                "name" : "HTML"
            },
            {
                "id" : uuidv4(),
                "name" : "css"
            }
        ],
        "times" : 7,
        "contents" : true
    },
    {
        "id" : uuidv4(),
        "name" : "python_challenge",
        "title" : "파이썬 챌린지",
        "url" : "https://replit.com/@ChaeSangJung/Day-Thirteen-and-Fourteen#main.py",
        "spc" : "우수 졸업생 완성작 선정",
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "python"
            },
            {
                "id" : uuidv4(),
                "name" : "HTML"
            },
            {
                "id" : uuidv4(),
                "name" : "css"
            }
        ],
        "times" : 4,
        "contents" : true
    },
]

// nomad coder challenge Plans
export const forwardDb = [
    {
        "id" : uuidv4(),
        "title" : "유튜브 클론 6주 완성반",
        "name" : "youtube",
        "thum" : true,
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
                "name" : "mongo",
            }
        ],
        "contents" : false,
        "state" : "챌린지 진행중"
    },
    {
        "id" : uuidv4(),
        "title" : "인스타그램 클론 6주 완성반",
        "name" : "insta",
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "nodeJs",
            },
            {
                "id" : uuidv4(),
                "name" : "graphQL",
            },
            {
                "id" : uuidv4(),
                "name" : "react",
            },
            
            {
                "id" : uuidv4(),
                "name" : "iOS & Android",
            }
        ],
        "contents" : false,
        "state" : null
    },
    {
        "id" : uuidv4(),
        "title" : "우버 이츠 클론 6주 완성반",
        "name" : "uber",
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "typescript",
            },
            {
                "id" : uuidv4(),
                "name" : "nest",
            },
            {
                "id" : uuidv4(),
                "name" : "react",
            },
            
            {
                "id" : uuidv4(),
                "name" : "jest",
            }
        ],
        "contents" : false,
        "state" : null
    }
]

// 2020~ projects
export const latestDb = [
    {
        "id" : uuidv4(),
        "name" : "tvcf",
        "title" : "2020년 이후 프로젝트1",
        "url" : "https://www.tvcf.co.kr/",
        "etc" : null,
        "thum" : true,
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
                "name" : "styled-component"
            },
            {
                "id" : uuidv4(),
                "name" : "HTML"
            },
            {
                "id" : uuidv4(),
                "name" : "css"
            }
        ],
        "contents" : true,
        "hasMoreBtn" : true,
    },
    {
        "id" : uuidv4(),
        "name" : "worksheetmaker",
        "title" : "2020년 이후 프로젝트2",
        "url" : "https://www.worksheetmaker.co.kr/",
        "etc" : null,
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "es6"
            },
            {
                "id" : uuidv4(),
                "name" : "HTML"
            },
            {
                "id" : uuidv4(),
                "name" : "css"
            },
            {
                "id" : uuidv4(),
                "name" : "jQuery"
            },
        ],
        "contents" : true,
        "hasMoreBtn" : true,
    },
    {
        "id" : uuidv4(),
        "name" : "qoh",
        "title" : "2020년 이후 프로젝트3",
        "url" : "http://qoh.co.kr",
        "etc" : null,
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "es6"
            },
            {
                "id" : uuidv4(),
                "name" : "HTML"
            },
            {
                "id" : uuidv4(),
                "name" : "css"
            },
            {
                "id" : uuidv4(),
                "name" : "jQuery"
            },
        ],
        "contents" : true,
        "hasMoreBtn" : false,
    },
]
// ~2020 projects
export const previosDB = [
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : "https://www.daum.net",
        "etc" : null,
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    {
        "id" : uuidv4(),
        "title" : "title name",
        "url" : null,
        "etc" : "서비스 종료",
        "thum" : false,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "jQuery",
            },
            {
                "id" : uuidv4(),
                "name" : "HTML",
            },
            
            {
                "id" : uuidv4(),
                "name" : "css",
            }
        ],
        "contents" : false,
        "todo" : "전체 퍼블리싱"
    },
    
]
// used skill
export const usedSkill = {
    "skill" : [
        {
            "id" : uuidv4(),
            "name" : "react",
        },
        {
            "id" : uuidv4(),
            "name" : "es6"
        },
        {
            "id" : uuidv4(),
            "name" : "styled-component",
        },
    ]
}