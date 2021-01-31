const listQuery = {
        "author": {    
            "name": 'Alan',
            "lastname": 'Toro'  
        },
        categories: ['MLA81636', 'MLA32277', 'MLA24681'],  
        items: [    
            {      
                "id": 'MLA876641593',      
                "title": 'Fuente Agua Recirculante Acero Inox Bebedero 2.4l Aurelia',      
                "price": {        
                    "currency": 'ARS',       
                    "amount": 4690,        
                    "decimals": null      
                },      
                "picture": 'http://http2.mlstatic.com/D_661276-MLA32959192845_112019-O.jpg',      
                "condition": 'new',      
                "city": 'Capital Federal',
                "free_shipping": true    
            },
            {      
                "id": 'MLA826741593',      
                "title": 'Fuente AguaSape',      
                "price": {        
                    "currency": 'ARS',       
                    "amount": 4690,        
                    "decimals": null      
                },      
                "picture": 'http://http2.mlstatic.com/D_661276-MLA32959192845_112019-O.jpg',      
                "condition": 'new',      
                "city": 'Capital Federal',
                "free_shipping": false    
            },
            {      
                "id": 'MLA826661593',      
                "title": 'Fuente de agua de rockencio',      
                "price": {        
                    "currency": 'ARS',       
                    "amount": 4690,        
                    "decimals": null      
                },      
                "picture": 'http://http2.mlstatic.com/D_661276-MLA32959192845_112019-O.jpg',      
                "condition": 'new',      
                "city": 'Mendoza',
                "free_shipping": true    
            },
        ]

}
const listCategories =  [
                {
                  "id": "MLA1071",
                  "name": "Animales y Mascotas"
                },
                {
                  "id": "MLA1081",
                  "name": "Gatos"
                },
                {
                  "id": "MLA81636",
                  "name": "Comederos y Bebederos"
                }
      ];
export {listQuery, listCategories}