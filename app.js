import axios from "axios";
export default async (user_id) => {
    try {
        const { data:users } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);

        const { data:posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        console.log("users!!!!" , users);
        console.log("posts!!!" ,  posts);
    } catch(err){
        console.log(err)
    }
       
}