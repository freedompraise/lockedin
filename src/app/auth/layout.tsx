// app/auth/layout.tsx
import { MainLogoText } from '@/components/MainLogo';
import { Separator } from '@/components/ui/Separator';
import { LayoutProps } from '@/lib/types/types';
import { ThemeDropDownMenu } from '@/components/ThemeDropdown';
import { redirect } from 'next/navigation';
import config from '@/lib/config/auth';
import { getSupabaseUserSession } from '@/lib/API/Services/supabase/user';
import { ToastContainer } from 'react-toastify';

export default async function AuthLayout({ children }: LayoutProps) {
  const sessionData = await getSupabaseUserSession(true);

  // if (sessionData?.user && !sessionData.user.profile) {
  //   redirect(config.routes.confirmEpired.link);
  // }

  // Reverse Auth Guard
  if (sessionData?.user && sessionData.user.profile) {
    redirect(config.redirects.toDashboard);
  }

  return (
    <>
      <ToastContainer />
      <div>
        <header className="p-6 mb-4">
          <div className="flex justify-between items-center">
            <MainLogoText />
            <ThemeDropDownMenu />
          </div>
          <Separator />
        </header>

        <main className="grid justify-center items-center">{children}</main>
      </div>
    </>
  );
}
