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
    "title" : "타입스크립트 챌린지",
    "name" : "typescript",
    "thum" : true,
    "skill" : [
        {
            "id" : uuidv4(),
            "name" : "typescript",
        },
    ],
        "contents" : false,
        "state" : '진행중'
    },
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
        "state" : null
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
        "name" : "webview",
        "title" : "빗썸라이브 Webview",
        "url" : "",
        "etc" : null,
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "react"
            },
            {
                "id" : uuidv4(),
                "name" : "typescript"
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
        "expose" : "AWS"
    },
    {
        "id" : uuidv4(),
        "name" : "homepage",
        "title" : "빗썸라이브 소개 페이지",
        "url" : "https://corp.bithumblive.com",
        "etc" : null,
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "react"
            },
            {
                "id" : uuidv4(),
                "name" : "typescript"
            },
            {
                "id" : uuidv4(),
                "name" : "nextjs"
            },
            {
                "id" : uuidv4(),
                "name" : "es6"
            },
            {
                "id" : uuidv4(),
                "name" : "styled-component"
            },
        ],
        "contents" : true,
        "hasMoreBtn" : false,
        "expose" : "AWS"
    },
    {
        "id" : uuidv4(),
        "name" : "web-project",
        "title" : "빗썸라이브 Web Project",
        "url" : "https://www.bithumblive.com",
        "etc" : null,
        "thum" : true,
        "skill" : [
            {
                "id" : uuidv4(),
                "name" : "react"
            },
            {
                "id" : uuidv4(),
                "name" : "typescript"
            },
            {
                "id" : uuidv4(),
                "name" : "nextjs"
            },
            {
                "id" : uuidv4(),
                "name" : "react-query"
            },
            {
                "id" : uuidv4(),
                "name" : "recoil"
            },
            {
                "id" : uuidv4(),
                "name" : "es6"
            },
            {
                "id" : uuidv4(),
                "name" : "styled-component"
            },
        ],
        "contents" : true,
        "hasMoreBtn" : true,
        "expose" : "Vercel"
    },
    {
        "id" : uuidv4(),
        "name" : "cms",
        "title" : "빗썸라이브 CMS",
        "url" : "https://dev2-cms.bithumblive.com/login",
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
        ],
        "contents" : true,
        "hasMoreBtn" : true,
        "expose" : "AWS"
    },
    {
        "id" : uuidv4(),
        "name" : "tvcf",
        "title" : "tvcf",
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
        "title" : "워크시트메이커",
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
        "title" : "큐오홀딩스",
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
        "title" : "렌즈디바",
        "url" : "http://www.lensdiva.com/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "LAB OJALA PARIS",
        "url" : "http://www.ojalaparis.com/main/index.php",
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
        "todo" : "전체 퍼블리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "삼보인쇄사",
        "url" : "http://sambopr.co.kr/",
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
        "todo" : "메인 페이지/헤더/상품리스트/상품 뷰페이지"
    },
    {
        "id" : uuidv4(),
        "title" : "이프린팅",
        "url" : "http://eprinting.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "(주)굿플",
        "url" : "http://goodpl.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "코디 바이오",
        "url" : "http://codibio.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "슐런 코리아",
        "url" : "https://www.itsbkorea.com/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "케렌시아 투어",
        "url" : "https://querenciatour.com/main/index.php",
        "etc" : "반응형",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "대교종합기계",
        "url" : "http://www.dktools.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "DT AUTO TOOLS",
        "url" : "http://shop.bizfor.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "온리몰",
        "url" : "http://tai.bizwebs.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "모비 텔레콤(반응형)",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "스피드 메이트",
        "url" : "http://speedmate.newbiz.co.kr/member/login.php",
        "etc" : "폐쇄몰",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "TLC 코리아",
        "url" : "http://apex3d.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "노량진 민물고기",
        "url" : "http://dreamon.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "2S Mart",
        "url" : "http://es.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "투어인",
        "url" : "https://www.tourincruise.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "대한치과병원협회",
        "url" : "http://www.kdha.net/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "제니스 정밀",
        "url" : "http://zenith-zpi.com/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "ROC",
        "url" : "http://roccoupler.com/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "만도리",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "나우리 법률사무소",
        "url" : "http://www.naurylaw.com/main/index.php",
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
        "todo" : "메인 페이지/레이아웃"
    },
    {
        "id" : uuidv4(),
        "title" : "코리아인스트루먼트(주)",
        "url" : "http://hpage.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "화인심리상담센터",
        "url" : "http://www.fineclinic.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "뉴브리드",
        "url" : "http://newbreed.newbiz.co.kr/main/index.php",
        "etc" : "반응형",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "마인드원 심리상담 센터",
        "url" : "http://www.mindone2.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "다모아여행",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "노바시스템",
        "url" : "http://novasys.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "성누가 병원",
        "url" : "http://slmc.co.kr/new/index.php",
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
        "todo" : "75% 리뉴얼"
    },
    {
        "id" : uuidv4(),
        "title" : "잇코리아",
        "url" : "http://www.eatkorea.co.kr",
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
        "todo" : "메인 페이지/레이아웃"
    },
    {
        "id" : uuidv4(),
        "title" : "비비드 스튜디오",
        "url" : "http://bbd.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "휘닉스파크 렌탈샵 USNS",
        "url" : "http://usns.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "춤웹진",
        "url" : "http://dance.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "양아치킨",
        "url" : "http://ya.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "목포간호학원",
        "url" : "http://mokpo.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "패러는 내친구",
        "url" : "http://paragliding.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "한국미래융합교육협회",
        "url" : "http://fkorea.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%<"
    },
    {
        "id" : uuidv4(),
        "title" : "한국취약노인지원재단",
        "url" : "http://kfssc.org/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "차주현 심리상담센터",
        "url" : "http://www.chajoohyun.com/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "조성아 심리상담센터",
        "url" : "http://www.mindhappy.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "금융중심지 혁신 포럼",
        "url" : "http://finance.bizwebs.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "한국여성아동인권센터",
        "url" : "http://woman.bizwebs.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "오토 프라이즈",
        "url" : "http://autoprise2.bizwebs.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "구룡레저타운",
        "url" : "http://gu.newbiz.co.kr/main/main.html",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "법무법인 일헌",
        "url" : "http://law2.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "VMS",
        "url" : "http://vms.newbiz.co.kr/main/index.php",
        "etc" : "반응형",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "광명77플란트치과",
        "url" : null,
        "etc" : "사이트 이전",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "KB바이오 인증 포털",
        "url" : "http://ingpeople.net/works/kb_bio/filelist.html",
        "etc" : "Intranet",
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
        "todo" : "전체 퍼플리싱 100%"
    },
    {
        "id" : uuidv4(),
        "title" : "코리아인스트루먼트(주)",
        "url" : "http://kic.newbiz.co.kr",
        "etc" : "Intranet",
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
        "todo" : "레이아웃"
    },
    {
        "id" : uuidv4(),
        "title" : "독거노인종합지원센터 - 친구만들기 사업",
        "url" : null,
        "etc" : "Intranet",
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
        "todo" : "레이아웃 / PDF 레이아웃"
    },
    {
        "id" : uuidv4(),
        "title" : "불가리 퍼퓸 옴니아 팝업 스토어",
        "url" : "http://apoidea.newbiz.co.kr/main/index.php",
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
        "todo" : "전체 퍼플리싱 100%"
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
        {
            "id" : uuidv4(),
            "name" : "responsive",
        },
    ]
}