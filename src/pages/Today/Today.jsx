/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as S from "./Style.js"
import { isSidebarShowState } from '../../store/sidebarStore.js';

function Today(props) {
    const [ isSidebarShow, setIsSidebarShow ] = useState(isSidebarShowState);

    return (
        <div css={S.SLayout}>
            
        </div>
    );
}

export default Today;
















