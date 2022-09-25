import { Grid, Card } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from 'next/router';

interface CardPokemonProps {
    id: number;
}

export const CardPokemon: FC<CardPokemonProps> = ({id}) => {

    const router = useRouter();

    const onFavoritePressed = () => {
        router.push(`/pokemon/${id}`)
    }

    return ( 
        <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoritePressed}>
            <Card isHoverable isPressable css={{padding: 10}}>
                <Card.Image 
                    width={'100%'}
                    height={'140px'}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                />
            </Card>
        </Grid>
     );
}
