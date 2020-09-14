import {useEffect, useState} from 'react'
import MainLayout from "../components/MainLayout";
import {fetchposts} from "../redux/actions/postAction";
import {useDispatch, useSelector} from "react-redux"
import { useRouter } from 'next/router'

export default function Home({ posts:serverPosts }) {
    const router = useRouter()
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.post);
    const [isAuth,setAuth] = useState(false)


    useEffect(()=>{
       if(localStorage.getItem('isAuth')){
           setAuth(true)
            async function load(){
                await dispatch(fetchposts())
            }
            if(!serverPosts){
                load()
            }
        }else{
            router.push('/login')
        }
    },[])

    if(!posts){
        return<>
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
            </>
    }

  return <>
      {isAuth && (
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
      )}
  </>
}


Home.getInitialProps = async ({store,req})=>{
    if(!req){
        return {posts:null}
    }
    await store.dispatch(fetchposts())
    return{}
}

