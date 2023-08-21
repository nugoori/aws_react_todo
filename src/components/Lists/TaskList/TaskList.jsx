import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { FaChevronRight } from 'react-icons/fa'
import { useRecoilState } from 'recoil';
import { isRigthSubSidebarState } from '../../../store/sidebarStore';

function TaskList({ target, setTarget }) {

    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRigthSubSidebarState);

    const handleOpenClick = (e) => {
        console.log(e.target)
        if(target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if(target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target);
        }
    }

    const handleCheckBoxClick = (e) => {
        // 버블링 방지 // 캡쳐링?
        e.stopPropagation();
    }

    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" onClick={handleCheckBoxClick}/>
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight />
            </li>
        </ul>
    );
}

export default TaskList;