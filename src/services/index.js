import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// POST
const postNewBlog = (data) => Post('posts', false, data);

// PUT
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data); 

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false); 

// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
const getComments = () => Get('comments', true)

const API = {
    postNewBlog,
    updateNewsBlog,
    deleteNewsBlog,
    getNewsBlog,
    getComments
}

export default API;