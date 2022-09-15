import { FC } from "react";
import {useTheme, Text, Spacer, Link} from '@nextui-org/react';
import Image from "next/image";
import NextLink from "next/link";


export const Navbar: FC = () => {
    const {theme} = useTheme();

    return(
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray300.value,
        }}>
            <Image 
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} 
                alt="Icono de la app"
                width={70}
                height={70}   
            />

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flex: 1,
                paddingRight: '20px',
            }}>
            <NextLink href={'/'} passHref>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </Link>
            </NextLink>

            <NextLink href={'/favorites'}>
                <Link>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>
            </div>
        </div>
    )
}
