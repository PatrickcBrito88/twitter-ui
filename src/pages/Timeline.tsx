import {Header} from "../components/Header.js";
import {Separator} from "../components/Separator.js";
import {Tweet} from "../components/Tweet.js";
import React, {FormEvent, KeyboardEvent, useState} from "react";
import './Timeline.css';
export function Timeline() {

    const [tweets, setTweets] = useState(['Meu primeiro tweet',
        'Meu segundo tweet',
        'Meu terceiro tweet'])
    const [newTweet, setNewTweet] = useState('');

    function createNewTweet(event: FormEvent) {
        event.preventDefault();
        setTweets([newTweet, ...tweets]);
        setNewTweet('');
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)){
            event.preventDefault();
            setTweets([newTweet, ...tweets]);
            setNewTweet('');
        }
    }

    return (
        <main className="timeLine">
            <Header title="Home"/>

            <form className="new-tweet-form" onSubmit={createNewTweet}>
                <label htmlFor="tweet">
                    <img src="https://github.com/patrickcbrito88.png" alt="Patrick Brito"/>
                    <textarea
                        id="tweet"
                        placeholder="What's happening?"
                        value={newTweet}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewTweet(event.target.value);
                        }}
                    />
                </label>

                <button type="submit">Tweet</button>
            </form>
            <Separator/>
            {
                tweets.map(tweet => <Tweet key={tweet} content={tweet}/>)
            }
        </main>
    )
}