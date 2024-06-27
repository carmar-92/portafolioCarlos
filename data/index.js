import global from './global';

import table from './table';

import catalogoData from './pages/catalogoData';

const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case '/catalogo.html':
            pageVariables = catalogoData;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
    return {
        ...pageVariables,
        ...table(page),
    };
}

export default getPageContext;