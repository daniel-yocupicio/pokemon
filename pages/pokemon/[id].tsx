import {GetStaticProps, GetStaticPaths, NextPage} from 'next';
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from '../../interfaces/pokemon';
import {Grid, Card, Text, Button, Container, Image} from '@nextui-org/react';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
    const router = useRouter();   

    return ( 
        <Layout title={pokemon.name}>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{padding: '30px'}}>
                        <Card.Body>
                            <Card.Image 
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}    
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button color="gradient" ghost>Guardar en favoritos</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites: </Text>
                            <Container direction='row' display='flex'>
                                <Image 
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image 
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image 
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image 
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
     );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const id = ctx?.params?.id ? ctx.params.id : '0';
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {    
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1 }`);   

    return {
        paths: pokemons151.map(id => ({params: {id}})),
        fallback: false
    };
};
 
export default PokemonPage;