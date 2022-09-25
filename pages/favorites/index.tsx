import { Layout } from "../../components/layouts";
import { FavoritesPokemon, NoFavorites } from "../../components/ui";
import { useEffect, useState } from 'react';
import { pokemons } from "../../utils/localFavorites";
import { Card, Grid } from "@nextui-org/react";

const Favorites = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(()=>{
        setFavorites(pokemons());
    }, [])

    return (  
        <>
            <Layout title={'Favoritos'}>
                {
                    favorites.length === 0 ? 
                    <NoFavorites /> 
                    :
                    <FavoritesPokemon favorites={favorites} />
                }
            </Layout>
        </>
    );
}
 
export default Favorites;
