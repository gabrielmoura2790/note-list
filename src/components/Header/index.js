import React, { useState, useEffect } from 'react';
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
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dayExt, setDayExt] = useState('');

    const getMonth = new Date().getMonth();
    const getDayExt = new Date().getDay();

    useEffect(() => {
        setDay(new Date().getDate());
        setYear(new Date().getFullYear());

        if (getMonth === 0) {
            setMonth('JAN')
        } else if (getMonth === 1) {
            setMonth('FEV')
        } else if (getMonth === 2) {
            setMonth('MAR')
        } else if (getMonth === 3) {
            setMonth('ABR')
        } else if (getMonth === 4) {
            setMonth('MAIO')
        } else if (getMonth === 5) {
            setMonth('JUN')
        } else if (getMonth === 6) {
            setMonth('JUL')
        } else if (getMonth === 7) {
            setMonth('AGO')
        } else if (getMonth === 8) {
            setMonth('SET')
        } else if (getMonth === 9) {
            setMonth('OUT')
        } else if (getMonth === 10) {
            setMonth('NOV')
        } else if (getMonth === 11) {
            setMonth('DEZ')
        }

        if (getDayExt === 0) {
            setDayExt('DOMINGO');
        } else if (getDayExt === 1) {
            setDayExt('SEGUNDA-FEIRA');
        } else if (getDayExt === 2) {
            setDayExt('TERÇA-FEIRA');
        } else if (getDayExt === 3) {
            setDayExt('QUARTA-FEIRA');
        } else if (getDayExt === 4) {
            setDayExt('QUINTA-FEIRA');
        } else if (getDayExt === 5) {
            setDayExt('SEXTA-FEIRA');
        } else if (getDayExt === 6) {
            setDayExt('SÁBADO');
        }


    }, [])


    return (

        <Container>
            <DateContainer>
                <DayText>{day}</DayText>
                <DateColumn>
                    <MonthText>
                        {month}
                    </MonthText>
                    <YearText>{year}</YearText>
                </DateColumn>
            </DateContainer>
            <DateText>{dayExt}</DateText>
        </Container>
    );
}