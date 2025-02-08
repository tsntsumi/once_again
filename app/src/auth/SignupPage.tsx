import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { SignupForm } from 'wasp/client/auth';
import { AuthPageLayout } from './AuthPageLayout';
import { authAppearance } from './appearance';
import appLogo from '../client/static/logo-photo.webp'

export function Signup() {
  return (
    <AuthPageLayout>
      <SignupForm appearance={authAppearance} logo={appLogo} />
      <br />
      <span className='text-sm font-medium text-gray-900'>
        もうアカウントがある場合{/* I already have an account */} (
        <WaspRouterLink to={routes.LoginRoute.to} className='underline'>
          ログインする{/* go to login */}
        </WaspRouterLink>
        ).
      </span>
    </AuthPageLayout>
  );
}
