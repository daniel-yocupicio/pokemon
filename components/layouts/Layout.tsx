import { FC } from "react"
import Head from "next/head"
import {Layout as LayoutProps} from '../../interfaces';
import { Navbar } from "../ui";

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title ? title : 'Pokemon App'}</title>
                <meta name="author" content="Daniel Guadalupe Yocupicio Vázquez" />
                <meta name="description" content="Información de pokemones" />
                <meta name="keywords" content="pokemon, pokedex"/>

                <meta property="og:title" content={'Información de ' + title} />
                <meta property="og:description" content={'Aplicación de pokemons, ' + title} />
                <meta property="og:image" content={origin + '/img/banner.png'} />
            </Head>

            <Navbar />

            <main
                style={{
                    padding: '0px 20px',

                }}
            >
                {children}
            </main>
        </>
    )
}

