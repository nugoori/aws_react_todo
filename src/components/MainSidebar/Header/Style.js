import { css } from "@emotion/react";

// layout -> container -> box
export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;   
`;

export const STitle = css`
    font-size: 18px;
    font-weight: 600;
    cursor: default;
`;

export const SToggleButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
    height: 100%;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

export const SSearchBox = css`
    position: relative;
    display: flex;
    margin: 10px 0px;
    padding: 5px 5px 5px 30px;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    width: 95%;
`;

export const SSearchIcon = css`

    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 5%;
`;

export const SSearchInput = css`

    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
`;
















