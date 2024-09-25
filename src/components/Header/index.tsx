import { Container, Logo, BackIcon, BackButton } from "./styles";
import logoImg from "@/assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

//criar uma propriedade no componente de deixa false por padrao
export function Header({ showBackButton = false }: Props) {
    return(
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}