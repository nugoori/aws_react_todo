import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { isSidebarShowState, isRigthSubSidebarState } from '../../store/sidebarStore.js';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {

    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRigthSubSidebarState);

    useEffect(() => {
        return () => {
            // 업마운트로 다른페이지가 업로드되면 rightSidebar가 닫히도록
            setIsRightSubSidebar(false);
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default MainContainer;