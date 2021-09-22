import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.3);
    justify-content: flex-end;
`;

export const ModalView = styled.View`
    height: 280px;
    background-color: #FFF;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`
    border-width: 3px;
    border-radius: 7px;
    border-color: #20e809;
    padding: 10px;
    width: 80%;
    font-size: 17px;
`;

export const ButtonRow = styled.View`
    flex-direction: row;
    width: 80%;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 120px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    border-radius: 7px;
`;

export const TextButton = styled.Text``;