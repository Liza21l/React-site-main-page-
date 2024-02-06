import phoneImg from  './phone.webp'
import s from './img.module.scss'
const Post = () => {
    return (
        <div>
            <img  className={`${s.img}`} src={phoneImg}/>
        </div>
    )
}
export default Post