import { atom } from "recoil";

// sidebar의 열리는 상태를 recoilState로 관리
export const isSidebarShowState = atom({
    key: "isSidebarShow",
    default: false
});

export const isRigthSubSidebarState = atom({
    key: "isRightSubSidebar",
    default: false
});