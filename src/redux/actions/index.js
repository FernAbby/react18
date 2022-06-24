import shop from '../../api/shop'

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch({
            type: 'RECEIVE_PRODUCTS',
            products,
        });
    });
}
