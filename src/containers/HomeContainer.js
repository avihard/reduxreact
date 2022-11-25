import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../services/actions/actions'


const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProps = dispach => ({
    addToCartHandler: data => dispach(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home;
