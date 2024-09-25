import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-Color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

// adiciona a cor do tema ao loading
export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700
}))``;