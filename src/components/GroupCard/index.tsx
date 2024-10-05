import { Container, Title, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';

//faz a uniao de tipos de dados, unnifica as propriedades do touchable + o titulo
type Props = TouchableOpacityProps & {
   title: string
}

//rest = qualquer outra propriedade vai ser rest
export function GroupCard({ title , ...rest }: Props) {
    return (
        <Container {... rest }>
            <Icon />
            <Title>{title}</Title>
        </Container>
    );
}