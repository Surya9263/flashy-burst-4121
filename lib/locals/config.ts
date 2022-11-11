


const config = ()=>{
    const jwtPkey= process.env.JWTPKEY || "hfddfhfd125@564646444664154duhhddb655944d4d4dddsf"
    const jwtOkey= process.env.JWTOKEY || "hfddfhfd125@56464hgasvdvvvhafd154duhhddb655944d4d4dddsf"
    
    return {
        jwtPkey, jwtOkey
    }
}


export default config