import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user?.email) {
        setIsAdmin(false);
        setCheckingAdmin(false);
        return;
      }

      const { data, error } = await supabase
        .from("admin_users")
        .select("id")
        .eq("email", user.email)
        .eq("is_active", true)
        .single();

      if (error || !data) {
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
      setCheckingAdmin(false);
    };

    if (!loading && user) {
      checkAdminStatus();
    } else if (!loading && !user) {
      setCheckingAdmin(false);
    }
  }, [user, loading]);

  if (loading || checkingAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You don't have permission to access the admin panel.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Logged in as: {user.email}
          </p>
          <a
            href="/"
            className="text-accent hover:underline"
          >
            Return to website
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;
