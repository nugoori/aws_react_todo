/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as S from "./Style.js"

function Calender(props) {

    const [ count, setCount ] = useState(0);
    const [ saveCount, setSaveCount ] = useState(0);
    // userEffect(마운트 때 실행 될 함수, [ 상태변수(여러개도 가능) ])
    useEffect(() => {
        console.log("캘린더 컴포넌트가 마운트 됨");
        return () => {
            console.log("캘린더가 언마운트 됨")
        }
    }, [saveCount]);

    // [] 비어있는 배열일 때는 페이지가 처음 렌더링 될 때 한번만 실행됨

    const handlePlusClick = () => {
        setCount(count + 1);
    }
    
    const handleMinusClick = () => {
        setCount(count - 1);
    }
    
    const handleSaveClick = () => {
        setSaveCount(count);
    }

    return (
        <div css={S.SLayout}>
            <h1>{count}</h1>
            <h1>{saveCount}</h1>
            <button onClick={handlePlusClick}>+1</button>
            <button onClick={handleMinusClick}>-1</button>
            <button onClick={handleSaveClick}>save</button>
        </div>
    );
}

export default Calender;









