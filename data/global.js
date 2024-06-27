const global = (path) => {
    return {
        title: 'Mi tienda',
        menuOptions: getMenuWithActivePath(path)
    }
}

const getMenuWithActivePath = (path)=>{
    return  [
        {
            label: 'Home',
            url: 'index.html',
            page: 'index',
        },
        {
            label: 'Acerca',
            url: 'about.html',
            page: 'about'
        },
        {
            label: 'Contacto',
            url: 'contact.html',
            page: 'contact'
        },
        {
            label: 'Catalogo',
            url: 'catalogo.html',
            page: 'catalogo'
        },
        {
            label: 'Oferta',
            url: 'ofertas.html',
            page: 'ofertas'
        },
        {
            label: 'Tabla',
            url: 'tabla.html',
            page: 'tabla'
        }
    ].map( o => {
        return {
            ...o,
            active: path.includes(o.url)
        }
    });
}

export default global;