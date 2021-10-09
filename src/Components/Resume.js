import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Front-End Developer'}
                        subTitle={'HexaCode Solution'}
                        text={'Hexacode Solution is a leading web designing company in Sri Lanka. I got the lot of experience in working this company. Mainly Wordpres theme development & Manage e-commerce sites using woocommerce pluging, Web UI Design using css, bootstrap, uikit framework.'} 
                    />
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Social Media Marketer'}
                        subTitle={'RightPlace.LK'}
                        text={'Rightplace.lk is the Sri Lankan most innovative property platform and operates a two-sided network. I got the lot of experience about Managing social media platforms and Social media marketing mainly using FB, Instagram and Control the back office in rightplace.lk'} 
                    />
                    <ResumeItem 
                        year={'2020 - Present'} 
                        title={'Shop Manager'}
                        subTitle={'Lagamakade.lk'}
                        text={'The Lagamakade website was created in the year 2020 to limit the public gathering to control the coronavirus status. I got the lot of experience about how to handel E-Commerce system and I using wordpress woocommer pluging and manage there sales in covid-19 period.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - Present'} 
                        title={'Higher National Diploma in Information Technology'}
                        subTitle={'SLIATE'}
                        text={'The Higher National Diploma in Information Technology (HNDIT) programme at the Sri Lanka Institute of Advanced Technological Education (SLIATE) was developed and commenced in the year 2000 to produce the middle level IT professionals required for the new millennium.'} 
                    />
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Diploma in Software Engineering'}
                        subTitle={'IJSE - Institute'}
                        text={'The Institute of Software Engineering which works towards the encouraging of students towards the speedily developing field. IJSE works efficiently with the sole intention of supplying the industry with highly skilled personnel who will work towards the development.'} 
                    />
                    <ResumeItem 
                        year={'2018'} 
                        title={'Advanced Levels'}
                        subTitle={'H/ Rajapaksha Central College - Weeraketiya'}
                        text={'Rajapaksa Central College is the Most Popular and Facilitated School in Southern Province, Sri Lanka. A Mixed School in the Hambantota District, Southern Province of Sri Lanka with a current Student Population of over 5000 Students. It was founded in 1940 by C.W.W. Kannangara.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
