import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
        // backgroundSize: 'cover',
        // backgroundImage: `url('https://cdn.discordapp.com/attachments/1079182002076532836/1249169515632132106/image.png?ex=66665344&is=666501c4&hm=e933fe130f298de70290d2784fbb869c69ac1b17c0430ffcacbbc6a82d0f5231&')`
    },
}))

export default useStyles