import { ORM } from 'redux-orm';

import Article from './Article';
import Image from './Image';

export { Article, Image }

// 注册一个 redux-orm
const orm = new ORM()
orm.register(Article, Image)
export default orm