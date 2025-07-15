import { createClient } from "@/lib/supabase/client";
import { AppUser } from "@/lib/types";
import { useEffect, useState } from "react";

export const useCurrentUser = (): AppUser | null => {
  const [user, setUser] = useState<AppUser | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = createClient().auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const supabaseUser = session?.user;
        const metadata = supabaseUser.user_metadata;
        const appUser: AppUser = {
          id: supabaseUser.id,
          aud: supabaseUser.aud,
          email: supabaseUser.email,
          email_confirmed_at: supabaseUser.email_confirmed_at,
          last_sign_in_at: supabaseUser.last_sign_in_at,
          role: supabaseUser.role,
          first_name: metadata.first_name,
          last_name: metadata.last_name,
          display_name: metadata.display_name,
        };

        setUser(appUser ?? null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return user;
};
