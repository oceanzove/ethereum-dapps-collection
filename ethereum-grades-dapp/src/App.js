import React from "react";
import './App.css';
import GradesContract from "./components/Contracts/GradesContract";
import {useState} from "react";

function App(props) {
    const [isSetColumnVisible, setIsSetColumnVisible] = useState(true);
    const gradesContract = new GradesContract();

    const onToggleButtonClicked = () => {
        setIsSetColumnVisible(!isSetColumnVisible);
    }
    
    const onSetGradeClicked = async () => {
        const title = props.page.setTitle;
        const grade = props.page.setGrade;

        await gradesContract.setGrade(title, grade);
        props.onSetGrade();
    }

    const onGetResultsClicked = async () => {
        const title = props.page.getTitle;

        const response = await gradesContract.getResults(title);
        props.onGetResults(response.amount, response.average, response.sum );
    }

    const onChangeSetTitle = (e) => {
        const value = e.target.value;
        props.onUpdateSetTitle(value);
    }
    const onChangeSetGrade = (e) => {
        let value = e.target.value;
        if (value > 5) {
            value = 5;
        }
        if (value < 1) {
            value = 1;
        }
        props.onUpdateSetGrade(value);
    }
    const onChangeGetTitle = (e) => {
        const value = e.target.value;
        props.onUpdateGetTitle(value);
    }
    return (
        <div className="App">
            <div className="container">
                <div className="title">
                    <h2>Grades</h2>
                </div>
                <div className='wrapper'>
                    {isSetColumnVisible ? (
                        <div>
                            <div className='input-div'>
                                <label htmlFor='title-set' className='input-label'>
                                    Название
                                </label>
                                <input type="text" id='title-set'
                                       value={props.page.setTitle}
                                       onChange={onChangeSetTitle}
                                />
                            </div>
                            <div className='input-div'>
                                <label htmlFor='grade-set' className='input-label'>
                                    Оценка
                                </label>
                                <input type="number" id='grade-set'
                                       value={props.page.setGrade}
                                       onChange={onChangeSetGrade}
                                       min="1" max="5"
                                />
                            </div>
                            <button
                                disabled={
                                    !props.page.setTitle || !props.page.setGrade
                                }
                                onClick={onSetGradeClicked} className="button">Поставить
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className='input-div'>
                                <label htmlFor='title-get' className='input-label'>
                                    Название
                                </label>
                                <input type="text" id='title-get'
                                       value={props.page.getTitle}
                                       onChange={onChangeGetTitle}
                                />
                            </div>
                            <button
                                disabled={
                                    !props.page.getTitle
                                }
                                onClick={onGetResultsClicked} className="button">Результат
                            </button>
                            <div className='input-div'>
                                <label htmlFor='amount' className='input-label'>Количество оценок</label>
                                <output id='amount'>{props.page.result[0].amount.toString()}</output>
                            </div>
                            <div className='input-div'>
                                <label htmlFor='average' className='input-label'>Средний балл</label>
                                <output id='average'>{props.page.result[0].average.toString()}</output>
                            </div>
                            <div className='input-div'>
                                <label htmlFor='sum' className='input-label'>Сумма</label>
                                <output id='sum'>{props.page.result[0].sum.toString()}</output>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button id="toggleButton" onClick={onToggleButtonClicked} className="button toggle">
                {isSetColumnVisible ? 'Посмотреть результаты' : 'Поставить оценку'}
            </button>
        </div>
    );
}

export default App;
