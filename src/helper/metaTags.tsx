
export const updatedMetaTags = (tags: any) => {
    if(tags.title){
        document.title = tags.title
    }
    if(tags.description){
        document?.querySelector('meta[name="description"]')?.setAttribute("content", tags.description);
    }
};