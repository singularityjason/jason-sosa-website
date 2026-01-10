import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectEditorForm } from "./ProjectEditorForm";
import { Project } from "@/hooks/useProjectCRUD";

interface ProjectEditorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project | null;
  onSubmit: (data: any) => Promise<void>;
  isSubmitting?: boolean;
}

export function ProjectEditorDialog({
  open,
  onOpenChange,
  project,
  onSubmit,
  isSubmitting = false,
}: ProjectEditorDialogProps) {
  const handleSubmit = async (data: any) => {
    await onSubmit(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">
            {project ? "Edit Project" : "Create New Project"}
          </DialogTitle>
        </DialogHeader>
        <ProjectEditorForm
          project={project}
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ProjectEditorDialog;
