import '../styles/login.css'
import '../styles/posts.css'
import App from "next/app";
import {Provider} from "react-redux"
import store from "../redux/store";
import {createWrapper} from "next-redux-wrapper";

class MyApp extends App{
  render() {
    const {Component,pageProps} = this.props
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
  }
}
const makestore = () => store

const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
