import { handleAuth, handleLogout, handleCallback } from '@auth0/nextjs-auth0';

export default handleAuth({
    async logout(req: any, res: any) {
        try {
          await handleLogout();
        } catch (error) {
            console.log(error)
        //   res.status(error.status || 400).end(error.message);
        }
      },
});
