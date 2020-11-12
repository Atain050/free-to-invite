import React from 'react';
import styled from 'styled-components';

const Member = () => {
    return (
        //TODO 名字,自介,常見揪團類別,
        <Container>
            <Backgroundicture>
                <Profilepicture />
            </Backgroundicture>
            <List>
                <p>pigone efkfkf</p>
                <p>@Pigone55 </p>
                <p>x_x</p>
            </List>
            <List2>
                <Listul>
                    <Listli>
                        <About href="">關於</About>
                    </Listli>
                    <Listli>
                        <About href="">揪團</About>
                    </Listli>
                    <Listli>
                        <About href="">參與</About>
                    </Listli>
                </Listul>
            </List2>
        </Container>
    );
};

export default Member;

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
`;

const Backgroundicture = styled.div`
    background-color: rgba(130, 119, 119, 0.1);
    padding-top: 65px;
    padding-bottom: 10px;

    background: #dae2f8; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #dae2f8,
        #d6a4a4
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #dae2f8,
        #d6a4a4
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Profilepicture = styled.div`
    width: 134px;
    height: 134px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.08);
    margin-left: 25px;
`;

const List = styled.div`
    background-color: #ffffff;
    padding-left: 30px;
    height: 85px;
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: 16px;
`;

const List2 = styled.div`
    font-size: 16px;
`;

const Listul = styled.ul`
    background-color: #ffffff;
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    display: flex;
`;

const Listli = styled.li`
    padding-left: 30px;
`;

const About = styled.a`
    color: black;
`;
