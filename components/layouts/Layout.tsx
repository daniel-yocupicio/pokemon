import { FC } from "react"
import Head from "next/head"
import {Layout as LayoutProps} from '../../interfaces';
import { Navbar } from "../ui";

export const Layout: FC<LayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title ? title : 'Pokemon App'}</title>
                <meta name="author" content="Daniel Guadalupe Yocupicio Vázquez" />
                <meta name="description" content="Información de pokemones" />
                <meta name="keywords" content="pokemon, pokedex"/>
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

