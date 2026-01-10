import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project } from "@/hooks/useProjectCRUD";
import { Loader2 } from "lucide-react";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  client_name: z.string().optional().nullable(),
  featured: z.boolean().default(false),
  logo_url: z.string().url("Invalid URL").optional().nullable().or(z.literal("")),
  preview_media_url: z.string().url("Invalid URL").optional().nullable().or(z.literal("")),
  youtube_url: z.string().url("Invalid URL").optional().nullable().or(z.literal("")),
  vimeo_url: z.string().url("Invalid URL").optional().nullable().or(z.literal("")),
  project_date: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  display_order: z.coerce.number().optional().nullable(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectEditorFormProps {
  project?: Project | null;
  onSubmit: (data: ProjectFormValues) => Promise<void>;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const CATEGORIES = [
  "Speaking",
  "Technology",
  "Media",
  "Press",
  "Product",
  "Innovation",
];

export function ProjectEditorForm({
  project,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: ProjectEditorFormProps) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || "",
      description: project?.description || "",
      category: project?.category || "",
      client_name: project?.client_name || "",
      featured: project?.featured || false,
      logo_url: project?.logo_url || "",
      preview_media_url: project?.preview_media_url || "",
      youtube_url: project?.youtube_url || "",
      vimeo_url: project?.vimeo_url || "",
      project_date: project?.project_date || "",
      tags: project?.tags?.join(", ") || "",
      display_order: project?.display_order || 0,
    },
  });

  const handleSubmit = async (data: ProjectFormValues) => {
    // Convert empty strings to null for optional fields
    const processedData = {
      ...data,
      logo_url: data.logo_url || null,
      preview_media_url: data.preview_media_url || null,
      youtube_url: data.youtube_url || null,
      vimeo_url: data.vimeo_url || null,
      project_date: data.project_date || null,
      description: data.description || null,
      category: data.category || null,
      client_name: data.client_name || null,
    };
    await onSubmit(processedData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Title *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Project title"
                    {...field}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Client Name */}
          <FormField
            control={form.control}
            name="client_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Client Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Bank of America"
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || undefined}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Project description..."
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white min-h-[100px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Preview Media URL */}
          <FormField
            control={form.control}
            name="preview_media_url"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Preview Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Logo URL */}
          <FormField
            control={form.control}
            name="logo_url"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Logo URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/logo.png"
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* YouTube URL */}
          <FormField
            control={form.control}
            name="youtube_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">YouTube URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://youtube.com/watch?v=..."
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Vimeo URL */}
          <FormField
            control={form.control}
            name="vimeo_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Vimeo URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://vimeo.com/..."
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Date */}
          <FormField
            control={form.control}
            name="project_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Project Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Display Order */}
          <FormField
            control={form.control}
            name="display_order"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Display Order</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tags */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-white">Tags (comma-separated)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ai, technology, speaking"
                    {...field}
                    value={field.value || ""}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Featured */}
          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 md:col-span-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-white/20 data-[state=checked]:bg-accent"
                  />
                </FormControl>
                <FormLabel className="text-white font-normal cursor-pointer">
                  Featured project
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-accent hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : project ? (
              "Update Project"
            ) : (
              "Create Project"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ProjectEditorForm;
