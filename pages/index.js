import {useEffect} from 'react'
import MainLayout from "../components/MainLayout";
import {fetchposts} from "../redux/actions/postAction";
import {useDispatch, useSelector} from "react-redux"
import {getPosts} from "../services/api";

export default function Home({ posts:serverPosts }) {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.post);

    useEffect(()=>{
        async function load(){
            await dispatch(fetchposts())
        }
        if(!serverPosts){
            load()
        }
    },[])

    if(!posts){
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

  return (
    <MainLayout>
        <div className="posts-list">
        {posts && posts.map(el=>(
            <div className={'post-card'}>
                <div className={'post-img-div'}><img className={'post-img'} src={el.image}/></div>
                <div className={'post-title-div'}>{el.title}</div>
                <div className={'post-body-div'}>{el.body}</div>
            </div>
        ))}
        </div>
      </MainLayout>
  )
}


Home.getInitialProps = async ({store,req})=>{
    if(!req){
        return {posts:null}
    }
    await store.dispatch(fetchposts())

    return{}
}

// Home.getInitialProps = async ({req})=>{
//     if(!req){
//         return {posts:null}
//     }
//     const response = await fetch( `${process.env.API_URL}/posts`)
//     console.log(`${process.env.API_URL}/posts`)
//     const posts = await response.json()
//
//     return{
//         posts
//     }
// }
