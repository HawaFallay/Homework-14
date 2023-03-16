import { Router } from './controll/controllers';

import usersRouter from './users';
import blogRouter from './blogpost';
import commentRouter from './comments';

const apiRouter = new Router();

apiRouter.use('/user', usersRouter);
apiRouter.use('/blogpost', blogRouter);
apiRouter.use('/comments', commentRouter);

module.ecports = apiRouter;