import React from 'react';
import BoxContainer from '../../components/boxContainer';
import BreadCrumb from '../../components/breadcrumb';
import formatNumber from '../../utils/functions';

export default class Item extends React.Component {
    constructor() {
        super();
        console.log('item.constructor()');
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            author: {
                name: 'Alan',
                lastname: 'Toro',
            },
            item: {
                id: 'MLA826641593',
                title: 'Fuente Agua Recirculante Acero Inox Bebedero 2.4l Aurelia',
                price: {
                    currency: 'ARS',
                    amount: 4690,
                    decimals: 0,
                },
                picture: 'http://http2.mlstatic.com/D_661276-MLA32959192845_112019-I.jpg',
                condition: 'new',
                free_shipping: true,
                sold_quantity: 250,
                description: 'Somos VIALACTEAWEB. UBICACIÓN Y HORARIOS Oficina comercial en san justo, la matanza ,cerca de la avenida Perón y la calle Matheu a dos cuadras de la avenida Juan Manuel de Rosas . Nuestro horario de atención es de lunes a viernes de 9 a 16 hs . ENVIOS Y RETIROS Los envíos son solo por mercado envíos no realizamos envíos en moto ni ningún otro medio .Podes retirar en los horarios indicados , solo tenes que traer tu dni , en caso de enviar otra persona tenes que autorizarla mediante mensaje desde la compra ,indicando nombre completo y dni. FORMAS DE PAGO Únicamente mediante los medios que ofrece mercado libre . FACTURA Todos nuestros productos se entregan con factura A o B. PRODUCTO NUEVO MODELO! La nueva fuente de acero inoxidable AURELIA es la solución perfecta para que tu mascota beba con frecuencia y se mantenga hidratado. Esta atractiva fuente cuenta con un amplia superficie de contacto del agua con el aire que maximiza la oxigenacion para un agua mas fresca y con mejor sabor. Apta también para perros de tamaño pequeño. IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS IMPORTANTE !!! NO INCLUYE ADAPTADOR USB A 220 VOLTS - NO funciona a pila ni bateria , tiene que estar conectado para poder funcionar -- PLATO DE ACERO INOXIDABLE: de alto grado -- AGUA SIEMPRE FRESCA: por sistema de recirculación -- MEJOR OXIGENACION: gran superficie de exposición -- DEPOSITO COMPACTO DE 2.4 LITROS -- AGUA SIEMPRE LIMPIA: incluye filtro -- PARTE SUPERIOR APTA PARA LAVAVAJILLAS -- LIBRE DE BPA - INDICADOR VISUAL DE AGUA - MUY FACIL DE LIMPIAR : Cada componente es fácilmente accesible y se puede limpiar con agua y jabón o detergente. Siempre asegúrese de enjuagar bien después de limpiar.',
            },
        };
    }

    render() {
        console.log('item.render()');
        const {
             picture, title, price, condition, sold_quantity, description,
            // eslint-disable-next-line react/destructuring-assignment
            } = this.state.item;
        const pictureEdit = picture.replace('-I.jpg', '-O.jpg');
        const conditionEdit = condition === 'new' ? 'Nuevo' : condition;
        return (
          <div className="container">
            <BreadCrumb />
            <BoxContainer containerStyles="padding-32">
              <div className="row">
                <div className="col">
                  <img className="img-fluid mb-32" src={pictureEdit} alt="" />
                  <div className="description">

                    <p className="t3 mb-32">{title}</p>
                    <p className="p3 mb-32">{description}</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="productstatus mb-16"><p className="p2">{`${conditionEdit} - ${sold_quantity} vendidos`}</p></div>
                  <p className="title mb-32 t4">{title}</p>
                  <p className="price mb-32 t1">
                    $
                    {formatNumber(price.amount)}
                  </p>
                  <button type="button" className="btn btn-md btn-primary btn-block">Comprar</button>
                </div>
              </div>
            </BoxContainer>
          </div>
        );
    }
}
