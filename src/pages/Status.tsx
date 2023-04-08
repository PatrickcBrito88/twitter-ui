import {Header} from "../components/Header";
import {Separator} from "../components/Separator";
import {Tweet} from "../components/Tweet";
import React, {FormEvent, KeyboardEvent, useState} from "react";

import './Status.css'
import {PaperPlaneRight} from "phosphor-react";

const answers = [
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso'
]

export function Status() {

    const [answers, setAnswers] = useState(['Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso'])
    const [newAnswer, setNewAnswer] = useState('');

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();
        setAnswers([newAnswer, ...answers]);
        setNewAnswer('');
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)){
            event.preventDefault();
            setAnswers([newAnswer, ...answers]);
            setNewAnswer('');
        }
    }

    return (
        <main className="status">
            <Header title="Tweet"/>

            <Tweet content="lorem ipsum dolor sit amet, consectetur adipiscing elit."/>

            <Separator/>

            <form className="answer-tweet-form" onSubmit={createNewAnswer}>
                <label htmlFor="tweet">
                    <img src="https://github.com/patrickcbrito88.png" alt="Patrick Brito"/>
                    <textarea
                        id="tweet"
                        placeholder="Tweet your answer"
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {setNewAnswer(event.target.value)}}
                        value={newAnswer}
                    />
                </label>

                <button type="submit">
                    Answer
                </button>
            </form>

            {
                answers.map(answer => <Tweet key={answer} content={answer}/>)
            }
        </main>
    )
}