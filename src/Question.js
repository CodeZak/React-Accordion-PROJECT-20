import React, { useRef, useState, useEffect} from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const Question = ({ title, info, id, idFunnel, showInfo }) => {
    function clickHnadler(e) {
        idFunnel(e.currentTarget.id);
    }
    const divRef = useRef();
    const pRef = useRef();

    const [showHeight, setShowHeight] = useState()

    useEffect(() => {
        const divBlockHeight = divRef.current.getBoundingClientRect().height
        const pblockHeight = pRef.current.getBoundingClientRect().height
        setShowHeight(pblockHeight)
    }, [showInfo]);

    console.log(showInfo);
    console.log("showHeight : ",showHeight);
    return (     

        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={clickHnadler} id={id}>
                    {showInfo ? <FaMinus /> : <FaPlus />}
                </button>
            </header>
            <div className="divBlock" ref={divRef} style={{height : showInfo ? `${showHeight + 15}px` : 0}}>
                <p className="pBlock" ref= {pRef}>{info}</p>
            </div>
        </article>
    );
};

export default Question;
