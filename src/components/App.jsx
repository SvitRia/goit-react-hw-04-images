import { SearchForm } from 'components/Searchbar/Searchbar';
import { GallaryList } from './ImageGallery/ImageGallery';
import { ButtonLoading } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'api';
import { useState, useEffect } from 'react';
import { Text } from './Text.styled';

export const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false
  // );
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const onSearchFilter = ({ value }) => {
    setSearchQuery( value );

    if (searchQuery === value) {
      return;
    }
    setGalleryItems([]);
    setPage(1);
    //    setError({error:false})
  };

  const resetFilters = () => {
    setSearchQuery('');
  };

  const onLoadMore = () => {
    setPage(prevState => ( prevState + 1 ));
  };

  const fetchGalleryImages = async (searchQuery, page) => {
    setLoading(true);
    try {
      const result = await fetchImages( searchQuery, page );
      const { totalHits, hits } = result;
      setTotalPage(Math.ceil(totalHits / 12));
      setGalleryItems(prevState => [...prevState, ...hits]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
        if (!searchQuery) { return };
   
        fetchGalleryImages(searchQuery, page);
    }, [searchQuery, page]
    );

  return (
    <div>
      <SearchForm
        value={searchQuery}
        onChangeFilter={onSearchFilter}
        resetFilter={resetFilters}
      />
          {galleryItems.length > 0 && <GallaryList items={galleryItems} />}
          
      {loading && <Loader />}

      {page > 0 && page < totalPage && <ButtonLoading onClick={onLoadMore} />}
      {galleryItems.length === 0 && (
        <Text>Sorry. There are no images ... 😭</Text>
      )}
    </div>
  );
};
