import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
    const [questions, setQuestions] = useState(data);
    const [showInfo, setShowInfo] = useState({ showInfo: false, id: 0 });
    function idFunnel(id) {
        setShowInfo((prev) => {
            if (+id === showInfo.id) {
                return { showInfo: !showInfo.showInfo, id: +id };
            }
            return { showInfo: true, id: +id };
        });
    }
    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {questions.map((question) => {
                        return (
                            <SingleQuestion
                                key={question.id}
                                {...question}
                                idFunnel={idFunnel}
                                showInfo={
                                    +question.id === showInfo.id
                                        ? showInfo.showInfo
                                        : false
                                }
                            ></SingleQuestion>
                        );
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
