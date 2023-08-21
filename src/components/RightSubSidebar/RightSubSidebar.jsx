import React from 'react';
/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import * as S from "./Style";
import { isRigthSubSidebarState } from '../../store/sidebarStore.js';
import { useRecoilState } from 'recoil';

function RightSubSidebar({ children }) {

    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRigthSubSidebarState);

    return (
        <div css={S.SLayout(isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;