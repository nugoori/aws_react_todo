import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import MainContainer from '../../components/MainContainer/MainContainer.jsx';
import Header from '../../components/MainContainer/Header/Header';
import AddNewTaskButton from '../../components/Buttons/AddNewTaskButton';
import TaskList from '../../components/Lists/TaskList/TaskList.jsx';
import RightSubSidebar from '../../components/RightSubSidebar/RightSubSidebar.jsx';

function Today(props) {

    const [ target, setTarget ] = useState(null);

    return (
        <>
            <MainContainer >
                <Header title={"Today"} count={5} />   
                <AddNewTaskButton target={target} setTarget={setTarget} /> 
                <TaskList target={target} setTarget={setTarget} />
            </MainContainer>
            <RightSubSidebar >

            </RightSubSidebar>
        </>
    );
}

export default Today;
















