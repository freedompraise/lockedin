// app/dashboard/layout.tsx
import SideBar from './_PageSections/SideBar';
import Header from './_PageSections/Header';
import { SupabaseSession } from '@/lib/API/Services/supabase/user';
import { GetProfileByUserId } from '@/lib/API/Database/profile/queries';
import { redirect } from 'next/navigation';
import config from '@/lib/config/auth';
import { ProfileT } from '@/lib/types/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { LayoutProps } from '@/lib/types/types';

export default async function DashboardLayout({ children }: LayoutProps) {
  const sessionResponse = await SupabaseSession();
  const session = sessionResponse?.session;

  // Auth Guard
  if (!session) {
    redirect(config.redirects.requireAuth);
  }

  let profile: PostgrestSingleResponse<ProfileT[]>;
  if (session?.user) {
    profile = await GetProfileByUserId(session.user.id);
  }

  const display_name = profile?.data?.[0]?.display_name;
  const email = session?.user?.email;
  const avatar_url = session?.user?.user_metadata?.avatar_url;

  return (
    <main className="grid md:grid-cols-[auto_1fr] min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex flex-col">
        <Header email={email} display_name={display_name} avatar_url={avatar_url} />
        <div className="p-6">{children}</div>
      </div>
    </main>
  );
}
