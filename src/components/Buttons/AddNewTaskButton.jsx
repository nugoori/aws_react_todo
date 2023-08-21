import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './Style'
import { isRigthSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';
import { FaPlus } from 'react-icons/fa';

function AddNewTaskButton({ target, setTarget }) {

    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRigthSubSidebarState);

    const handleOpenClick = (e) => {
        console.log(e.target)
        if(target === e.target) {
            // 타겟이 같은 경우만 서브사이드바를 사라지게함
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if(target === null) {
            // target이 다른경우 서브사이드바는 켜져있고 타겟만 바뀜
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target);
        }
    }

    return (
        <button css={S.SLayout} onClick={handleOpenClick}>
            <FaPlus css={S.SIcon}/>
            <span css={S.SName}>Add New Task</span>
        </button>
    );
}

export default AddNewTaskButton;



