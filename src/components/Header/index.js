import React from 'react';
import {
    Container,
    DateContainer,
    DayText,
    DateColumn,
    MonthText,
    YearText,
    DateText,
} from './styles';

export default function Header() {
    return (
        <Container>
            <DateContainer>
                <DayText>22</DayText>
                <DateColumn>
                    <MonthText>JAN</MonthText>
                    <YearText>2021</YearText>
                </DateColumn>
            </DateContainer>
            <DateText>SEXTA-FEIRA</DateText>
        </Container>
    );
}