import { Grid } from "@nextui-org/react";
import { FC } from "react";
import { CardPokemon } from "./CardPokemon";

interface FavoritesPokemonProps {
    favorites: number[];
}

export const FavoritesPokemon: FC<FavoritesPokemonProps> = ({favorites}) => {
    return ( 
        <Grid.Container gap={2} direction='row' justify="flex-start">
        {
            favorites.map((id) => (
                <CardPokemon id={id} key={id} />
            ))
        }
        </Grid.Container>
     );
}
 