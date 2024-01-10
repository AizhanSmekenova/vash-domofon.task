import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

interface Post {
  id: number;
  title: string;
  body: string;

}

const UserPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  return (
    <section className="posts">

      <div className="container mx-auto px-4 flex flex-col min-h-screen py-8">

       {loading ? <Loader/> :(
         <div className="grow space-y-8">
         <h2 className="text-3xl font-semibold">Посты пользователя</h2>
         <div className="wrapper grid sm:grid-cols-2 gap-4">
           {posts.slice(0, visiblePosts).map((post) => (
             <div key={post.id} className="p-4 shadow-lg rounded-xl space-y-4">
               <h3 className="text-xl font-medium">{post.title}</h3>
               <div>{post.body}</div>
             </div>
           ))}
         </div>
         {visiblePosts < posts.length && (
           <button
             onClick={loadMorePosts}
             className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
           >
             Загрузить еще
           </button>
         )}
         </div>
       )}

        <Nav/>

      </div>

    </section>

  );
};

export default UserPosts;
