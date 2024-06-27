const getMenuWithActivePath = (path)=>{
    return  [
        {
            nombre: 'Fútbol',
            descripcion: 'Deporte de equipo jugado entre dos conjuntos de 11 jugadores cada uno',
            requerimientos: 'Balón, campo de fútbol, portería',
            ranking: '5',
        },
        {
            nombre: 'Baloncesto',
            descripcion: 'Deporte de equipo jugado entre dos conjuntos de 11 jugadores cada uno',
            requerimientos: 'Balón, cancha de baloncesto, canasta',
            ranking: '4',
        }
        
    ].map( o => {
        return {
            ...o,
            active: path.includes(o.url)
        }
    });
}

export default table;
