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
import { useAuthContext } from "./useAuthContext";
import React, { useState } from 'react';

export function ProjectDialog({ projectID,title, shortDescription, description, period, thumbnail, ImagesList, Tags }) {
    const { updateProject,isLoading, error} = useUpdate();
    

    const [ titleD, setTitle ] = useState(title);
    const [ shortDescriptionD, setShortDescription ] = useState(shortDescription);
    const [ descriptionD, setDescription ] = useState(description);
    const [ periodD, setPeriod ] = useState(period);
    const [ thumbnailD, setThumbnail ] = useState(thumbnail);
    const [ ImagesListD, setImagesList ] = useState(ImagesList);
    const [ TagsD, setTags ] = useState(Tags);
    const [isOpen, setIsOpen] = useState(false); 
    const { user } = useAuthContext();
    const handleManage = async (e) => {
        e.preventDefault();
        
        if(!user){
            console.error('Vous devez être connecté pour modifier un projet.');
            return;
        }
        try {
          console.log('projectID HandleManage', projectID);
          await updateProject({projectID, titleD, shortDescriptionD, descriptionD, periodD, thumbnailD, ImagesListD, TagsD});
          setIsOpen(false);
        } catch (error) {
          console.error('Erreur lors de la mise à jour du projet :', error);
        }
      };
      
    
  return (
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
              onChange={(e) => setTitle(e.target.value)}
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
                onChange={(e) => setShortDescription(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setPeriod(e.target.value)}
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
                onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ImagesList" className="text-right">
            your Images URL
            </Label>
            <Input
              id="ImagesList"
              defaultValue = {thumbnail}
              className="col-span-3"
              placeholder="ImagesList URL"
                onChange={(e) => setImagesList(e.target.value)}
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
                onChange={(e) => setTags(e.target.value)}
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
