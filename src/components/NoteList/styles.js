import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.Text`    
    max-width: 85%;
    font-size: 18px;
    color: rgba(0,0,0,0.75);
`;

export const MarkButton = styled.TouchableOpacity``;

export const Ratio = styled.View`
    margin-left: 15px;
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    border-width: 4px;
    border-color: #DDD;
    justify-content: center;
    align-items: center;
`;