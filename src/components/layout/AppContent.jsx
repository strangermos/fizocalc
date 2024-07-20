import { Layout, Card, Statistic, List, Typography, Flex, Select, Space, Form, InputNumber, Input, Button, Row, Col, Divider } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';
import CryptoContext, { useCrypto } from '../../context/crypto-context';
import { choiseSetOfExercise } from '../../utils/choiseSetOfExercise.js';
import levelAssessment from '../../utils/levelAssessment.js';
import {sampleAssessment} from '../../utils/levelAssessment.js';


import Title from 'antd/es/skeleton/Title.js';
import LavelGrade from '../LavelGrade.jsx';
import {useResize} from '../../utils/use-resize'
import { ageOldYoungFunction } from '../../utils/ageOldYoungFunction.js';

const contentStyle = {
    textAlign: '',
    minHeight: 'calc(100vh - 208px)',
    color: '#000',
    backgroundColor: '#fff',
    padding: '1rem',
  };
  const onFinish = (values) => {
  };


export default function AppContent() {
  
    const [form] = Form.useForm()
    //const { assets, gender, ages } = useCrypto()
    const {  assets, gender, ages, category, balls } = useContext(CryptoContext)
    const [select, setSelect] = useState(false)

    // State Выбор исходных данный
    const [ower, setOwer] = useState ({
      genderSelect: 'Мужской',
      colSelect: 4,
      ageSelect: 'до 25',
      categorySelect: 1,
      weightSelect: 'до 70 кг.',
      ageOldYoung: 'до 35 лет',
    })
    
    // State подсчета количества балов в упражнении
    const [exercise, setExercise] = useState({
      ballsOneExercise: '',
      resultOneExercise: '',
      arreyOneExercisr: [],
      minOnePlaseholder: '',
      maxOnePlaseholder: '',

      ballsTwoExercise: '',
      resultTwoExercise: '',
      arreyTwoExercisr: [],
      minTwoPlaseholder: '',
      maxTwoPlaseholder: '',

      ballsThreeExercise: '',
      resultThreeExercise: '',
      arreyThreeExercisr: [],
      minThreePlaseholder: '',
      maxThreePlaseholder: '',

      ballsFourExercise: '',
      resultFourExercise: '',
      arreyFourExercisr: [],
      minFourPlaseholder: '',
      maxFourPlaseholder: '',

      ballsFiveExercise: '',
      resultFiveExercise: '',
      arreyFiveExercisr: [],
      minFivePlaseholder: '',
      maxFivePlaseholder: '',

      itog: null,

    })



    // State выбор бала в упражнение
let widthProject = {
  width:  useResize().width,
  left: 24,
  right: 24
}

if (widthProject.width < 700) { 
  widthProject.left = 24 
  widthProject.right = 24
} else if (widthProject.width < 1000){
  widthProject.left = 14 
  widthProject.right = 10
} else if (widthProject.width > 1000){
  widthProject.left = 16 
  widthProject.right = 8
}

    let newAge = ages.filter((age) => age.gender === ower.genderSelect)



    useEffect(() => {
        const keypress = event => {
            if (event.key === '-') {
                setSelect(true)
            }
        }
        document.addEventListener('keypress', keypress)
        return () => document.removeEventListener('keypress', keypress)
    }, [])
    ///
    let typeOfExercise = choiseSetOfExercise(ower.genderSelect, ower.categorySelect, ower.ageSelect, ower.colSelect)
    ///
    function handelSelectGender(value) {
      setOwer((prev) => ({...prev, genderSelect: value}))
      setOwer((prev) => ({...prev, ageSelect: 'до 25'}))

      if (value === 'Мужской') {
        setOwer((prev) => ({...prev, weightSelect: 'до 70 кг.'}))
      } else {
        setOwer((prev) => ({...prev, weightSelect: 'до 60 кг.'}))
      }


      let a = 80
      if (value === 'Мужской' && (ower.categorySelect === 1) && !(ower.ageSelect === '50 - 54' || ower.ageSelect === '55 - 59' || ower.ageSelect === '60 и старше')) {       
        a = 4   
      } else if (value === 'Мужской' && (ower.ageSelect === '50 - 54' || ower.ageSelect === '55 - 59' || ower.ageSelect === '60 и старше') && ower.categorySelect !== 'Курсанты 1 курса' && ower.categorySelect !== 'Курсанты 2 курса' && ower.categorySelect !== 'Курсанты 3 - 5 курсов') {
        a = 2
      } else if (value === 'Мужской' && (ower.categorySelect === 2 || ower.categorySelect === 3) && !(ower.ageSelect === '50 - 54' || ower.ageSelect === '55 - 59' || ower.ageSelect === '60 и старше')) {
        a = 3
      } else if (value === 'Женский' && !(ower.ageSelect === '45 - 49' || ower.ageSelect === '50 и старше' )) {
        a = 3
      } else if (value === 'Женский' && (ower.ageSelect === '45 - 49' || ower.ageSelect === '50 и старше' ) && ower.categorySelect !== 'Курсанты 1 курса' && ower.categorySelect !== 'Курсанты 2 курса' && ower.categorySelect !== 'Курсанты 3 - 5 курсов') {
        a = 2
      } else if (value === 'Женский' && ower.categorySelect === 'Курсанты 1 курса') {
        a = 3
      } else if (value === 'Женский' && (ower.categorySelect === 'Курсанты 2 курса' || ower.categorySelect === 'Курсанты 3 - 5 курсов')) {
        a = 3       
      } else if (value === 'Мужской' && ower.categorySelect === 'Курсанты 1 курса') {
        a = 4
      } else if (value === 'Мужской' && (ower.categorySelect === 'Курсанты 2 курса' || ower.categorySelect === 'Курсанты 3 - 5 курсов'))  {
        a = 5
      } 
      setOwer((prev) => ({...prev, colSelect: a}))

      form.setFieldsValue({
        colForm: a,
        ageForm: 'до 25',
        weightForm:  ower.genderSelect !== 'Мужской' ? 'до 70 кг.' : 'до 60 кг.',
      })
    }
    function handelSelectAge(value) {
        setOwer((prev) => ({...prev, ageOldYoung: ageOldYoungFunction(value)}))
        setOwer((prev) => ({...prev, ageSelect: value}))
        let a = 80
        if (ower.genderSelect === 'Мужской' && (ower.categorySelect === 1) && !(value === '50 - 54' || value === '55 - 59' || value === '60 и старше')) {       
          a = 4   
        } else if (ower.genderSelect === 'Мужской' && (value === '50 - 54' || value === '55 - 59' || value === '60 и старше') && ower.categorySelect !== 'Курсанты 1 курса' && ower.categorySelect !== 'Курсанты 2 курса' && ower.categorySelect !== 'Курсанты 3 - 5 курсов')  {
          a = 2
        } else if (ower.genderSelect === 'Мужской' && (ower.categorySelect === 2 || ower.categorySelect === 3) && !(value === '50 - 54' || value === '55 - 59' || value === '60 и старше')) {
          a = 3
        } else if (ower.genderSelect === 'Женский' && !(value === '45 - 49' || value === '50 и старше' )) {
          a = 3
        } else if (ower.genderSelect === 'Женский' && (value === '45 - 49' || value === '50 и старше' ) && ower.categorySelect !== 'Курсанты 1 курса' && ower.categorySelect !== 'Курсанты 2 курса' && ower.categorySelect !== 'Курсанты 3 - 5 курсов') {
          a = 2
        } else if (ower.genderSelect === 'Мужской' && ower.categorySelect === 'Курсанты 1 курса') {
          a = 4
        } else if (ower.genderSelect === 'Мужской' && (ower.categorySelect === 'Курсанты 2 курса' || ower.categorySelect === 'Курсанты 3 - 5 курсов')) {
          a = 5          
        } else if (ower.genderSelect === 'Женский' && ower.categorySelect === 'Курсанты 1 курса') {
          a = 3
        } else if (ower.genderSelect === 'Женский' && (ower.categorySelect === 'Курсанты 2 курса' || ower.categorySelect === 'Курсанты 3 - 5 курсов'))  {
          a = 3
        } 
        setOwer((prev) => ({...prev, colSelect: a}))
        
        form.setFieldsValue({
          colForm: a,
        })
    }
    function handelSelectCategory(value) {
        setOwer((prev) => ({...prev, categorySelect: value}))


        let a = 80
        if  ((ower.genderSelect === 'Мужской' && (value === 1) && !(ower.ageSelect === '50 - 54' || ower.ageSelect === '55 - 59' || ower.ageSelect === '60 и старше')&& value !== 'Курсанты 1 курса' && value && value !== 'Курсанты 2 курса' && value !== 'Курсанты 3 - 5 курсов')  
          || (ower.genderSelect === 'Мужской' && value === 'Курсанты 1 курса')){       
          a = 4   
        } else if ((ower.genderSelect === 'Мужской' && (ower.ageSelect === '50 - 54' || ower.ageSelect === '55 - 59' || ower.ageSelect === '60 и старше') && value !== 'Курсанты 1 курса' && value !== 'Курсанты 2 курса' && value !== 'Курсанты 3 - 5 курсов' && value !== 'Курсанты 1 курса' && value !== 'Курсанты 2 курса' && value !== 'Курсанты 3 - 5 курсов') 
          || (ower.genderSelect === 'Женский' && (ower.ageSelect === '45 - 49' || ower.ageSelect === '50 и старше' ) && value !== 'Курсанты 1 курса' && value !== 'Курсанты 2 курса' && value !== 'Курсанты 3 - 5 курсов')) {
          a = 2
        } else if ((ower.genderSelect === 'Мужской' && (value === 2 || value === 3) && !(ower.ageSelect === '50 - 54' || ower.ageSelect === '55 - 59' || ower.ageSelect === '60 и старше') && value !== 'Курсанты 1 курса' && value !== 'Курсанты 2 курса' && value !== 'Курсанты 3 - 5 курсов') 
          || (ower.genderSelect === 'Женский' && !(ower.ageSelect === '45 - 49' || ower.ageSelect === '50 и старше' && value !== 'Курсанты 1 курса' && value !== 'Курсанты 2 курса' && value !== 'Курсанты 3 - 5 курсов' )) 
          || (ower.genderSelect === 'Женский' && value === 'Курсанты 1 курса') 
          || (ower.genderSelect === 'Женский' && (value === 'Курсанты 2 курса' || value === 'Курсанты 3 - 5 курсов'))) {
          a = 3
        } else if (ower.genderSelect === 'Мужской' && (value === 'Курсанты 2 курса' || value === 'Курсанты 3 - 5 курсов')) {
          a = 5
        } 
        setOwer((prev) => ({...prev, colSelect: a}))
        
        form.setFieldsValue({
          colForm: a,
        })
    }

    // Валидатор
    const validateMessages = {
        requered: 'не ввылидно',
      // types: {
      //   number: '2',
      // },
      // number: {
      //   renge: '${min} ${max}'}
      }

    

    function choiseOneExercises(value, id ){
      let a = undefined
      setExercise((prev) => ({...prev, arreyOneExercisr: id.bal,
        minOnePlaseholder: Object.values(id.bal[1])[0],
        maxOnePlaseholder: Object.values(id.bal[id.bal.length - 1])[0],
      }))
      id.bal.forEach((e, i) => {
        for (i in e) {
          if (e[i] <= exercise.resultOneExercise) {return a = i} 
        }
      });
      setExercise((prev) => ({...prev, ballsOneExercise: a}))
    }
    
    function handleChangeOneExercise(v) {
      let a = undefined
      setExercise((prev) => ({...prev, resultOneExercise: v.target.value}))
      exercise.arreyOneExercisr.forEach((e, i) => {
        for (i in e) {        
          if (v.target.value >= e[i] ) { return a = i} 
        }
      });
      setExercise((prev) => ({...prev, ballsOneExercise: a}))
    }
//- 2 -------------------------------------------------------------------------
    function choiseTwoExercises(value, id ){
      let a = undefined
      setExercise((prev) => ({...prev, arreyTwoExercisr: id.bal,
        minTwoPlaseholder: Object.values(id.bal[1])[0],
        maxTwoPlaseholder: Object.values(id.bal[id.bal.length - 1])[0],
      }))
      id.bal.forEach((e, i) => {
        for (i in e) {
          if (e[i] <= exercise.resultTwoExercise) {return a = i} 
        }
      });
      setExercise((prev) => ({...prev, ballsTwoExercise: a}))
    }
    
    function handleChangeTwoExercise(v) {
      let a = undefined
      setExercise((prev) => ({...prev, resultTwoExercise: v.target.value}))
      exercise.arreyTwoExercisr.forEach((e, i) => {
        for (i in e) {        
          if (v.target.value >= e[i] ) { return a = i} 
        }
      });
      setExercise((prev) => ({...prev, ballsTwoExercise: a}))
    }
//- 3 -------------------------------------------------------------------------
function choiseThreeExercises(value, id ){
  let a = undefined
  setExercise((prev) => ({...prev, arreyThreeExercisr: id.bal,
    minThreePlaseholder: Object.values(id.bal[1])[0],
    maxThreePlaseholder: Object.values(id.bal[id.bal.length - 1])[0],
  }))
  id.bal.forEach((e, i) => {
    for (i in e) {
      if (e[i] <= exercise.resultThreeExercise) {return a = i} 
    }
  });
  setExercise((prev) => ({...prev, ballsThreeExercise: a}))
}

function handleChangeThreeExercise(v) {
  let a = undefined
  setExercise((prev) => ({...prev, resultThreeExercise: v.target.value}))
  exercise.arreyThreeExercisr.forEach((e, i) => {
    for (i in e) {        
      if (v.target.value >= e[i] ) { return a = i} 
    }
  });
  setExercise((prev) => ({...prev, ballsThreeExercise: a}))
}
//- 4 -------------------------------------------------------------------------
function choiseFourExercises(value, id ){
  let a = undefined
  setExercise((prev) => ({...prev, arreyFourExercisr: id.bal,
    minFourPlaseholder: Object.values(id.bal[1])[0],
    maxFourPlaseholder: Object.values(id.bal[id.bal.length - 1])[0],
  }))
  id.bal.forEach((e, i) => {
    for (i in e) {
      if (e[i] <= exercise.resultFourExercise) {return a = i} 
    }
  });
  setExercise((prev) => ({...prev, ballsFourExercise: a}))
}

function handleChangeFourExercise(v) {
  let a = undefined
  setExercise((prev) => ({...prev, resultFourExercise: v.target.value}))
  exercise.arreyFourExercisr.forEach((e, i) => {
    for (i in e) {        
      if (v.target.value >= e[i] ) { return a = i} 
    }
  });
  setExercise((prev) => ({...prev, ballsFourExercise: a}))
}
//- 5 -------------------------------------------------------------------------
function choiseFiveExercises(value, id ){
  let a = undefined
  setExercise((prev) => ({...prev, arreyFiveExercisr: id.bal,
    minFivePlaseholder: Object.values(id.bal[1])[0],
    maxFivePlaseholder: Object.values(id.bal[id.bal.length - 1])[0],
  }))
  id.bal.forEach((e, i) => {
    for (i in e) {
      if (e[i] <= exercise.resultFiveExercise) {return a = i} 
    }
  });
  setExercise((prev) => ({...prev, ballsFiveExercise: a}))
}

function handleChangeFiveExercise(v) {
  let a = undefined
  setExercise((prev) => ({...prev, resultFiveExercise: v.target.value}))
  exercise.arreyFiveExercisr.forEach((e, i) => {
    for (i in e) {        
      if (v.target.value >= e[i] ) { return a = i} 
    }
  });
  setExercise((prev) => ({...prev, ballsFiveExercise: a}))
}

function handelSelectWeight(v) {
  setOwer((prev) => ({...prev, weightSelect: v}))

}
useEffect(() => {
  const i = levelAssessment(ower.genderSelect, ower.categorySelect, ower.ageSelect, ower.colSelect, exercise.ballsOneExercise, exercise.ballsTwoExercise, exercise.ballsThreeExercise, exercise.ballsFourExercise, exercise.ballsFiveExercise)
  setExercise((prev) => ({...prev, itog: i}))
}, [ower.genderSelect, ower.categorySelect, ower.ageSelect, ower.colSelect, exercise.ballsOneExercise, exercise.ballsTwoExercise, exercise.ballsThreeExercise, exercise.ballsFourExercise, exercise.ballsFiveExercise])





let arr = [

  {
    title: '3',
    description: 180,
  },
  {
    title: '4',
    description: 210,
  },
  {
    title: '5 (3У)',
    description: 240,
  },
  {
    title: '5 (2У)',
    description: 250,
  },
  {
    title: '5 (1У)',
    description: 270,
  },
  {
    title: '5 (ВУ)',
    description: 300,
  },
]
let arrNaws = sampleAssessment(ower.genderSelect, ower.categorySelect, ower.ageSelect).level
arrNaws.forEach((e, i) => {
    arr = []
  for (i in e) {        
    if (i !== '2') { 
      arr.push({title: i, description: e[i]})
    } 
  }
}) 

return (
        <Layout.Content style={contentStyle}>
              {/* <h4>{ower.genderSelect} {ower.weightSelect} {ower.ageOldYoung}</h4> */}
              <Form
              style={{
                maxWidth: '1100px',
                boxSizing: 'content-box',
                marginTop: 0, 
                marginBottom: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
                form={form}
                layout='vertical'
                name="basic"

                initialValues={{
                  genderForm: [ower.genderSelect],
                  ageForm: [ower.ageSelect],
                  categoryForm: 1,
                  colForm: 4,
                  weightForm: 'до 70 кг.',
      
                }}
                onFinish={onFinish}
                //autoComplete="off"
                validateMessages={validateMessages}
              >

<Row gutter={[10, 10]}>     
  
  <Col span={widthProject.left}>     
            <Card
              style={{
                marginBottom: '10px'
              }}
                size="small" 
                title="Исходные данные"
            >   
                <Row gutter={[10, 0]}>
                  <Col span={12}>  
                    <Form.Item
                      label="Пол"
                      name="genderForm">
                      
                      <Select          
                                style={{
                                }}
                                //open={select}
                                onChange={(handelSelectGender)}
                              
                                //onClick={() => setSelect((prev) => !prev)}
                                //optionLabelProp='lable'
                                options={gender.map(gen => ({
                                    lable: gen.id,
                                    value: gen.name,
                                }))}
                                optionRender={(option) => (
                                <Space >
                                    {option.data.value}
                                </Space>
                                )}
                            />
                    </Form.Item>
                  </Col>
                  <Col span={12}>  
                    {/* Возраст */}
                    <Form.Item
                      label="Возраст"
                      name="ageForm"
                    >
                      <Select
                                style={{
                                }}
                                //open={select}
                                onSelect={(handelSelectAge)}
                                //onClick={() => setSelect((prev) => !prev)}
                                options={newAge.map(c => ({
                                    
                                    lable: c.id,
                                    value: c.ageDescription,
                                }))}
                                optionRender={(option) => (
                                <Space>
                                    {option.data.value}
                                </Space>
                                )}
                        />
                    </Form.Item>
                  </Col>
                  <Col span={12}>  
                    {/* Категория */}
                    <Form.Item
                      label="Категория"
                      name="categoryForm"
                    >
                      <Select
                                style={{
                                }}
                                //open={select}
                                onChange={(handelSelectCategory)}
                                //onClick={() => setSelect((prev) => !prev)}
                                options={category.map(c => ({
                                    lable: c.id,
                                    value: c.category,
                                }))}
                                optionRender={(option) => (
                                <Space>
                                    {option.data.value}
                                </Space>
                                )}
                        />
                    </Form.Item>
                  </Col>
                  <Col span={12}>  
                    {/* Количество упражнений */}
                    <Form.Item 
                      label="Вес"
                      name="weightForm"
                      >
                      { (ower.genderSelect === 'Женский') && 
                      <Select 
                      onChange={(handelSelectWeight)}
                      >
                        <Select.Option value="до 60 кг.">до 60 кг.</Select.Option>
                        <Select.Option value="от 60 до 70 кг.">от 60 до 70 кг.</Select.Option>
                        <Select.Option value="от 70 кг.">от 70 кг.</Select.Option>
                      </Select>
                      }
                      { (ower.genderSelect === 'Мужской') && 
                      <Select 
                      onChange={(handelSelectWeight)}
                      >
                        <Select.Option value="до 70 кг.">до 70 кг.</Select.Option>
                        <Select.Option value="от 70 до 80 кг.">от 70 до 80                                               кг.</Select.Option>
                        <Select.Option value="от 80 кг.">от 80 кг.</Select.Option>
                      </Select>
                      }
                    </Form.Item>


                    {/* <Form.Item 
                      label="Упражнения"
                      name="colForm"
                      >
                      <Select disabled>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>

                      </Select>
                    </Form.Item> */}
                  </Col>
                </Row>
            </Card>
            <Card
              style={{
                marginBottom: '10px'
              }}
                size="small" 
                title="Результаты"
            >

{/* 1 ---------------------------------------------------------------------------------- */}

              <Row gutter={[10, 0]}>  
                <Col span={24}>       
                  <Form.Item 
                    name="setOneSelect" >
                  <Select          
                          style={{
                            
                          }}
                          placeholder={typeOfExercise[0][0] + (typeOfExercise[0][1] !== undefined ? ' / ' + typeOfExercise[0][1]: '') + (typeOfExercise[0][2] !== undefined ? ' / ' + typeOfExercise[0][2]: '')}
                          onChange={(choiseOneExercises)}
                          options={balls
                            .filter((v) => (v.quality === typeOfExercise[0][0] || v.quality === typeOfExercise[0][1]) || v.quality === typeOfExercise[0][2])
                            .filter((v) => (v.age === '' || v.age === ower.ageOldYoung ))
                            .filter((v) => (v.weight === '' || v.weight === ower.weightSelect ))
                            .map(gen => ({
                              id: gen.id,
                              value: gen.name,
                              bal: gen.bal,
                          }))}
                          optionRender={(option) => (
                          <Space >
                              {option.data.id}{option.data.value}
                          </Space>
                          )}
                      />
                  </Form.Item>  
                </Col>  

                <Col span={12}>
                  <Form.Item
                    name="oneExesrcise"
                    rules={[
                      {
                        required: true,
                        //type: 'number',
                        //min: -10,
                    },]}
                  >
                    <Input     
                      //addonBefore={prefixSelector} 
                      style={{ 
                        width: '100%',
                        textAlign: 'center',
                      
                      }} 
                      placeholder={exercise.minOnePlaseholder && 'от ' + exercise.minOnePlaseholder + ' до ' + exercise.maxOnePlaseholder}
                      onChange={(handleChangeOneExercise)}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="ballsOneRez"
                    status="error"
                  >
                    <Input     
                      disabled={true}
                      status="error"
                      style={{ 
                        textAlign: 'center',
                        color: 'red',
                        width: '100%',
                      }} 
                      placeholder={exercise.ballsOneExercise ? exercise.ballsOneExercise : 'баллы'} 
                      />
                  </Form.Item>
                </Col>
              </Row>    
{/* 2 ---------------------------------------------------------------------------------- */}
            { ower.colSelect >= 2 &&           
              <Row gutter={[10, 0]}>  
                <Col span={24}>       
                  <Form.Item 
                    name="setTwoSelect" >
                  <Select          
                          style={{

                          }}
                          placeholder={typeOfExercise[1][0] + (typeOfExercise[1][1] !== undefined ? ' / ' + typeOfExercise[1][1]: '') + (typeOfExercise[1][2] !== undefined ? ' / ' + typeOfExercise[1][2]: '')}
                          onChange={(choiseTwoExercises)}
                          options={balls
                            .filter((v) => (v.quality === typeOfExercise[1][0] || v.quality === typeOfExercise[1][1]) || v.quality === typeOfExercise[1][2])
                            .filter((v) => (v.age === '' || v.age === ower.ageOldYoung ))
                            .filter((v) => (v.weight === '' || v.weight === ower.weightSelect ))
                            .map(gen => ({
                              id: gen.id,
                              value: gen.name,
                              bal: gen.bal,
                          }))}
                          optionRender={(option) => (
                          <Space >
                              {option.data.id}{option.data.value}
                          </Space>
                          )}
                      />
                  </Form.Item>  
                </Col>  
                <Col span={12}>
                  <Form.Item
                    name="twoExesrcise"
                    rules={[
                      {
                        required: true,
                    },]}
                  >
                    <Input     
                      style={{ 
                        textAlign: 'center',                      
                      }} 
                      placeholder={exercise.minTwoPlaseholder && 'от ' + exercise.minTwoPlaseholder + ' до ' + exercise.maxTwoPlaseholder}
                      onChange={(handleChangeTwoExercise)}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="ballsTwoRez"
                  >
                    <Input     
                      disabled={true}
                      style={{ 
                        textAlign: 'center',
                      }} 
                      placeholder={exercise.ballsTwoExercise ? exercise.ballsTwoExercise : 'баллы'} 
                      />
                  </Form.Item>
                </Col>

              </Row>  
            }
{/* 3 ---------------------------------------------------------------------------------- */}
            { ower.colSelect >= 3 &&            
              <Row gutter={[10, 0]}>  
                <Col span={24}>       
                  <Form.Item 
                    name="setThreeSelect" >
                  <Select          
                          style={{

                          }}
                          placeholder={typeOfExercise[2][0] + (typeOfExercise[2][1] !== undefined ? ' / ' + typeOfExercise[2][1]: '') + (typeOfExercise[2][2] !== undefined ? ' / ' + typeOfExercise[2][2]: '')}
                          onChange={(choiseThreeExercises)}
                          options={balls
                            .filter((v) => (v.quality === typeOfExercise[2][0] || v.quality === typeOfExercise[2][1]) || v.quality === typeOfExercise[2][2])
                            .filter((v) => (v.age === '' || v.age === ower.ageOldYoung ))
                            .filter((v) => (v.weight === '' || v.weight === ower.weightSelect ))
                            .map(gen => ({
                              id: gen.id,
                              value: gen.name,
                              bal: gen.bal,
                          }))}
                          optionRender={(option) => (
                          <Space >
                              {option.data.id}{option.data.value}
                          </Space>
                          )}
                      />
                  </Form.Item>  
                </Col>  
                <Col span={12}>
                  <Form.Item
                    name="ThreeExesrcise"
                    rules={[
                      {
                        required: true,
                    },]}
                  >
                    <Input     
                      style={{ 
                        textAlign: 'center',                      
                      }} 
                      placeholder={exercise.minThreePlaseholder && 'от ' + exercise.minThreePlaseholder + ' до ' + exercise.maxThreePlaseholder}
                      onChange={(handleChangeThreeExercise)}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="ballsThreeRez"
                  >
                    <Input     
                      disabled={true}
                      style={{ 
                        textAlign: 'center',
                      }} 
                      placeholder={exercise.ballsThreeExercise ? exercise.ballsThreeExercise : 'баллы'} 
                      />
                  </Form.Item>
                </Col>

              </Row>  
            }
{/* 4 ---------------------------------------------------------------------------------- */}
            { ower.colSelect >= 4 &&
              <Row gutter={[10, 0]}>  
                <Col span={24}>       
                  <Form.Item 
                    name="setFourSelect" >
                  <Select          
                          style={{

                          }}
                          placeholder={typeOfExercise[3][0] + (typeOfExercise[3][1] !== undefined ? ' / ' + typeOfExercise[3][1]: '') + (typeOfExercise[3][2] !== undefined ? ' / ' + typeOfExercise[3][2]: '')}
                          onChange={(choiseFourExercises)}
                          options={balls
                            .filter((v) => (v.quality === typeOfExercise[3][0] || v.quality === typeOfExercise[3][1]) || v.quality === typeOfExercise[3][2])
                            .filter((v) => (v.age === '' || v.age === ower.ageOldYoung ))
                            .filter((v) => (v.weight === '' || v.weight === ower.weightSelect ))
                            .map(gen => ({
                              id: gen.id,
                              value: gen.name,
                              bal: gen.bal,
                          }))}
                          optionRender={(option) => (
                          <Space >
                              {option.data.id}{option.data.value}
                          </Space>
                          )}
                      />
                  </Form.Item>  
                </Col>  
                <Col span={12}>
                  <Form.Item
                    name="FourExesrcise"
                    rules={[
                      {
                        required: true,
                    },]}
                  >
                    <Input     
                      style={{ 
                        textAlign: 'center',                      
                      }} 
                      placeholder={exercise.minFourPlaseholder && 'от ' + exercise.minFourPlaseholder + ' до ' + exercise.maxFourPlaseholder}
                      onChange={(handleChangeFourExercise)}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="ballsFourRez"
                  >
                    <Input     
                      disabled={true}
                      style={{ 
                        textAlign: 'center',
                      }} 
                      placeholder={exercise.ballsFourExercise ? exercise.ballsFourExercise : 'баллы'} 
                      />
                  </Form.Item>
                </Col>

              </Row>  
             } 
{/* 5 ---------------------------------------------------------------------------------- */}
             { ower.colSelect === 5 && 
              <Row gutter={[10, 0]}>  
                <Col span={24}>       
                  <Form.Item 
                    name="setFiveSelect" >
                  <Select          
                          style={{

                          }}
                          placeholder={typeOfExercise[4][0] + (typeOfExercise[4][1] !== undefined ? ' / ' + typeOfExercise[4][1]: '') + (typeOfExercise[4][2] !== undefined ? ' / ' + typeOfExercise[4][2]: '')}
                          onChange={(choiseFiveExercises)}
                          options={balls
                            .filter((v) => (v.quality === typeOfExercise[4][0] || v.quality === typeOfExercise[4][1]) || v.quality === typeOfExercise[4][2])
                            .filter((v) => (v.age === '' || v.age === ower.ageOldYoung ))
                            .filter((v) => (v.weight === '' || v.weight === ower.weightSelect ))
                            .map(gen => ({
                              id: gen.id,
                              value: gen.name,
                              bal: gen.bal,
                          }))}
                          optionRender={(option) => (
                          <Space >
                              {option.data.id}{option.data.value}
                          </Space>
                          )}
                      />
                  </Form.Item>  
                </Col>  
                <Col span={12}>
                  <Form.Item
                    name="FiveExesrcise"
                    rules={[
                      {
                        required: true,
                    },]}
                  >
                    <Input     
                      style={{ 
                        textAlign: 'center',                      
                      }} 
                      placeholder={exercise.minFivePlaseholder && 'от ' + exercise.minFivePlaseholder + ' до ' + exercise.maxFivePlaseholder}
                      onChange={(handleChangeFiveExercise)}/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="ballsFiveRez"
                  >
                    <Input     
                      disabled={true}
                      style={{ 
                        textAlign: 'center',
                      }} 
                      placeholder={exercise.ballsFiveExercise ? exercise.ballsFiveExercise : 'баллы'} 
                      />
                  </Form.Item>
                </Col>

              </Row>  
            }
</Card>
</Col>

{/* ---------------------------------------- */}
<Col span={widthProject.right}>           

{exercise.itog &&             <Card size="small" title="Оценка"
            style={{
              marginBottom: '10px'
            }}>
              <Row gutter={[10, 10]}>
                <Col 
                  span={24}
                  style={{
                    textAlign: 'center',
                  }}
                  >                  
                    <Typography.Title 
                      // style={{
                      // }}
                      type={exercise.itog && (
                        (exercise.itog[0].toString() === '2') ? 'danger' : 
                        (exercise.itog[0].toString() === '3') ? 'warning' : 
                        (exercise.itog[0].toString() === '4') ? 'secondary' : 
                        'success'
                      )} // danger / success
                      level={5}
                      >              
                        {/* {itog && itog[0]}   */}
                        {
                          exercise.itog && (
                            (exercise.itog[0].toString() === '2') ? 'Неудовлетворительно' : 
                            (exercise.itog[0].toString() === '3') ? 'Удовлетворительно' : 
                            (exercise.itog[0].toString() === '4') ? 'Хорошо' : 
                            (exercise.itog[0].toString() === '5 (3У)') ? 'Отлично (3 уровень)' : 
                            (exercise.itog[0].toString() === '5 (2У)') ? 'Отлично (2 уровень)' : 
                            (exercise.itog[0].toString() === '5 (1У)') ? 'Отлично (1 уровень)' : 
                            (exercise.itog[0].toString() === '5 (ВУ)') ? 'Отлично (Высший уровень)' : null
                          ) 
                        }  
                    </Typography.Title>
                </Col>
                <Col 
                  span={24}
                  >
                    <Typography.Text 
                      style={{
                        textAlign: 'center',
                      }}
                      type={exercise.itog && (
                        (exercise.itog[0].toString() === '2') ? 'danger' : 
                        (exercise.itog[0].toString() === '3') ? 'warning' : 
                        (exercise.itog[0].toString() === '4') ? 'secondary' : 
                        'success'
                      )} // danger / success
                      level={5}
                      >              
                      {exercise.itog && exercise.itog[1]}
                      
                    </Typography.Text>
                </Col>

              </Row>
            </Card>}
            <Card 

              size="small" 
              title="Оценки уровня физической подготовленности">
            {
                  arr.map((a) => 
                     <LavelGrade 
                      key={a.title} 
                      title={
                        (a.title === '3') ? 'Удовлетворительно' : 
                        (a.title === '4') ? 'Хорошо' : 
                        (a.title === '5 (3У)') ? 'Отлично (3 уровень)' : 
                        (a.title === '5 (2У)') ? 'Отлично (2 уровень)' : 
                        (a.title === '5 (1У)') ? 'Отлично (1 уровень)' : 
                        (a.title === '5 (ВУ)') ? 'Отлично (Высший уровень)' : null
                      } 
                      description={a.description} 
                      typeColor={
                        (a.title === '3') ? 'warning' : 
                        (a.title === '4') ? 'info' : 
                        (a.title === '5 (3У)') ? 'success' : 
                        (a.title === '5 (2У)') ? 'success' : 
                        (a.title === '5 (1У)') ? 'success' : 
                        (a.title === '5 (ВУ)') ? 'success' : ''                
                      }>
                      
                    </LavelGrade>
                )
                }
            </Card>

</Col>



</Row>
  </Form>





        </Layout.Content>

    )
}