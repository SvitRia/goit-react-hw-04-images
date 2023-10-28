import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ListImg } from "./ImageGallery.styled";


export const GallaryList = ({items}) => {
    return (
    <ListImg> 
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <GalleryItem miniImg={item.webformatURL} originalImg={item.largeImageURL} tags={item.tags} />
                    </li>)
            })
            }
     </ListImg>
    )
}