import { ForgotPasswordForm } from 'wasp/client/auth';
import { AuthPageLayout } from '../AuthPageLayout';
import { authAppearance } from '../appearance';
import appLogo from '../../client/static/logo-photo.webp'

export function RequestPasswordResetPage() {
  return (
    <AuthPageLayout>
      <ForgotPasswordForm appearance={authAppearance} />
    </AuthPageLayout>
  );
}
