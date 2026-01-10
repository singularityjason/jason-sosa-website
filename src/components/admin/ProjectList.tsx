import { Project } from "@/hooks/useProjectCRUD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Star, Image as ImageIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  loading?: boolean;
}

export function ProjectList({
  projects,
  onEdit,
  onDelete,
  loading = false,
}: ProjectListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12 border border-white/10 rounded-lg bg-white/5">
        <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">No projects yet</h3>
        <p className="text-muted-foreground">
          Click "Add New Project" to create your first project.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-white/5">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
              Preview
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
              Title
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hidden md:table-cell">
              Category
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hidden sm:table-cell">
              Featured
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {projects.map((project) => (
            <tr
              key={project.id}
              className="hover:bg-white/5 transition-colors"
            >
              {/* Preview */}
              <td className="px-4 py-3">
                {project.preview_media_url || project.logo_url ? (
                  <img
                    src={project.preview_media_url || project.logo_url || ""}
                    alt={project.title}
                    className="w-12 h-12 object-cover rounded-md bg-white/10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </td>

              {/* Title */}
              <td className="px-4 py-3">
                <div>
                  <p className="font-medium text-white truncate max-w-[200px]">
                    {project.title}
                  </p>
                  {project.client_name && (
                    <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                      {project.client_name}
                    </p>
                  )}
                </div>
              </td>

              {/* Category */}
              <td className="px-4 py-3 hidden md:table-cell">
                {project.category ? (
                  <Badge variant="secondary" className="bg-white/10">
                    {project.category}
                  </Badge>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>

              {/* Featured */}
              <td className="px-4 py-3 hidden sm:table-cell">
                {project.featured ? (
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>

              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(project)}
                    className="text-white hover:bg-white/10"
                  >
                    <Pencil className="w-4 h-4" />
                    <span className="sr-only">Edit</span>
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-background border-white/10">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          Delete Project
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete "{project.title}"?
                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-white/20 text-white hover:bg-white/10">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => onDelete(project.id)}
                          className="bg-red-500 hover:bg-red-600"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
