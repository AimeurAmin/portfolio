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

    .badge {
        margin-block-start: calc(25 / 16 * .8rem);
    }

    .first-badge {
        margin-block-start: calc(65 / 16 * .8rem);
    }

    .badgeIcon {
        margin-inline-end: 2%;
    }

    .external-links {
        display: flex;
        justify-content: space-between;
        width: 25%;
        margin-block-start: calc(45 / 16 * .8rem);
    }

    .location-and-contact {
        display: block;
        width: 99%;
        margin-block-start: calc(35 / 16 * .8rem);
        padding-block: calc(35 / 16 * .8rem);
        background-color: #272C36;
        .location {
            display: flex;
            justify-content: center;
            width: 100%;
            img {
                margin-inline-end: 2%;
            }
        }
        .email, .phone {
            text-align: center;
            margin-block-start: calc(30 / 16 * .8rem);
        }
    }
    .hire-me-container {
        width: 100%;
        display: flex;
        justify-content: center;
        .hire-me {
            width: 70%;
            margin-block-start: calc(60 / 16 * .8rem);
            color: #FFFFFF;
            background-color: transparent;
            border: none;
            cursor: pointer;
            :hover {
                opacity: 90%;
            }
            :active {
                opacity: 100%;
            } 
            .content {
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(65 / 16 * .8rem);
                background-color: #272C36;
                border-radius: calc(10 / 16 * .8rem);
                font-size: calc(20 / 16 * .8rem);
                font-weight: 600;
               
                img {
                    margin-inline-end: 2%;
                    width: calc(40 / 16 * .8rem);
                }
            }
        }
    }
`