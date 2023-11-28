import { renderGallery } from './gallery.js';
import { initUploadPhoto } from './upload-form.js';
import { getData } from './api.js';
import { showErrorMessage } from './utilities.js';
import { initFilter } from './filters.js';

const bootstrap = async () => {
  try {
    const pictures = await getData();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();
initUploadPhoto();
