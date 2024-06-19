const exData = [
// 2.1 2.2 2.3---------------------------
    {
        id: 1,
        gennder: 'Мужской',
        category: 'Курсанты 1 курса',
        age: '',
        minBallsOne: 30,
        level: [
            {
                '2': 0,
                '3': 180,
                '4': 210,
                '5 (3У)': 240,
                '5 (2У)': 250,
                '5 (1У)': 270,
                '5 (ВУ)': 300 
            }
        ],
    },
    {
        id: 2,
        gennder: 'Мужской',
        category: 'Курсанты 2 курса',
        age: '',
        minBallsOne: 34,
        level: [
            {
                '2': 0,
                '3': 250,
                '4': 310,
                '5 (3У)': 350,
                '5 (2У)': 360,
                '5 (1У)': 370,
                '5 (ВУ)': 390 
            }
        ],
    },
    {
        id: 3,
        gennder: 'Мужской',
        category: 'Курсанты 3 - 5 курсов',
        age: '',
        minBallsOne: 38,
        level: [
            {
                '2': 0,
                '3': 260,
                '4': 320,
                '5 (3У)': 360,
                '5 (2У)': 370,
                '5 (1У)': 380,
                '5 (ВУ)': 400 
            }
        ],
    },
// 3.до 25.1 3.до 25.2 3.до 25.3---------------------------
    {
        id: 4,
        gennder: 'Мужской',
        category: '1',
        age: 'до 25',
        minBallsOne: 30,
        level: [
            {
                '2': 0,
                '3': 180,
                '4': 210,
                '5 (3У)': 240,
                '5 (2У)': 250,
                '5 (1У)': 270,
                '5 (ВУ)': 300 
            }
        ],
    },
    {
        id: 5,
        gennder: 'Мужской',
        category: '2',
        age: 'до 25',
        minBallsOne: 30,
        level: [
            {
                '2': 0,
                '3': 130,
                '4': 180,
                '5 (3У)': 200,
                '5 (2У)': 210,
                '5 (1У)': 220,
                '5 (ВУ)': 240 
            }
        ],
    },
    {
        id: 6,
        gennder: 'Мужской',
        category: '3',
        age: 'до 25',
        minBallsOne: 30,
        level: [
            {
                '2': 0,
                '3': 120,
                '4': 170,
                '5 (3У)': 190,
                '5 (2У)': 200,
                '5 (1У)': 210,
                '5 (ВУ)': 230 
            }
        ],
    },
// 3.25-29.1 3.25-29.2 3.20-29.3---------------------------
    {
        id: 7,
        gennder: 'Мужской',
        category: '1',
        age: '25 - 29',
        minBallsOne: 28,
        level: [
            {
                '2': 0,
                '3': 160,
                '4': 200,
                '5 (3У)': 230,
                '5 (2У)': 240,
                '5 (1У)': 260,
                '5 (ВУ)': 290 
            }
        ],
    },
    {
        id: 8,
        gennder: 'Мужской',
        category: '2',
        age: '25 - 29',
        minBallsOne: 28,
        level: [
            {
                '2': 0,
                '3': 120,
                '4': 170,
                '5 (3У)': 190,
                '5 (2У)': 200,
                '5 (1У)': 210,
                '5 (ВУ)': 230 
            }
        ],
    },
    {
        id: 9,
        gennder: 'Мужской',
        category: '3',
        age: '25 - 29',
        minBallsOne: 28,
        level: [
            {
                '2': 0,
                '3': 110,
                '4': 160,
                '5 (3У)': 180,
                '5 (2У)': 190,
                '5 (1У)': 200,
                '5 (ВУ)': 220 
            }
        ],
    },
// 3.30-34.1 3.30-34.2 3.30-34.3---------------------------
    {
        id: 10,
        gennder: 'Мужской',
        category: '1',
        age: '30 - 34',
        minBallsOne: 26,
        level: [
            {
                '2': 0,
                '3': 140,
                '4': 180,
                '5 (3У)': 210,
                '5 (2У)': 220,
                '5 (1У)': 240,
                '5 (ВУ)': 270 
            }
        ],
    },
    {
        id: 11,
        gennder: 'Мужской',
        category: '2',
        age: '30 - 34',
        minBallsOne: 26,
        level: [
            {
                '2': 0,
                '3': 110,
                '4': 160,
                '5 (3У)': 180,
                '5 (2У)': 190,
                '5 (1У)': 200,
                '5 (ВУ)': 220 
            }
        ],
    },
    {
        id: 12,
        gennder: 'Мужской',
        category: '3',
        age: '30 - 34',
        minBallsOne: 26,
        level: [
            {
                '2': 0,
                '3': 100,
                '4': 150,
                '5 (3У)': 170,
                '5 (2У)': 180,
                '5 (1У)': 190,
                '5 (ВУ)': 210 
            }
        ],
    },
// 3.35-39.1 3.35-39.2 3.35-39.3---------------------------
    {
        id: 13,
        gennder: 'Мужской',
        category: '1',
        age: '35 - 39',
        minBallsOne: 22,
        level: [
            {
                '2': 0,
                '3': 120,
                '4': 170,
                '5 (3У)': 200,
                '5 (2У)': 210,
                '5 (1У)': 220,
                '5 (ВУ)': 250 
            }
        ],
    },
    {
        id: 14,
        gennder: 'Мужской',
        category: '2',
        age: '35 - 39',
        minBallsOne: 22,
        level: [
            {
                '2': 0,
                '3': 90,
                '4': 140,
                '5 (3У)': 160,
                '5 (2У)': 170,
                '5 (1У)': 180,
                '5 (ВУ)': 200 
            }
        ],
    },
    {
        id: 15,
        gennder: 'Мужской',
        category: '3',
        age: '35 - 39',
        minBallsOne: 22,
        level: [
            {
                '2': 0,
                '3': 80,
                '4': 130,
                '5 (3У)': 150,
                '5 (2У)': 160,
                '5 (1У)': 170,
                '5 (ВУ)': 190 
            }
        ],
    },
// 3.40-44.1 3.40-44.2 3.40-44.3---------------------------
    {
        id: 13,
        gennder: 'Мужской',
        category: '1',
        age: '40 - 44',
        minBallsOne: 20,
        level: [
            {
                '2': 0,
                '3': 110,
                '4': 150,
                '5 (3У)': 180,
                '5 (2У)': 200,
                '5 (1У)': 220,
                '5 (ВУ)': 230 
            }
        ],
    },
    {
        id: 14,
        gennder: 'Мужской',
        category: '2',
        age: '40 - 44',
        minBallsOne: 20,
        level: [
            {
                '2': 0,
                '3': 80,
                '4': 120,
                '5 (3У)': 140,
                '5 (2У)': 150,
                '5 (1У)': 160,
                '5 (ВУ)': 170 
            }
        ],
    },
    {
        id: 15,
        gennder: 'Мужской',
        category: '3',
        age: '40 - 44',
        minBallsOne: 20,
        level: [
            {
                '2': 0,
                '3': 70,
                '4': 110,
                '5 (3У)': 130,
                '5 (2У)': 140,
                '5 (1У)': 150,
                '5 (ВУ)': 160 
            }
        ],
    },
// 3.45-49.1 3.45-49.2 3.45-49.3---------------------------
    {
        id: 16,
        gennder: 'Мужской',
        category: '1',
        age: '45 - 49',
        minBallsOne: 16,
        level: [
            {
                '2': 0,
                '3': 100,
                '4': 110,
                '5 (3У)': 140,
                '5 (2У)': 150,
                '5 (1У)': 160,
                '5 (ВУ)': 180 
            }
        ],
    },
    {
        id: 17,
        gennder: 'Мужской',
        category: '2',
        age: '45 - 49',
        minBallsOne: 16,
        level: [
            {
                '2': 0,
                '3': 70,
                '4': 100,
                '5 (3У)': 120,
                '5 (2У)': 130,
                '5 (1У)': 140,
                '5 (ВУ)': 150 
            }
        ],
    },
    {
        id: 18,
        gennder: 'Мужской',
        category: '3',
        age: '45 - 49',
        minBallsOne: 16,
        level: [
            {
                '2': 0,
                '3': 60,
                '4': 80,
                '5 (3У)': 100,
                '5 (2У)': 110,
                '5 (1У)': 120,
                '5 (ВУ)': 130 
            }
        ],
    },
// 3.50-54.1 3.50-54.2 3.50-54.3---------------------------
    {
        id: 22,
        gennder: 'Мужской',
        category: '1',
        age: '50 - 54',
        minBallsOne: 12,
        level: [
            {
                '2': 0,
                '3': 30,
                '4': 40,
                '5 (3У)': 50,
                '5 (2У)': 55,
                '5 (1У)': 60,
                '5 (ВУ)': 70 
            }
        ],
    },
    {
        id: 22,
        gennder: 'Мужской',
        category: '2',
        age: '50 - 54',
        minBallsOne: 12,
        level: [
            {
                '2': 0,
                '3': 30,
                '4': 40,
                '5 (3У)': 50,
                '5 (2У)': 55,
                '5 (1У)': 60,
                '5 (ВУ)': 70 
            }
        ],
    },
    {
        id: 22,
        gennder: 'Мужской',
        category: '3',
        age: '50 - 54',
        minBallsOne: 12,
        level: [
            {
                '2': 0,
                '3': 30,
                '4': 40,
                '5 (3У)': 50,
                '5 (2У)': 55,
                '5 (1У)': 60,
                '5 (ВУ)': 70 
            }
        ],
    },
// 3.55-59.1 3.55-59.2 3.55-59.3---------------------------
    {
        id: 23,
        gennder: 'Мужской',
        category: '1',
        age: '55 - 59',
        minBallsOne: 10,
        level: [
            {
                '2': 0,
                '3': 20,
                '4': 30,
                '5 (3У)': 40,
                '5 (2У)': 45,
                '5 (1У)': 50,
                '5 (ВУ)': 55 
            }
        ],
    },
    {
        id: 24,
        gennder: 'Мужской',
        category: '2',
        age: '55 - 59',
        minBallsOne: 10,
        level: [
            {
                '2': 0,
                '3': 20,
                '4': 30,
                '5 (3У)': 40,
                '5 (2У)': 45,
                '5 (1У)': 50,
                '5 (ВУ)': 55 
            }
        ],
    },
    {
        id: 25,
        gennder: 'Мужской',
        category: '3',
        age: '55 - 59',
        minBallsOne: 10,
        level: [
            {
                '2': 0,
                '3': 20,
                '4': 30,
                '5 (3У)': 40,
                '5 (2У)': 45,
                '5 (1У)': 50,
                '5 (ВУ)': 55 
            }
        ],
    },
// 3.60 и старше.1 3.60 и старше.2 3.60 и старше.3---------------------------
    {
        id: 23,
        gennder: 'Мужской',
        category: '1',
        age: '60 и старше',
        minBallsOne: 8,
        level: [
            {
                '2': 0,
                '3': 16,
                '4': 20,
                '5 (3У)': 25,
                '5 (2У)': 30,
                '5 (1У)': 35,
                '5 (ВУ)': 40 
            }
        ],
    },
    {
        id: 24,
        gennder: 'Мужской',
        category: '2',
        age: '60 и старше',
        minBallsOne: 8,
        level: [
            {
                '2': 0,
                '3': 16,
                '4': 20,
                '5 (3У)': 25,
                '5 (2У)': 30,
                '5 (1У)': 35,
                '5 (ВУ)': 40 
            }
        ],
    },
    {
        id: 25,
        gennder: 'Мужской',
        category: '3',
        age: '60 и старше',
        minBallsOne: 8,
        level: [
            {
                '2': 0,
                '3': 16,
                '4': 20,
                '5 (3У)': 25,
                '5 (2У)': 30,
                '5 (1У)': 35,
                '5 (ВУ)': 40 
            }
        ],
    },
// 4.1 4.2 4.3---------------------------
    {
        id: 26,
        gennder: 'Женский',
        category: 'Курсанты 1 курса',
        age: '',
        minBallsOne: 8,
        level: [
            {
                '2': 0,
                '3': 40,
                '4': 70,
                '5 (3У)': 80,
                '5 (2У)': 85,
                '5 (1У)': 90,
                '5 (ВУ)': 95 
            }
        ],
    },
    {
        id: 27,
        gennder: 'Женский',
        category: 'Курсанты 2 курса',
        age: '',
        minBallsOne: 9,
        level: [
            {
                '2': 0,
                '3': 45,
                '4': 75,
                '5 (3У)': 85,
                '5 (2У)': 90,
                '5 (1У)': 95,
                '5 (ВУ)': 100 
            }
        ],
    },
    {
        id: 28,
        gennder: 'Женский',
        category: 'Курсанты 3 - 5 курсов',
        age: '',
        minBallsOne: 10,
        level: [
            {
                '2': 0,
                '3': 50,
                '4': 80,
                '5 (3У)': 90,
                '5 (2У)': 95,
                '5 (1У)': 100,
                '5 (ВУ)': 105 
            }
        ],
    },
// 5.1 5.2 5.3---------------------------
    {
        id: 29,
        gennder: 'Женский',
        category: '',
        age: 'до 25',
        minBallsOne: 8,
        level: [
            {
                '2': 0,
                '3': 40,
                '4': 70,
                '5 (3У)': 80,
                '5 (2У)': 85,
                '5 (1У)': 90,
                '5 (ВУ)': 95 
            }
        ],
    },
    {
        id: 30,
        gennder: 'Женский',
        category: '',
        age: '25 - 29',
        minBallsOne: 7,
        level: [
            {
                '2': 0,
                '3': 35,
                '4': 60,
                '5 (3У)': 70,
                '5 (2У)': 75,
                '5 (1У)': 80,
                '5 (ВУ)': 85 
            }
        ],
    },
    {
        id: 31,
        gennder: 'Женский',
        category: '',
        age: '30 - 34',
        minBallsOne: 6,
        level: [
            {
                '2': 0,
                '3': 30,
                '4': 50,
                '5 (3У)': 60,
                '5 (2У)': 65,
                '5 (1У)': 70,
                '5 (ВУ)': 75 
            }
        ],
    },
    {
        id: 32,
        gennder: 'Женский',
        category: '',
        age: '35 - 39',
        minBallsOne: 5,
        level: [
            {
                '2': 0,
                '3': 25,
                '4': 40,
                '5 (3У)': 50,
                '5 (2У)': 55,
                '5 (1У)': 60,
                '5 (ВУ)': 65 
            }
        ],
    },
    {
        id: 33,
        gennder: 'Женский',
        category: '',
        age: '40 - 44',
        minBallsOne: 4,
        level: [
            {
                '2': 0,
                '3': 20,
                '4': 30,
                '5 (3У)': 40,
                '5 (2У)': 45,
                '5 (1У)': 50,
                '5 (ВУ)': 55 
            }
        ],
    },
    {
        id: 34,
        gennder: 'Женский',
        category: '',
        age: '45 - 49',
        minBallsOne: 3,
        level: [
            {
                '2': 0,
                '3': 10,
                '4': 15,
                '5 (3У)': 20,
                '5 (2У)': 25,
                '5 (1У)': 30,
                '5 (ВУ)': 35 
            }
        ],
    },
    {
        id: 34,
        gennder: 'Женский',
        category: '',
        age: '50 и старше',
        minBallsOne: 2,
        level: [
            {
                '2': 0,
                '3': 5,
                '4': 10,
                '5 (3У)': 15,
                '5 (2У)': 20,
                '5 (1У)': 25,
                '5 (ВУ)': 30 
            }
        ],
    },
] 


function gradePeople(arrGrade, arrBalls) {
    let rez
    arrBalls.forEach(element => {
        if (element < arrGrade.minBallsOne) {
            rez = true; 
        } 
    });
    if (rez) {
        return [2, `Минимальное количество баллов в одном упражнении: ${arrGrade.minBallsOne}`, arrGrade.level]
    } 

    if (!rez) {
        let balls = arrBalls.reduce((acc, value) => acc + value)
        let a
        arrGrade.level.forEach((e, i) => {
            for (i in e) {        
                if (balls >= e[i] ) a = i
            }
          });
        return ([a, `Итого баллов: ${balls}`, arrGrade.level,])
    }    
}

export default function levelAssessment (gen, cat, age, col, one, two, three, four, five) {
    var arrSumBalls = [one, two, three, four, five]
    let sampleAssessment = exData.find((element) => element.gennder === gen &&         
                                                    ((gen === 'Женский' && (cat.toString() ==='1' || cat.toString() ==='2' || cat.toString() ==='3')) ? element.category === '' : element.category === cat.toString()) &&        
                                                    ((cat.toString() ==='1' || cat.toString() ==='2' || cat.toString() ==='3') ?  element.age === age : element.age === ''))
    var nawArrSumBalls = []

    for (let i = 0; i <= col-1; i++) {
        if (arrSumBalls[i] !== '' && arrSumBalls[i] !== undefined) {
            nawArrSumBalls.push(+arrSumBalls[i])
        }
    }
    if (!!nawArrSumBalls.length) {
        if (nawArrSumBalls.length === col) {
            return gradePeople(sampleAssessment, nawArrSumBalls); 
        } 
    }

}

export function sampleAssessment(gen='Мужской', cat='1', age='до 25') {
    return exData.find((element) => element.gennder === gen &&         
    ((gen === 'Женский' && (cat.toString() ==='1' || cat.toString() ==='2' || cat.toString() ==='3')) ? element.category === '' : element.category === cat.toString()) &&        
    ((cat.toString() ==='1' || cat.toString() ==='2' || cat.toString() ==='3') ?  element.age === age : element.age === ''))
}