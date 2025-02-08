import { type GetVerificationEmailContentFn, type GetPasswordResetEmailContentFn } from 'wasp/server/auth';

const msgClickEmail = '次の検証Emailアドレスをクリックしてください'; // Click the link below to verify your email
const msgVerifyEmail = 'Emailを検証'; // 'Verify email'
const msgClickToReset = '次のリセット用リンクをクリックしてください'; // 'Click the link below to reset your password'
const msgResetPassword = 'パスワードをリセット'; // 'Reset password'

export const getVerificationEmailContent: GetVerificationEmailContentFn = ({ verificationLink }) => ({
  subject: `${msgVerifyEmail}`, // 'Verify your email',
  text: `${msgClickEmail}: ${verificationLink}`,
  html: `
    <p>${msgClickEmail}</p>
    <a href="${verificationLink}">${msgVerifyEmail}</a>
  `,
});

export const getPasswordResetEmailContent: GetPasswordResetEmailContentFn = ({ passwordResetLink }) => ({
  subject: `${msgResetPassword}`, // 'Password reset',
  text: `${msgClickToReset}: ${passwordResetLink}`,
  html: `
        <p>${msgClickToReset}</p>
        <a href="${passwordResetLink}">${msgResetPassword}</a>
    `,
});
