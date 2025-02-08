import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { LoginForm } from 'wasp/client/auth';
import { AuthPageLayout } from './AuthPageLayout';
import { authAppearance } from './appearance';
import appLogo from '../client/static/logo-photo.webp'


export default function Login() {
  return (
    <AuthPageLayout>
      <LoginForm appearance={authAppearance} logo={appLogo} />
      <br />
      <span className='text-sm font-medium text-gray-900 dark:text-gray-900'>
        アカウント登録がまだなら→{/* Don't have an account yet? */}{' '}
<WaspRouterLink to={routes.SignupRoute.to} className='underline'>
  アカウント登録{/* go to signup */}
</WaspRouterLink>
                  .
        </span>
<br />
<span className='text-sm font-medium text-gray-900'>
  パスワードを忘れたら→ {/* Forgot your password? */}{' '}
  <WaspRouterLink to={routes.RequestPasswordResetRoute.to} className='underline'>
    パスワードリセット{/* reset it */}
  </WaspRouterLink>
  .
</span>
</AuthPageLayout>
);
}
