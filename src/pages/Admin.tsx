import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useProjectCRUD, Project } from "@/hooks/useProjectCRUD";
import { ProjectList } from "@/components/admin/ProjectList";
import { ProjectEditorDialog } from "@/components/admin/ProjectEditorDialog";
import { UserManagement } from "@/components/admin/UserManagement";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Plus, LogOut, FolderOpen, Users } from "lucide-react";

const Admin = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    projects,
    loading,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  } = useProjectCRUD();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const handleCreateNew = () => {
    setEditingProject(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    const { error } = await deleteProject(id);
    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
    }
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);

    // Process tags from comma-separated string to array
    const processedData = {
      ...data,
      tags: data.tags
        ? data.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
        : null,
    };

    if (editingProject) {
      // Update existing
      const { error } = await updateProject(editingProject.id, processedData);
      if (error) {
        toast({
          title: "Error",
          description: "Failed to update project",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Project updated successfully",
        });
        setIsDialogOpen(false);
      }
    } else {
      // Create new
      const { error } = await createProject(processedData);
      if (error) {
        toast({
          title: "Error",
          description: "Failed to create project",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Project created successfully",
        });
        setIsDialogOpen(false);
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img
                src="/lovable-uploads/40a45ce3-148b-4900-8242-7a229b39f300.png"
                alt="Jason Sosa"
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-semibold text-white">
                Portfolio Admin
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-white/5 border border-white/10 mb-8">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Admin Users
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            {/* Actions Bar */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Projects</h2>
                <p className="text-muted-foreground">
                  Manage your portfolio projects
                </p>
              </div>
              <Button
                onClick={handleCreateNew}
                className="bg-accent hover:bg-accent/90"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Project
              </Button>
            </div>

            {/* Project List */}
            <ProjectList
              projects={projects}
              onEdit={handleEdit}
              onDelete={handleDelete}
              loading={loading}
            />

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-muted-foreground text-sm">Total Projects</p>
                <p className="text-2xl font-bold text-white">{projects.length}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-muted-foreground text-sm">Featured</p>
                <p className="text-2xl font-bold text-white">
                  {projects.filter((p) => p.featured).length}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-muted-foreground text-sm">Categories</p>
                <p className="text-2xl font-bold text-white">
                  {new Set(projects.map((p) => p.category).filter(Boolean)).size}
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <UserManagement />
          </TabsContent>
        </Tabs>
      </main>

      {/* Editor Dialog */}
      <ProjectEditorDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        project={editingProject}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default Admin;
