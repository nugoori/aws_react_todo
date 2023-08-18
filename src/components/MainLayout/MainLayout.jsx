/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import React from 'react';
import MainSidebar from "../MainSidebar/MainSidebar"
import * as S from "./Style.js";

function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
                <MainSidebar />
            {children}
        </div>
    );
}

export default MainLayout;