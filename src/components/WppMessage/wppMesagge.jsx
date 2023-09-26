import wppMessageRedux from  '../../redux/vistHandler'
import { useDispatch } from 'react-redux';

const WppMessage =()=>{
const dispatch = useDispatch()

    const wppSubmit=(e)=>{
        e.preventDefault()
dispatch(wppMessageRedux())
    }
    return (
        <div> 
            <form onSubmit={wppSubmit} action="submit">
<input type="text" />
<button>Enviar</button>
            </form>

        </div>
    )
}
export default WppMessage;