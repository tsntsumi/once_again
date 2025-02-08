import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { VerifyEmailForm } from 'wasp/client/auth';
import { AuthPageLayout } from '../AuthPageLayout';

export function EmailVerificationPage() {
  return (
    <AuthPageLayout>
      <VerifyEmailForm />
      <br />
      <span className='text-sm font-medium text-gray-900'>
        すべてOKなら、{/* If everything is okay,  */}<WaspRouterLink to={routes.LoginRoute.to} className='underline'>ログインする{/* go to login */}</WaspRouterLink>
      </span>
    </AuthPageLayout>
  );
}
