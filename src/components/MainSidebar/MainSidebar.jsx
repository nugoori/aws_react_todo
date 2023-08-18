/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as S from "./Style.js"
import Header from './Header/Header.jsx';
import List from './List/List.jsx';
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from "../../store/sidebarStore.js"

function MainSidebar() {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        tasks: [
            {
                id: 1,
                path: "/upcoming",
                icon: "",
                name: "Upcoming",
                count: 12
            },
            {
                id: 2,
                path: "/today",
                icon: "",
                name: "Today",
                count: 5
            },
            {
                id: 3,
                path: "/calender",
                icon: "",
                name: "Calender",
                count: 0
            },
            {
                id: 4,
                path: "/stickywall",
                icon: "",
                name: "Sticky Wall",
                count: 0
            }
        ],
        lists: [
            {
                id: 1,
                path: "",
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                id: 2,
                path: "",
                icon: "",
                name: "Work",
                count: 0
            },
            {
                id: 3,
                path: "",
                icon: "",
                name: "List 1",
                count: 0
            }
        ]
    });

    return (
        <div css={S.SLayout(isSidebarShow)}>
            <Header />
            {isSidebarShow && (
                <>
                    <List title={"TASKS"} list={mainMenuListArray.tasks} />
                    <List title={"LISTS"} list={mainMenuListArray.lists} />
                </>

            )};
        </div>
    );
}

export default MainSidebar;