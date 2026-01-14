import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Github } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const { signIn, signInWithGithub, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if already logged in
  if (user) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
      setIsLoading(false);
    } else {
      toast({
        title: "Welcome back!",
        description: "Successfully logged in",
      });
      navigate("/admin", { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/40a45ce3-148b-4900-8242-7a229b39f300.webp"
              alt="Jason Sosa"
              className="h-12 w-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-white mb-2">
            Admin Login
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Sign in to manage portfolio content
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90"
              disabled={isLoading || isGithubLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white/5 px-4 text-muted-foreground">or</span>
            </div>
          </div>

          {/* GitHub Sign In */}
          <Button
            type="button"
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10"
            disabled={isLoading || isGithubLoading}
            onClick={async () => {
              setIsGithubLoading(true);
              const { error } = await signInWithGithub();
              if (error) {
                toast({
                  title: "Login failed",
                  description: error.message || "Could not sign in with GitHub",
                  variant: "destructive",
                });
                setIsGithubLoading(false);
              }
            }}
          >
            {isGithubLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting to GitHub...
              </>
            ) : (
              <>
                <Github className="mr-2 h-4 w-4" />
                Sign in with GitHub
              </>
            )}
          </Button>

          {/* Back link */}
          <p className="text-center mt-6">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              &larr; Back to website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
