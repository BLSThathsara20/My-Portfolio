import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Savindu Thathsara</span></h4>
                <p className="paragraph">
                I'm a web developer with a focus on the MERN stack, but still exploring 
                other technologies and frameworks that catch 
                my interest! I have good knowledge about GIT version control system.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Job Title</p>
                    </div>
                    <div className="info">
                        <p>: B.L.S. Thathsara</p>
                        <p>: 22</p>
                        <p>: Sri Lankan </p>
                        <p>: English , Sinhala </p>
                        <p>: Weeraketiya, Hambantota, Sri Lanka</p>
                        <p>: Traniee Software Engineer</p>
                    </div>
                </div>
                <a href="https://drive.google.com/uc?export=download&id=1aK98IscT27qQjcn46icfWR4W0Y3PNf97"> <PrimaryButton title={'Download Cv'} /> </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
