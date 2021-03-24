import view from './view';
import { getPosts, createPost } from './service';

getPosts();
createPost('Test2', 'SK');
view();