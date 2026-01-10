import { useEffect, useState } from "react";
import { useAdminUsers, AdminUser } from "@/hooks/useAdminUsers";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Trash2, Shield, ShieldOff, Loader2, Users } from "lucide-react";

export function UserManagement() {
  const { user } = useAuth();
  const { toast } = useToast();
  const {
    admins,
    loading,
    fetchAdmins,
    addAdmin,
    removeAdmin,
    toggleAdminStatus,
  } = useAdminUsers();

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<AdminUser | null>(null);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  const handleAddAdmin = async () => {
    if (!newEmail.trim()) {
      toast({
        title: "Error",
        description: "Email is required",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const { error } = await addAdmin(newEmail.trim(), newName.trim() || undefined);

    if (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to add admin",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `${newEmail} has been added as an admin`,
      });
      setIsAddDialogOpen(false);
      setNewEmail("");
      setNewName("");
    }
    setIsSubmitting(false);
  };

  const handleDeleteAdmin = async () => {
    if (!selectedAdmin) return;

    setIsSubmitting(true);
    const { error } = await removeAdmin(selectedAdmin.id);

    if (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to remove admin",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `${selectedAdmin.email} has been removed`,
      });
    }
    setIsDeleteDialogOpen(false);
    setSelectedAdmin(null);
    setIsSubmitting(false);
  };

  const handleToggleStatus = async (admin: AdminUser) => {
    const { error } = await toggleAdminStatus(admin.id, !admin.is_active);

    if (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to update status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `${admin.email} has been ${admin.is_active ? "deactivated" : "activated"}`,
      });
    }
  };

  const isCurrentUser = (email: string) => user?.email === email;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-accent" />
          <div>
            <h2 className="text-xl font-bold text-white">Admin Users</h2>
            <p className="text-sm text-muted-foreground">
              Manage who can access the admin panel
            </p>
          </div>
        </div>
        <Button
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-accent hover:bg-accent/90"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Admin
        </Button>
      </div>

      {/* Admin List */}
      <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
        {loading && admins.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-accent" />
          </div>
        ) : admins.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No admin users yet</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Role</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins.map((admin) => (
                <TableRow
                  key={admin.id}
                  className="border-white/10 hover:bg-white/5"
                >
                  <TableCell className="text-white">
                    {admin.email}
                    {isCurrentUser(admin.email) && (
                      <Badge variant="outline" className="ml-2 text-accent border-accent">
                        You
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-white/70">
                    {admin.name || "—"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={admin.role === "super_admin" ? "default" : "secondary"}
                      className={
                        admin.role === "super_admin"
                          ? "bg-accent/20 text-accent border-accent"
                          : ""
                      }
                    >
                      {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={admin.is_active ? "default" : "secondary"}
                      className={
                        admin.is_active
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    >
                      {admin.is_active ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {!isCurrentUser(admin.email) && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleStatus(admin)}
                            className="text-white/70 hover:text-white hover:bg-white/10"
                            title={admin.is_active ? "Deactivate" : "Activate"}
                          >
                            {admin.is_active ? (
                              <ShieldOff className="w-4 h-4" />
                            ) : (
                              <Shield className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedAdmin(admin);
                              setIsDeleteDialogOpen(true);
                            }}
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Add Admin Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-background border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">Add New Admin</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm text-white">Email *</label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white">Name (optional)</label>
              <Input
                placeholder="John Doe"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              The user will be able to access the admin panel after logging in with this email via GitHub.
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddDialogOpen(false)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddAdmin}
              disabled={isSubmitting}
              className="bg-accent hover:bg-accent/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Adding...
                </>
              ) : (
                "Add Admin"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="bg-background border-white/10">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Remove Admin</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove <strong>{selectedAdmin?.email}</strong> from the admin list? They will no longer be able to access the admin panel.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/20 text-white hover:bg-white/10">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAdmin}
              className="bg-red-500 hover:bg-red-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Removing..." : "Remove"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default UserManagement;
