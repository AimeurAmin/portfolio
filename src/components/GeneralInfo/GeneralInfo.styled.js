import styled from "styled-components";

export const StyledGeneralInfo = styled.div`
    background-color: #0F1015;
    color: #FFF;
    width: 26%;
    border-radius: calc(43 / 16 * 0.8rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: calc(65 / 16 * .8rem);
    height: 84vh;

    .mypic {
        width: calc(140 / 16 * .8rem);
        height: calc(140 / 16 * .8rem);
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .name-container{
        display: flex;
        margin-block-start: calc(20 / 16 * .8rem);
        .first-name {
            margin-inline-end: calc(13 / 16 * .8rem);
        }
    }
`