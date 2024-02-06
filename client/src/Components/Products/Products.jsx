import s from './products.module.scss'
import Post from '../Post/post';
const Products = () => {
    return (
        <div className={s.products}>
            <div className={s.products_block}>
                <Post/>
                <p className={s.Name}>IPhone 13</p>
                <p className={s.Name_price}>27 500 грн</p>
                <button className={s.btnAdd}>Додати в кошик</button>
            </div>
            <div className={s.products_block}>
                <Post/>
                <p className={s.Name}>IPhone 15</p>
                <p className={s.Name_price}>27 500 грн</p>
                <button className={s.btnAdd}>Додати в кошик</button>
            </div>
            <div className={s.products_block}>
                <Post/>
                <p className={s.Name}>IPhone 14</p>
                <p className={s.Name_price}>27 500 грн</p>
                <button className={s.btnAdd}>Додати в кошик</button>
            </div>
            <div className={s.products_block}>
                <Post/>
                <p className={s.Name}>IPhone 14 Pro</p>
                <p className={s.Name_price}>27 500 грн</p>
                <button className={s.btnAdd}>Додати в кошик</button>
            </div>
        </div>
    )
}

export default Products