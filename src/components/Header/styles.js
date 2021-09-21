import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 20px;
    align-items: center;
`;

export const DateContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DayText = styled.Text`
    font-size: 40px;
    font-weight: bold;
`;

export const DateColumn = styled.View`
    margin-left: 5px;
    align-items: center;
`;

export const MonthText = styled.Text`
    color: rgba(0,0,0,0.6);
`;

export const YearText = styled.Text`
    color: rgba(0,0,0,0.6);
`;

export const DateText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: rgba(0,0,0,0.7);
`;