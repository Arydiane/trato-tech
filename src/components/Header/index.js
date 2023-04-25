import styles from './Header.module.scss'
import TituloSemImagem  from './TituloSemImagem'
import TituloComImagem from './TituloComImagem'

export default function Header({ titulo, descricao, imagem, children, className = "" }) {
    return (
        <header className={styles.header}>
            { titulo && !imagem && 
                <TituloSemImagem 
                    titulo={titulo} 
                    descricao={descricao} 
                >
                    {children}
                </TituloSemImagem> 
            }
            { titulo && imagem && 
                <TituloComImagem 
                    titulo={titulo} 
                    descricao={descricao} 
                    imagem={imagem}
                    className={className}
                > 
                    {children}
                </TituloComImagem>
            }
        </header>
    )
}