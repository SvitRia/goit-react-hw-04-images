import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ListImg } from "./ImageGallery.styled";


export const GallaryList = ({items}) => {
    return (
    <ListImg> 
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <GalleryItem mini={item.webformatURL} large={item.largeImageURL} alt={item.tags} />
                    </li>)
            })
            }
     </ListImg>
    )
}