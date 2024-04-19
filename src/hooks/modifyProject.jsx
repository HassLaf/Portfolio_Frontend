import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {useUpdate} from './useUpdate';

export function ProjectDialog({ projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags }) {
    const { updateProject,isLoading, error} = useUpdate(); 
    const handleManage = async () => {
        try {
          console.log('projectID HandleManage', projectID);
          await updateProject({projectID, title, shortDescription, description, period, thumbnail, ImagesList, Tags});
        } catch (error) {
          console.error('Erreur lors de la mise à jour du projet :', error);
        }
      };
      
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Modifier</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier Projet </DialogTitle>
          <DialogDescription>
            Make changes to the fields of your project
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Titre du projet
            </Label>
            <Input
              id="title"
              defaultValue = {title}
              className="col-span-3"
              placeholder="Titre du projet"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="shortDescription" className="text-right">
              Sortdescription of the project
            </Label>
            <Textarea
              id="shortDescription"
              defaultValue={shortDescription}
              className="col-span-3"
              placeholder="Short description of the project"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description of the project
            </Label>
            <Textarea
              id="description"
              defaultValue={description}
              className="col-span-3"
              placeholder="Description of the project"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="period" className="text-right">
              Hours Number
            </Label>
            <Input
              id="period"
              defaultValue = {period}
              className="col-span-3"
              placeholder="Hours Number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="thumbnail" className="text-right">
            thumbnail URL
            </Label>
            <Input
              id="thumbnail"
              defaultValue = {thumbnail}
              className="col-span-3"
              placeholder="Thumbnail URL"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ImagesList" className="text-right">
            thumbnail URL
            </Label>
            <Input
              id="ImagesList"
              defaultValue = {thumbnail}
              className="col-span-3"
              placeholder="Thumbnail URL"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Tags" className="text-right">
              Tags
            </Label>
            <Input
              id="Tags"
              defaultValue = {Tags}
              className="col-span-3"
              placeholder="Tags"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="Submit" onClick={handleManage} >Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
